# ShipGuard — Logistics Monitoring & Claims Management Platform

> Bringing transparency, speed, and accountability to package insurance and courier claim management — built with React, powered by Node.js, and persisted in MongoDB.

<br />

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/yourusername/shipguard?style=social" alt="GitHub Stars" />
  <img src="https://img.shields.io/github/forks/yourusername/shipguard?style=social" alt="GitHub Forks" />
  <img src="https://img.shields.io/github/issues/yourusername/shipguard" alt="Open Issues" />
  <img src="https://img.shields.io/github/last-commit/yourusername/shipguard" alt="Last Commit" />
</p>

---

## Short Description

**ShipGuard** is a React-driven logistics monitoring and insurance claim management platform designed for e-commerce sellers and personal shippers. It simplifies the claim filing process, provides real-time shipment tracking, and delivers data-driven courier analytics — all through a clean, component-based React interface backed by a lightweight Node.js API and MongoDB.

---

## Tech Stack (Overview)

<p align="left">
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="60" height="60" />
  </a>
  &nbsp;&nbsp;
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="60" height="60" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.mongodb.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="60" height="60" />
  </a>
  &nbsp;&nbsp;
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" width="60" height="60" />
  </a>
</p>

---

## About the Project

ShipGuard was conceived as a response to a persistent and widely ignored problem in the logistics industry: the lack of a transparent, accessible, and fast system for handling package loss or damage claims. E-commerce sellers — from individual vendors to small businesses — lose both money and customer trust when courier companies mishandle parcels and offer no meaningful recourse.

This project is **frontend-first** in its architecture. Every page, interaction, and data visualization was designed in Figma before a single line of code was written. The React application is the core deliverable, offering a rich, dashboard-driven experience. The Node.js backend serves solely as a RESTful API layer, and MongoDB stores shipment, claim, and courier data in a flexible document model.

ShipGuard is open-source under the MIT License. It is built to be contributor-friendly, with clearly separated concerns, well-named components, and documented hooks and services.

---

## Problem Statement

E-commerce sellers and personal shippers face package loss or damage at a rate of approximately **3–5% during courier transit**, yet the systems available to handle such incidents are wholly inadequate:

- **Lack of transparency** — Shippers have no visibility into how packages are handled between pickup and delivery
- **Complex and manual claim filing** — Existing processes involve extensive paperwork, phone calls, and physical documentation
- **Long processing times** — Claims routinely take 30–45 days to resolve, leaving sellers without recourse for extended periods
- **Frequent disputes and rejections** — Claims are often rejected without clear justification, and the appeals process is opaque
- **Expensive insurance options** — Third-party logistics insurance is costly and often poorly suited to small-volume shippers
- **No accountability mechanism** — There is no standardized way to compare courier companies on reliability, damage rates, or claim resolution speed

The cumulative result is financial loss for sellers, deteriorating customer experience for buyers, and eroding trust in logistics services as a whole.

---

## Solution

ShipGuard introduces a unified platform that addresses each of these problems through a structured, data-driven React interface. The solution is organized around eight core UI flows, each designed to eliminate a specific pain point:

**Landing Page**
Clearly communicates the platform's value proposition and guides new users through the problem ShipGuard solves. Designed for conversion with a minimal, professional layout.

**Authentication (Login / Signup)**
Secure JWT-based authentication allowing sellers and shippers to register and access their personalized dashboard. Form validation is handled client-side for instant feedback.

**Dashboard**
The central hub of the application. Displays aggregate statistics including total active shipments, open claims, courier performance scores, and recent alerts — all in a visually structured, card-and-chart layout.

**Shipment Tracking Page**
Provides a step-by-step visual journey of each package: Pickup → In Transit → Out for Delivery → Delivered. Each stage includes timestamps, handling location, and any flagged anomalies. Eliminates the opacity that leads to undetected loss.

**Claim Submission Page**
A guided, multi-step form that allows users to file a claim by uploading proof (photos, receipts, tracking records), selecting the shipment in question, and describing the issue. Reduces friction from a multi-day manual process to minutes.

**Claims Ledger Page**
A filterable, sortable table of all submitted claims with real-time status indicators: Submitted, Under Review, Approved, or Rejected. Users can click into individual claims to view timelines and communications.

