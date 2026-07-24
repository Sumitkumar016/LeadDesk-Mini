Built as part of the Digital Heroes Full Stack Development Internship qualification task.

# LeadDesk Mini

> A modern, full-stack MERN Lead Management CRM enabling businesses to capture inbound inquiries through a high-converting public landing page and manage sales pipelines securely via an authenticated admin dashboard.

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## 🔗 Live Demo

- **Frontend Application**: https://lead-desk-mini-8n28.vercel.app/
- **Admin Dashboard**: https://lead-desk-mini-8n28.vercel.app/login/
- **GitHub Repository**: https://github.com/Sumitkumar016/LeadDesk-Mini/

---

## 📸 Screenshots

| Page / Feature | Preview |
| :--- | :--- |
| **Landing Page** | `![Landing Page Placeholder](https://via.placeholder.com/800x450?text=Landing+Page+Preview)` |
| **Admin Login** | `![Admin Login Placeholder](https://via.placeholder.com/800x450?text=Admin+Login+Preview)` |
| **Dashboard Overview** | `![Dashboard Overview Placeholder](https://via.placeholder.com/800x450?text=Dashboard+Overview+Preview)` |
| **Lead Table** | `![Lead Table Placeholder](https://via.placeholder.com/800x450?text=Lead+Table+Preview)` |

---

## ✨ Features

- **Responsive Landing Page**: Modern UI sections (Hero, Services, Why Choose Us, Live Metrics, Testimonials, Contact) fully responsive.
- **Lead Capture Form**: Public-facing inquiry submission form supporting real-time user input.
- **Client-side Validation**: Instant field validation powered by React Hook Form.
- **Server-side Validation**: Request sanitization and schema checking using `express-validator`.
- **MongoDB Storage**: Document storage hosted on MongoDB Atlas via Mongoose ORM.
- **Admin Login**: Secure login interface with email/password authentication.
- **JWT Authentication**: Stateless token generation using `jsonwebtoken` and `bcryptjs` password hashing.
- **Protected Routes**: Client-side route guards enforcing JWT authentication for sensitive admin views.
- **Dashboard Statistics**: Real-time stats (Total Leads, New, Contacted, Closed, Conversion Rate).
- **Search Leads**: Instant search filtering across lead names, emails, messages, and statuses.
- **Status Management**: Workflow state updates (`New` → `Contacted` → `Closed`) synced with database.
- **Loading States**: Animated pulse skeleton loaders during data fetching to prevent layout shifts.
- **Error Handling**: Centralized error responses for network failures, invalid auth, missing resources, and server faults.
- **Toast Notifications**: Interactive notifications via React Hot Toast for success and error feedback.
- **Clean REST API**: Structured JSON API adhering to standard RESTful principles and HTTP status codes.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Role & Usage |
| :--- | :--- |
| **React 19** | Core UI component framework |
| **Vite** | Fast build tool & dev server |
| **React Router DOM** | Client-side routing & protected route wrappers |
| **Tailwind CSS** | Utility-first styling with modern UI components |
| **Axios** | HTTP client with automatic JWT header interceptors |
| **Context API** | Global state management (`AuthContext` & `LeadContext`) |
| **React Hook Form** | Form state management & client-side validation |
| **React Hot Toast** | Responsive alert toast notifications |
| **Lucide React** | SVG icon library |

### Backend
| Technology | Role & Usage |
| :--- | :--- |
| **Node.js** | Server runtime environment |
| **Express.js** | Web framework for REST API endpoints |
| **MongoDB Atlas** | Cloud NoSQL database hosting |
| **Mongoose** | MongoDB object modeling for Node.js |
| **JWT (jsonwebtoken)** | Stateless authentication bearer tokens |
| **bcryptjs** | Password hashing algorithm |
| **express-validator** | Server-side request payload validation middleware |
| **dotenv & cors** | Environment configuration & Cross-Origin Resource Sharing |

---

## 🏗️ Project Architecture

