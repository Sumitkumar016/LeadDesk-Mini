const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();


// 1. HELMET: Secures Express apps by setting various HTTP response headers.
// Must be configured early before any responses or headers are sent.
app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV === 'production',
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// 2. CORS: Cross-Origin Resource Sharing configuration.
// Allows frontend applications to interact with this API backend securely.
app.use(
  cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// 3. COMPRESSION: Significantly reduces JSON payload sizes sent over the network.
app.use(compression());


// 4. RATE LIMITING: Protects endpoints from brute-force & denial-of-service (DDoS) attacks.
// Strict Rate Limiter for Authentication Routes (Max 10 login requests per 15 minutes)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 10, // Limit each IP to 10 authentication requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: 'Too many authentication attempts from this IP. Please try again after 15 minutes.',
  },
});


// General Rate Limiter for Public & General API Routes (Max 100 requests per 15 minutes)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Limit each IP to 100 API requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests created from this IP. Please slow down.',
  },
});

// 5. BODY PARSERS: Parses incoming JSON and URL-encoded request payloads into req.body.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 6. REQUEST LOGGER: Morgan HTTP request logger middleware.
// Uses concise colored 'dev' format in development and standard Apache 'combined' format in production.
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev'));
}

// Connect Database
connectDB();


// Apply strict rate limiting to auth routes
app.use('/api/auth', authLimiter, require('./routes/authRoutes'));

// Apply general rate limiting to leads and dashboard API routes
app.use('/api/leads', apiLimiter, require('./routes/leadRoutes'));
app.use('/api/dashboard', apiLimiter, require('./routes/dashboardRoutes'));

// Health check endpoint (exempt from rate limits for monitoring tools)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'Operational',
    appName: 'LeadDesk Mini API',
    timestamp: new Date(),
  });
});


// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route Not Found - ${req.originalUrl}`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Global Error]', err.stack || err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