**Courier Analytics Page**
A comparative data visualization page that ranks courier companies by key performance indicators — on-time rate, damage rate, claim approval rate, and average resolution time. Provides accountability through data.

**Alerts Page**
A notification center displaying risk alerts (delay detected, handling anomaly), claim status changes, and system updates — sorted by urgency and timestamp.

---

## Features

**Landing & Onboarding**
- Marketing landing page explaining the platform with a clear call-to-action
- Responsive layout across desktop, tablet, and mobile viewports
- Smooth scroll navigation and hero section with platform statistics

**Authentication**
- User registration and login with form validation and inline error messages
- JWT-based session management with secure token storage
- Protected route handling in React Router — unauthenticated users are redirected to login

**Dashboard**
- Summary cards showing total shipments, active claims, at-risk packages, and resolved claims
- Line chart displaying claim volume trends over a selectable time period
- Donut chart showing claim outcome distribution (approved, rejected, pending)
- Recent activity feed with direct links to related shipment and claim records

**Shipment Tracking**
- Visual progress stepper showing package journey stages from pickup to delivery
- Per-stage metadata: timestamp, handling facility, and carrier agent information
- Anomaly flag indicator when unexpected delays or location gaps are detected
- Search and filter by tracking number, date range, or courier company

**Claim Submission**
- Multi-step guided form with a visual progress indicator
- Drag-and-drop file upload for evidence: images, receipts, and supporting documents
- Client-side form validation powered by React Hook Form
- Confirmation screen with an assigned claim reference number upon successful submission

**Claims Ledger**
- Paginated table of all claims with status badges (Submitted, Under Review, Approved, Rejected)
- Filter panel for status, courier, date range, and claim type
- Expandable detail view or modal showing the full claim processing timeline
- CSV export for offline record-keeping

**Courier Analytics**
- Comparative bar and radar charts across multiple courier providers
- KPI metrics: damage rate, on-time delivery rate, average claim resolution time, approval rate
- Sortable courier ranking table with composite reliability scoring
- Date range selector to analyze performance over custom periods

**Alerts and Notifications**
- Notification panel organized by severity: Critical, Warning, and Informational
- Shipment delay and anomaly alerts with direct links to affected records
- Claim status change notifications
- Mark as read and bulk dismiss actions

**API Layer (Backend)**
- RESTful API built with Express.js handling all data operations
- Mongoose schema validation for shipments, claims, couriers, and users
- Centralized error handling and structured JSON error responses
- JWT middleware protecting all private routes

---

## Tech Stack (Detailed)

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Frontend Framework | React | 18.x | Component-based UI rendering |
| Routing | React Router DOM | 6.x | Client-side navigation and protected routes |
| State Management | React Context API + useReducer | Built-in | Global auth, shipment, and claim state |
| Styling | CSS Modules + CSS Custom Properties | — | Scoped, themeable component styles |
| Charts and Visualization | Recharts | 2.x | Dashboard analytics and courier comparison charts |
| Forms | React Hook Form | 7.x | Performant, uncontrolled form state management |
| File Upload | React Dropzone | 14.x | Drag-and-drop evidence upload on claim form |
| HTTP Client | Axios | 1.x | API communication with request and response interceptors |
| Date Formatting | date-fns | 3.x | Claim and shipment timestamp formatting |
| Icons | Lucide React | 0.x | Consistent, accessible, tree-shakeable icon set |
| Toast Notifications | React Hot Toast | 2.x | Non-blocking alerts for user action feedback |
| Backend Runtime | Node.js | 20.x LTS | Server-side JavaScript runtime |
| Backend Framework | Express.js | 4.x | HTTP routing and middleware composition |
| Authentication | JSON Web Tokens (JWT) | — | Stateless user session tokens |
| Password Security | bcryptjs | 2.x | Secure password hashing |
| Database | MongoDB | 7.x | Document-based persistence for claims and shipments |
| ODM | Mongoose | 8.x | Schema modeling, validation, and query abstraction |
| Environment Config | dotenv | 16.x | Secure environment variable management |
| Dev Tooling | Nodemon, ESLint, Prettier, Vite | Latest | Developer experience and production build tooling |

---

## Project Structure