```
[ Browser (User / Admin) ] ──▶ [ React 19 Frontend (Vite) ] ──▶ [ Axios HTTP / JWT ]
                                                                        │
[ MongoDB Atlas Database ] ◄── [ Mongoose ORM ] ◄── [ Express REST API (Auth Middleware) ]
```

### Complete Request Lifecycle
1. **User Action**: A prospect submits a lead or an admin performs a dashboard operation.
2. **React Client**: Inputs are checked via React Hook Form before Axios dispatches the request (attaching JWT token for protected routes).
3. **Express Middleware**: Express receives the request, validates the payload using `express-validator`, and verifies the JWT via `authMiddleware`.
4. **Controller & Mongoose**: Controllers execute business logic and perform CRUD operations on MongoDB Atlas via Mongoose models.
5. **Response Cycle**: Express sends back JSON responses with HTTP status codes (200, 201, 400, 401, 500) to update React Context and UI state dynamically.

---

## 📁 Folder Structure

```
LeadDesk-Mini/
├── backend/
│   ├── config/          # MongoDB connection & admin auto-seeder (db.js)
│   ├── controllers/     # Controller logic (authController, leadController, dashboardController)
│   ├── middleware/      # Custom middleware (authMiddleware, validatorMiddleware)
│   ├── models/          # Mongoose schemas (Admin.js, Lead.js)
│   ├── routes/          # Express route definitions (authRoutes, leadRoutes, dashboardRoutes)
│   ├── .env             # Local server environment configuration
│   ├── package.json     # Backend scripts and dependencies
│   └── server.js        # Main Express server entry point
└── frontend/
    ├── src/
    │   ├── components/  # Modular UI (admin/, common/, public/)
    │   ├── context/     # Global state (AuthContext.jsx, LeadContext.jsx)
    │   ├── hooks/       # Custom hooks (useAuth.js, useLeads.js)
    │   ├── layouts/     # Route wrappers (PublicLayout.jsx, AdminLayout.jsx)
    │   ├── pages/       # View components (HomePage, LoginPage, AdminDashboardPage, AdminLeadsPage, NotFoundPage)
    │   ├── services/    # Axios client instance (api.js)
    │   ├── utils/       # Formatters & utilities (formatters.js)
    │   ├── App.jsx      # React Router configuration & providers
    │   └── main.jsx     # DOM mounting & index.css entry
    ├── vite.config.js
    └── package.json
```

---

## ⚙️ Installation & Setup

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
# Server running at http://localhost:5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
# App running at http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file in the `backend` directory (refer to `.env.example`):

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

> [!CAUTION]
> Do not commit `.env` files containing production secrets to public version control.

---

## 📑 API Contract

| Endpoint | Method | Auth | Purpose |
| :--- | :--- | :--- | :--- |
| `/api/auth/login` | `POST` | Public | Authenticate admin & generate JWT token |
| `/api/auth/me` | `GET` | Protected | Verify JWT session and return admin profile |
| `/api/leads` | `POST` | Public | Submit new lead inquiry from landing page |
| `/api/leads` | `GET` | Protected | Retrieve all leads (supports `search` & `status` filters) |
| `/api/leads/:id/status` | `PATCH` | Protected | Update lead status (`New`, `Contacted`, `Closed`) |
| `/api/dashboard/stats` | `GET` | Protected | Fetch summary metrics (counts, breakdown, total budget) |

### Endpoint Details

#### 1. `POST /api/auth/login` (Public)
- **Body**: `{ "email": "admin@leaddesk.com", "password": "admin123" }`
- **Success (`200 OK`)**: `{ "success": true, "token": "<JWT_TOKEN>", "admin": { "id": "...", "email": "admin@leaddesk.com" } }`
- **Error (`401 Unauthorized`)**: `{ "success": false, "message": "Invalid email or password" }`

#### 2. `GET /api/auth/me` (Protected)
- **Headers**: `Authorization: Bearer <JWT_TOKEN>`
- **Success (`200 OK`)**: `{ "success": true, "admin": { "id": "...", "email": "admin@leaddesk.com" } }`
- **Error (`401 Unauthorized`)**: `{ "success": false, "message": "Not authorized, token failed" }`

