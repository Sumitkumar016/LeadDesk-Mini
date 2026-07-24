# LeadDesk Mini - Full-Stack CRM & Lead Management System

LeadDesk Mini is a modern, production-ready MERN Stack application built for SaaS companies and agencies to capture inbound lead inquiries, qualify prospects, and manage sales pipelines seamlessly.

---

## 🚀 Tech Stack

### Frontend
- **React 19** + **Vite 6**
- **React Router DOM v7** (Client-side routing & protected routes)
- **Tailwind CSS v4** (Modern glassmorphism UI & custom design system)
- **Axios** (Centralized API service layer with JWT request/response interceptors)
- **Context API** (`AuthContext` & `LeadContext` for global state management)
- **React Hook Form** (Form validation & state handling)
- **React Hot Toast** (Toast notifications)
- **Lucide React** (Modern SVG icons)

### Backend
- **Node.js** + **Express.js** (Clean RESTful Architecture)
- **MongoDB Atlas** + **Mongoose** (Data modeling & schemas)
- **JWT Authentication** (JSON Web Tokens)
- **bcryptjs** (Password hashing)
- **express-validator** (Request payload validation)
- **dotenv** & **cors**

---

## 📁 Scalable Folder Structure

```
Digital Hero/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection & admin seeder
│   ├── controllers/
│   │   ├── authController.js     # Login & profile authentication
│   │   ├── leadController.js     # Create lead, search, status updates
│   │   └── dashboardController.js# Metric counters & statistics
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT route protection middleware
│   │   └── validatorMiddleware.js# express-validator error handler
│   ├── models/
│   │   ├── Admin.js              # Admin schema (email, bcrypt password)
│   │   └── Lead.js               # Lead schema (name, email, budget, message, status)
│   ├── routes/
│   │   ├── authRoutes.js         # POST /api/auth/login, GET /api/auth/me
│   │   ├── leadRoutes.js         # POST /api/leads, GET /api/leads, PATCH /api/leads/:id/status
│   │   └── dashboardRoutes.js    # GET /api/dashboard/stats
│   ├── .env                      # Environment configuration
│   ├── package.json
│   └── server.js                 # Express application entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/            # AdminSidebar, AdminNavbar, DashboardCard, LeadTable, StatusBadge
│   │   │   ├── common/           # Navbar, Footer, SkeletonLoader, EmptyState, Modal
│   │   │   └── public/           # Hero, Services, WhyChooseUs, About, Stats, Testimonials, LeadForm
│   │   ├── context/
│   │   │   ├── AuthContext.jsx   # Global Admin auth & token storage
│   │   │   └── LeadContext.jsx   # Global leads state & stats counters
│   │   ├── hooks/
│   │   │   ├── useAuth.js        # Custom auth hook
│   │   │   └── useLeads.js       # Custom leads hook
│   │   ├── layouts/
│   │   │   ├── PublicLayout.jsx  # Public landing page layout
│   │   │   └── AdminLayout.jsx   # Protected Admin Dashboard layout
│   │   ├── pages/
│   │   │   ├── HomePage.jsx      # Public SaaS landing page
│   │   │   ├── LoginPage.jsx     # Admin authentication page
│   │   │   ├── AdminDashboardPage.jsx # Admin metric overview
│   │   │   ├── AdminLeadsPage.jsx     # Admin leads table directory
│   │   │   └── NotFoundPage.jsx  # 404 page
│   │   ├── services/
│   │   │   └── api.js            # Axios API service layer
│   │   ├── utils/
│   │   │   └── formatters.js     # Currency & date formatters
│   │   ├── App.jsx               # Application routes & toast container
│   │   ├── main.jsx              # React DOM mounting
│   │   └── index.css             # Custom Tailwind styling & design tokens
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── package.json                  # Root monorepo orchestration
```

---

## 🔐 Default Admin Credentials

On backend startup, the server automatically seeds a default admin account into MongoDB if none exists:

- **Email**: `admin@leaddesk.com`
- **Password**: `admin123`

---

## 🔌 REST API Reference

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Public | Admin login (Returns JWT token) |
| `GET` | `/api/auth/me` | Protected (Admin) | Verify active JWT session |
| `POST` | `/api/leads` | Public | Submit new lead inquiry |
| `GET` | `/api/leads` | Protected (Admin) | Retrieve leads (Supports `search` & `status` filters) |
| `PATCH` | `/api/leads/:id/status` | Protected (Admin) | Update status (`New`, `Contacted`, `Closed`) |
| `GET` | `/api/dashboard/stats` | Protected (Admin) | Retrieve lead metrics summary |

---

## ⚙️ Quick Start Installation & Setup

### 1. Install Dependencies

In the root folder, run:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Start Backend Server
```bash
cd backend
npm run dev
# Server starts on http://localhost:5000
```

### 3. Start Frontend App
```bash
cd frontend
npm run dev
# App starts on http://localhost:3000
```

---

## ✨ Features Implemented

- ✅ **Public SaaS Landing Page**: Hero, Services, Why Choose Us, About, Live Stats, Testimonials, Contact/Lead Form, and Footer.
- ✅ **Validated Lead Capture**: React Hook Form client-side validation + `express-validator` backend verification for email formats, non-negative budget, required fields, and whitespace trimming.
- ✅ **Duplicate Submission Protection**: Buttons disabled with loading spinner while network requests are pending.
- ✅ **Protected Admin Dashboard**: JWT authentication required for `/admin` routes with automatic redirect to `/login` for unauthenticated visitors.
- ✅ **Real-Time Status Management**: Change lead status inline (`New`, `Contacted`, `Closed`) with instant database sync and toast alerts.
- ✅ **Search & Filter Engine**: Instant search by Lead Name, Email, Message, or Status. Filter by status categories.
- ✅ **Skeleton Loaders & Zero-States**: Smooth UX transitions with pulse loaders and empty state placeholders.
- ✅ **Logout Confirmation Dialog**: Safety modal prompt before terminating admin sessions.