```
shipguard/
│
├── frontend/                               # React application — primary codebase
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── assets/                         # Static assets
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/                     # Reusable UI components
│   │   │   ├── common/                     # Generic shared components
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.jsx
│   │   │   │   │   └── Button.module.css
│   │   │   │   ├── Badge/                  # Status badges (Approved, Rejected, etc.)
│   │   │   │   ├── Modal/
│   │   │   │   ├── Skeleton/               # Loading state placeholder components
│   │   │   │   ├── Table/                  # Reusable sortable and filterable table
│   │   │   │   ├── FileUpload/             # Drag-and-drop file upload component
│   │   │   │   └── Stepper/               # Multi-step form progress indicator
│   │   │   │
│   │   │   ├── layout/                     # Application layout components
│   │   │   │   ├── Sidebar/
│   │   │   │   │   ├── Sidebar.jsx
│   │   │   │   │   └── Sidebar.module.css
│   │   │   │   ├── Navbar/
│   │   │   │   ├── PageHeader/
│   │   │   │   └── PageWrapper/
│   │   │   │
│   │   │   ├── dashboard/                  # Dashboard-specific components
│   │   │   │   ├── StatCard/              # KPI summary cards
│   │   │   │   ├── ClaimTrendChart/       # Line chart — claim volume over time
│   │   │   │   ├── OutcomeDonutChart/     # Donut chart — claim outcome distribution
│   │   │   │   └── RecentActivityFeed/
│   │   │   │
│   │   │   ├── tracking/                   # Shipment tracking components
│   │   │   │   ├── TrackingTimeline/      # Visual stage-by-stage progress stepper
│   │   │   │   ├── StageCard/             # Individual journey stage card
│   │   │   │   └── AnomalyFlag/           # Indicator for handling anomalies
│   │   │   │
│   │   │   ├── claims/                     # Claim-related components
│   │   │   │   ├── ClaimForm/             # Multi-step claim submission form
│   │   │   │   │   ├── StepShipmentSelect.jsx
│   │   │   │   │   ├── StepEvidenceUpload.jsx
│   │   │   │   │   ├── StepIssueDescription.jsx
│   │   │   │   │   └── StepConfirmation.jsx
│   │   │   │   ├── ClaimTable/            # Paginated claims ledger table
│   │   │   │   ├── ClaimDetailModal/      # Claim timeline and detail view
│   │   │   │   └── StatusBadge/           # Claim status indicator badge
│   │   │   │
│   │   │   ├── analytics/                  # Courier analytics components
│   │   │   │   ├── CourierBarChart/       # Comparative performance bar chart
│   │   │   │   ├── CourierRadarChart/     # Multi-axis radar chart
│   │   │   │   ├── CourierRankingTable/   # Sortable KPI ranking table
│   │   │   │   └── DateRangeSelector/
│   │   │   │
│   │   │   └── alerts/                     # Notification and alert components
│   │   │       ├── AlertList/
│   │   │       ├── AlertCard/
│   │   │       └── SeverityIndicator/
│   │   │
│   │   ├── context/                        # React Context providers
│   │   │   ├── AuthContext.jsx            # Authentication state and actions
│   │   │   ├── ShipmentContext.jsx        # Shipment data state
│   │   │   ├── ClaimContext.jsx           # Claims state and submission flow
│   │   │   └── AlertContext.jsx           # Notification and alert state
│   │   │
│   │   ├── hooks/                          # Custom React hooks
│   │   │   ├── useAuth.js                 # Auth state and login/logout actions
│   │   │   ├── useShipments.js            # Shipment fetching and filtering
│   │   │   ├── useClaims.js               # Claim fetching, submission, and filtering
│   │   │   ├── useCourierStats.js         # Courier analytics data access
│   │   │   └── useAlerts.js               # Alert fetching and read state management
│   │   │
│   │   ├── pages/                          # Route-level page components
│   │   │   ├── Landing/
│   │   │   │   ├── Landing.jsx
│   │   │   │   └── Landing.module.css
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Dashboard/
│   │   │   ├── Tracking/
│   │   │   ├── ClaimSubmission/
│   │   │   ├── ClaimsLedger/
│   │   │   ├── CourierAnalytics/
│   │   │   └── Alerts/
│   │   │
│   │   ├── services/                       # API communication layer
│   │   │   ├── api.js                     # Axios instance with JWT interceptor
│   │   │   ├── authService.js
│   │   │   ├── shipmentService.js
│   │   │   ├── claimService.js
│   │   │   ├── courierService.js
│   │   │   └── alertService.js
│   │   │
│   │   ├── styles/                         # Global styles and design tokens
│   │   │   ├── globals.css
│   │   │   ├── variables.css              # CSS custom properties (colors, spacing, typography)
│   │   │   └── reset.css
│   │   │
│   │   ├── utils/                          # Pure utility functions
│   │   │   ├── formatDate.js
│   │   │   ├── formatCurrency.js
│   │   │   ├── claimStatusHelpers.js
│   │   │   └── validators.js
│   │   │
│   │   ├── routes/                         # Route configuration
│   │   │   ├── AppRouter.jsx              # Root router with all route definitions
│   │   │   └── ProtectedRoute.jsx         # Authentication guard HOC
│   │   │
│   │   ├── App.jsx                         # Root application component
│   │   └── main.jsx                        # Application entry point (Vite)
│   │
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── backend/                                # Node.js REST API — supporting layer
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                      # MongoDB connection setup
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── shipmentController.js
│   │   │   ├── claimController.js
│   │   │   ├── courierController.js
│   │   │   └── alertController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js          # JWT verification middleware
│   │   │   └── errorMiddleware.js         # Centralized error handler
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Shipment.js
│   │   │   ├── Claim.js
│   │   │   ├── Courier.js
│   │   │   └── Alert.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── shipmentRoutes.js
│   │   │   ├── claimRoutes.js
│   │   │   ├── courierRoutes.js
│   │   │   └── alertRoutes.js
│   │   │
│   │   └── server.js                      # Express application entry point
│   │
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## Installation & Setup

### Prerequisites

Ensure the following tools are installed before proceeding:

- [Node.js](https://nodejs.org/) v20.x or higher
- [npm](https://www.npmjs.com/) v9.x or higher
- [MongoDB](https://www.mongodb.com/) v7.x — local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier
- [Git](https://git-scm.com/)

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/codinggita/ship_gaurd.git
cd shipguard
```