#### 3. `POST /api/leads` (Public)
- **Body**: `{ "name": "Jane Doe", "email": "jane@example.com", "budget": 5000, "message": "Inquiry details..." }`
- **Success (`201 Created`)**: `{ "success": true, "message": "Lead submitted successfully", "lead": { "_id": "...", "status": "New", ... } }`
- **Error (`400 Bad Request`)**: `{ "success": false, "errors": [{ "field": "email", "message": "Invalid email" }] }`

#### 4. `GET /api/leads` (Protected)
- **Query Params**: `?search=jane&status=New`
- **Success (`200 OK`)**: `{ "success": true, "count": 1, "leads": [...] }`
- **Error (`401 Unauthorized`)**: `{ "success": false, "message": "Access denied. No token provided." }`

#### 5. `PATCH /api/leads/:id/status` (Protected)
- **Body**: `{ "status": "Contacted" }`
- **Success (`200 OK`)**: `{ "success": true, "message": "Status updated", "lead": { "_id": "...", "status": "Contacted" } }`
- **Error (`400 Bad Request`)**: `{ "success": false, "message": "Invalid status option" }`

#### 6. `GET /api/dashboard/stats` (Protected)
- **Success (`200 OK`)**: `{ "success": true, "stats": { "totalLeads": 42, "newLeads": 15, "contactedLeads": 18, "closedLeads": 9, "totalBudget": 185000 } }`
- **Error (`401 Unauthorized`)**: `{ "success": false, "message": "Token verification failed" }`

---

## 🗄️ Database Schema

### Admin Schema
- `email` *(String, Required, Unique, Trim)*: Admin user identifier used during login authentication.
- `password` *(String, Required)*: Salted and hashed password created using `bcryptjs`.
- `createdAt` *(Date, Default: Date.now)*: Timestamp recording when admin account was seeded/created.

### Lead Schema
- `name` *(String, Required, Trim)*: Full name of client submitting lead inquiry.
- `email` *(String, Required, Trim, Lowercase)*: Prospect email address.
- `budget` *(Number, Required, Min: 0)*: Estimated project budget allocation.
- `message` *(String, Required, Trim)*: Details regarding project scope.
- `status` *(String, Enum: `['New', 'Contacted', 'Closed']`, Default: `'New'`)*: Sales pipeline phase.
- `createdAt` *(Date, Default: Date.now)*: Timestamp when lead was captured.

---

## 🔐 Authentication Approach

- **Admin Login Flow**: Credentials submitted on `/login` are verified against hashed values using `bcrypt.compare()`.
- **Password Hashing**: Cryptographic password protection enforced with `bcryptjs`.
- **JWT Generation & Verification**: Server signs JWT with `jwt.sign()`. Interceptor sends token in `Authorization: Bearer <token>` header, verified via `jwt.verify()` middleware.
- **Protected Routes**: Custom route guard prevents unauthenticated visitors from accessing `/admin` pages.
- **Logout**: Clears token from `localStorage` and resets `AuthContext` state.
- **Why JWT Selected**: Stateless authorization allows RESTful decoupling and eliminates server session storage.

---

## 🛡️ Validation Architecture

### Client-side Validation
- **Required Fields & Formats**: Validates Name, Email (RegEx), Budget (`> 0`), and Message length before dispatching HTTP calls.
- **Immediate Feedback**: React Hook Form presents instant inline error indicators without network overhead.

### Server-side Validation
- **express-validator Middleware**: Sanitizes inputs and validates body parameters before hitting controllers.
- **Rejection & Status Codes**: Rejects invalid payloads with HTTP `400 Bad Request` and structured field errors.
- **Database Protection**: Shields MongoDB from NoSQL injections and malformed type injections.
- **Why Backend Validation is Mandatory**: Client validation can be bypassed via direct HTTP callers (curl/Postman); backend validation guarantees absolute data integrity.

---

## 💡 Design Decisions

### Decision 1: JWT Authentication over Session Cookies
- **Why Selected**: Enables a stateless, decoupled architecture for REST APIs.
- **Advantages**: No server session lookup overhead, easier horizontal scaling, and cross-platform flexibility.