---

### Step 2 — Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Copy the example environment file
cp .env.example .env
```

Open `backend/.env` and configure the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/shipguard
JWT_SECRET=your_strong_jwt_secret_here
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

Start the backend development server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

---

### Step 3 — Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend

# Install dependencies
npm install

# Copy the example environment file
cp .env.example .env
```

Open `frontend/.env` and configure the following variable:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

### Step 4 — (Optional) Run Both Servers Concurrently

From the project root directory:

```bash
# Install root-level dependencies (includes concurrently)
npm install

# Start both frontend and backend simultaneously
npm run dev
```

This requires a root-level `package.json` with `concurrently` configured as a dependency. Refer to the existing root `package.json` for the script definition.

---

## Usage Instructions

### Getting Started

1. Open `http://localhost:5173` in your browser
2. The ShipGuard landing page explains the platform and its purpose
3. Click **Get Started** or navigate to `/register` to create an account
4. After successful registration, you will be redirected to your personal dashboard

### Tracking a Shipment

1. Navigate to **Shipment Tracking** from the sidebar
2. Enter a tracking number in the search field or select a shipment from your active list
3. The tracking page will display the complete journey timeline with per-stage details
4. Anomalies (unexpected delays or handling gaps) are highlighted with a warning indicator

### Filing a Claim

1. Navigate to **File a Claim** from the sidebar or click **New Claim** on the dashboard
2. Step 1 — Select the affected shipment from your shipment list
3. Step 2 — Upload supporting evidence using the drag-and-drop uploader (photos, receipts, documents)
4. Step 3 — Select the claim type (loss, damage, or delay) and provide a written description
5. Step 4 — Review the summary and submit
6. A confirmation screen will display your assigned claim reference number

### Monitoring Claims

1. Navigate to **Claims Ledger** from the sidebar
2. Use the filter panel to narrow results by status, courier, or date range
3. Click any row to open the full claim detail view with its processing timeline
4. Use the **Export CSV** button to download your claims record for offline use

### Analyzing Courier Performance

1. Navigate to **Courier Analytics** from the sidebar
2. Set a date range using the date range selector at the top of the page
3. Review the comparative bar and radar charts for key performance indicators across couriers
4. The ranking table below sorts all couriers by composite reliability score