### Decision 2: MongoDB (NoSQL) over Relational SQL
- **Why Selected**: Document-oriented storage aligns natively with JSON payloads and flexible JavaScript objects.
- **Advantages**: Fast read performance, dynamic schema updates, and easy cloud deployment on MongoDB Atlas.

### Decision 3: Context API over Redux Toolkit
- **Why Selected**: Lightweight global state requirements (Auth + Lead management).
- **Advantages**: Zero extra bundle overhead, fast setup, simple component integration, and no Redux boilerplate.

---

## 🔒 Security Features

- **Password Hashing**: Stored passwords secured via `bcryptjs` salt hashing.
- **JWT Authorization**: Encrypted tokens protect administrative endpoints from unauthorized access.
- **Protected Routes**: Client-side navigation guards prevent unauthenticated route rendering.
- **Input Validation**: Layered validation (React Hook Form + `express-validator`) blocks malicious payloads.
- **CORS Policy**: Configured Cross-Origin Resource Sharing restricts requests to authorized origins.
- **Environment Variables**: Sensitive secrets stored safely in `.env` files.
- **Authentication Middleware**: Centralized middleware checks token validity on protected routes.

---

## ⚡ Performance Optimizations

- **Efficient API Calls**: Centralized Axios configuration with targeted backend query filtering.
- **Optimized React Rendering**: Memoized component views to minimize unnecessary re-renders.
- **Loading States**: Animated pulse skeleton screens eliminate cumulative layout shift (CLS).
- **Reusable Components**: Modular architecture (`StatusBadge`, `DashboardCard`, `Modal`) for optimal code reuse.
- **Context Optimization**: Split context (`AuthContext` and `LeadContext`) prevents unnecessary component re-renders.
- **Fast MongoDB Queries**: Indexed fields (`status`, `createdAt`) and lean query projections speed up responses.

---

## ⚠️ Error Handling Strategy

- **Frontend Validation**: Intercepts malformed inputs locally before sending requests.
- **Backend Validation**: Returns clear field-level error messages (`400 Bad Request`).
- **Authentication Errors**: Unauthenticated calls yield `401 Unauthorized`, clearing stale tokens and redirecting to login.
- **404 Handling**: Custom 404 views for client-side routes and structured 404 responses for missing backend resources.
- **Server Errors**: Try-catch wrappers across controllers log internal errors and return HTTP `500 Server Error`.
- **Network Failures**: Axios interceptors handle lost connectivity and display interactive React Hot Toast notifications.

---

## 🚀 Future Improvements

1. **Pagination & Infinite Scroll**: Server-side pagination for scaling to high lead volumes.
2. **Role-Based Access Control (RBAC)**: Support Manager, Admin, and Sales Representative access tiers.
3. **Dark / Light Theme Toggle**: User-configurable UI theme toggle via Tailwind CSS.
4. **CSV / Excel Export**: One-click export for offline lead reports.
5. **Advanced Analytics & Charts**: Graphical data visualization using Recharts.
6. **Automated Email Notifications**: Admin alerts via Nodemailer on new submissions.
7. **Audit Logs & History**: Activity logging for status changes with timestamps.
8. **Internal Lead Notes**: Allow admins to attach internal follow-up notes to leads.
9. **File Attachment Uploads**: Support document/RFP attachments in the inquiry form.
10. **Automated Lead Scoring**: Auto-assign priority scores based on budget thresholds.

---

## 🤖 AI Usage

ChatGPT and Antigravity IDE were used during development to assist with project architecture brainstorming, form validation, debugging, UI refinement, and documentation. All AI-generated suggestions were carefully reviewed, customized, tested, and modified manually before being integrated into the final implementation.

---

## 🧪 Test Credentials

For evaluation and testing, use the default seeded admin account:

- **Email**: `admin@leaddesk.com`
- **Password**: `admin123`

---


## 👤 Author

- **Name**: Sumit Kumar
- **GitHub**: https://github.com/Sumitkumar016
- **LinkedIn**: https://www.linkedin.com/in/sumit-kumar-404aa0351/