### Managing Alerts

1. Navigate to **Alerts** from the sidebar or click the notification bell in the top navbar
2. Alerts are grouped by severity: Critical, Warning, and Informational
3. Click any alert to navigate directly to the related shipment or claim record
4. Use **Mark as Read** or **Dismiss All** to manage notification state

---

## API Endpoints Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user account | No |
| POST | `/api/auth/login` | Authenticate and receive JWT | No |
| GET | `/api/shipments` | Fetch all shipments for the current user | Yes |
| GET | `/api/shipments/:id` | Fetch a single shipment with tracking stages | Yes |
| GET | `/api/claims` | Fetch all claims for the current user | Yes |
| POST | `/api/claims` | Submit a new claim with evidence metadata | Yes |
| GET | `/api/claims/:id` | Fetch a single claim with full timeline | Yes |
| PATCH | `/api/claims/:id/status` | Update claim status — admin use | Yes |
| GET | `/api/couriers` | Fetch all couriers with performance statistics | Yes |
| GET | `/api/couriers/:id/stats` | Fetch detailed KPIs for a specific courier | Yes |
| GET | `/api/alerts` | Fetch all alerts for the current user | Yes |
| PATCH | `/api/alerts/:id/read` | Mark a single alert as read | Yes |

All protected routes require an `Authorization: Bearer <token>` header containing a valid JWT.

---

## Roadmap

The following features and improvements are planned for upcoming releases. Contributions targeting any of these areas are particularly welcome.

**Version 1.1**
- Real-time shipment status updates using WebSockets (Socket.io), eliminating the need for manual page refresh on the tracking and alerts pages
- Email and SMS notification integration for claim status changes and shipment anomaly alerts

**Version 1.2**
- Multi-user account support with role-based access: Seller, Shipper, and Admin roles with differentiated dashboard views and permissions
- Internal admin panel for claim review and status management with a full audit trail

**Version 1.3**
- Public courier performance leaderboard with aggregated, anonymized data accessible without authentication
- Bulk claim submission via CSV upload for sellers managing high shipment volumes

**Version 2.0**
- Mobile application using React Native, sharing the same Node.js backend API
- Machine learning-based risk scoring to flag shipments likely to result in claims, based on courier history, route, and package profile
- Direct integration with major courier APIs (FedEx, UPS, DHL, India Post) for automated tracking data ingestion
- Structured dispute resolution workflow with mediation states between shipper and courier

---

## Contributing

Contributions of all kinds are welcome — bug fixes, new features, documentation improvements, and accessibility enhancements.

To contribute:

1. Fork the repository on GitHub
2. Create a feature branch from `main`:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes using clear, focused commits following this format:

```
type(scope): short description

Examples:
feat(claims): add multi-step claim submission form
fix(tracking): correct anomaly flag display logic
docs(readme): update installation instructions
```

4. Ensure your code passes ESLint rules and is formatted with Prettier
5. Open a Pull Request against `main` with a clear title and summary of changes

Please read `CONTRIBUTING.md` for detailed guidelines on branch naming, commit conventions, and the code review process.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for complete terms.

---

## About the Author

**Aryan Sabasana**
Full Stack Developer | UI/UX Enthusiast | Open Source Contributor

ShipGuard was built to address a real, underserved problem in the logistics space. Having observed how e-commerce sellers lose both revenue and customer trust due to opaque claim processes and unaccountable courier companies, I wanted to design a system that puts transparency and usability at the center. This project reflects a deep interest in data-driven interfaces, accessible React component design, and practical solutions to operational problems.

---

## Contact

| Platform | Link |
|---|---|
| GitHub | [github.com/Aryansabasana](https://github.com/Aryansabasana) |
| LinkedIn | [linkedin.com/in/aryan-sabasana](https://www.linkedin.com/in/aryan-sabasana-859471394/?skipRedirect=true) |
| Email | aryan.sabasana.cg@gmail.com |
| Portfolio | [Aryan Sabasana](https://aryan-sabasana-portfolio.vercel.app/) |

---

<p align="center">
  ShipGuard is open-source and built for the logistics and e-commerce community.
  <br />
  If this project is useful to you, consider starring the repository on GitHub.
</p>