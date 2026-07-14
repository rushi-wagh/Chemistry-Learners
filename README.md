# Chemistry Learners Platform 🧪📚

Welcome to the **Chemistry Learners Platform**, a comprehensive, full-stack educational web application designed to facilitate learning chemistry. The platform provides students with interactive dashboards, batch/course search capabilities, lecture video players, downloadable PDF resources, and payment processing. For administrators, it offers a robust management dashboard to manage courses, design study chapters, organize video lessons, upload materials, and monitor transactions.

---

## 🚀 Key Features

### 🎓 Student Workspace
- **Interactive Dashboard:** View overall learning progress, enrolled courses, and quick links to study resources.
- **Course & Batch Search:** Advanced search and filter options to find specific chemistry courses or batches.
- **Premium Lecture Player:** High-performance video player to watch chapters and lessons sequentially.
- **Resource Center:** View and download lesson-specific materials (PDFs, study notes) directly in-browser.
- **Free Study Materials:** Dedicated section for access to public learning materials.
- **Progress Tracking:** Interactive progress bars that automatically update as students complete lectures.
- **Secure Payments:** Integrated with Razorpay for course enrollment and transaction tracking.
- **Auth & Profiles:** Email verification, password reset, and personal profile management.

### 🛡️ Admin Panel
- **Admin Dashboard:** Overview of course statistics, enrollments, and revenue.
- **Course Manager:** Create, update, and publish course batches with rich descriptions and thumbnails.
- **Content Structure Editor:** Drag-and-drop or edit chapter workflows to organize sections, lessons, and course paths.
- **Material Management:** Upload and manage lecture resources (PDFs and documents) using Cloudinary integration.
- **Free Resource Portal:** Share open-access notes and chemistry documents with the public.

---

## 🛠️ Tech Stack

### Frontend (Client-side)
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS v4 (modern, utilities-first, blazing fast)
- **Animations:** GSAP & `@gsap/react` (for ultra-smooth, premium user interactions and transitions)
- **Routing:** React Router v7 (declarative routing & layouts)
- **State & API client:** Axios (with credential cookies support)
- **PDF Viewer:** React PDF (for in-app PDF rendering)
- **UI Details:** Lucide React, React Icons, React Hot Toast, React Loader Spinner

### Backend (Server-side)
- **Runtime:** Node.js
- **Framework:** Express.js (v5)
- **Database:** MongoDB with Mongoose ODM
- **Media Uploads:** Cloudinary (secure cloud storage for course thumbnails and PDFs)
- **Email Service:** Resend (transactional email, verification links, and password resets)
- **Payments:** Razorpay Node SDK
- **Security & Utilities:** JWT (JSON Web Tokens via cookies), BcryptJS (password hashing), Multer (multipart form handling), UUID, DayJS

---

## 📂 Project Structure

The project is divided into two main folders: **Frontend** and **Backend**.

```text
Chemistry-Learners-Platform/
├── Backend/                    # Node.js Express server
│   ├── src/
│   │   ├── controllers/        # Express handlers (auth, course, payment, progress, etc.)
│   │   ├── db/                 # Mongoose connection setup
│   │   ├── middleware/         # Auth, roles, error handlers
│   │   ├── models/             # Mongoose Schemas (User, Course, Lesson, Material, etc.)
│   │   ├── routes/             # API routes
│   │   └── utils/              # Resend, Cloudinary, Razorpay integrations
│   ├── index.js                # Server entry point
│   ├── .env.example            # Configuration boilerplate
│   └── package.json
│
├── Frontend/                   # React Vite application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images, styles, global resources
│   │   ├── components/         # Reusable UI elements, route guards, and layouts
│   │   ├── Context/            # React Auth context & context providers
│   │   ├── pages/              # Page views (Auth, Home, Student, Admin dashboards)
│   │   ├── utils/              # Helper helper functions and API request layers
│   │   ├── App.jsx             # Route definitions and page layout mappings
│   │   ├── main.jsx            # Entry mount point
│   │   └── index.css           # Global custom styles & Tailwind directives
│   ├── package.json
│   └── vite.config.js
└── README.md                   # Project documentation (this file)
```

---

## ⚙️ Setup & Configuration

### Prerequisites
Before setting up the project locally, ensure you have:
1. **Node.js** (v18+ recommended)
2. **MongoDB** (Local instance or MongoDB Atlas URI)
3. **Cloudinary** Account (for storing files and images)
4. **Resend** Account (for transactional email services)
5. **Razorpay** Account (for test payments API)

---

### 1. Backend Setup

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend/` root (copied from `.env.example` if available, or write custom):
   ```env
   PORT=8000
   BASE_URL=http://localhost:8000
   FRONTEND_URL=http://localhost:5173
   
   # Database
   MONGO_URI=your_mongodb_connection_string
   
   # JWT Configuration
   ACCESS_TOKEN_SECRET=your_jwt_access_secret
   REFRESH_TOKEN_SECRET=your_jwt_refresh_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_EXPIRY=10d
   
   # File Storage (Cloudinary)
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Email Service (Resend)
   RESEND_API_KEY=your_resend_api_key
   
   # Payment Gateway (Razorpay)
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. Start the development server (runs nodemon):
   ```bash
   npm run dev
   ```
   The backend will be running at `http://localhost:8000`.

---

### 2. Frontend Setup

1. Navigate to the `Frontend` directory:
   ```bash
   cd ../Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm run dev
   ```
   The frontend will be running at `http://localhost:5173`. Open this URL in your web browser.

---

## 📡 API Endpoints Summary

All backend API routes are versioned and prefixes with `/api/v1`.

| Module | Route Prefix | Purpose |
| :--- | :--- | :--- |
| **Auth** | `/api/v1/auth` | User register, login, logout, verification, password recovery |
| **Users** | `/api/v1/users` | User profile retrieval, edit information, avatar changes |
| **Courses** | `/api/v1/courses` | Create, list, edit, publish courses & batches |
| **Chapters** | `/api/v1/chapters` | Add, update, delete chapters inside courses |
| **Lessons** | `/api/v1/lessons` | Manage specific lecture videos and page views |
| **Materials** | `/api/v1/materials` | Upload, edit, and delete notes/materials (PDFs) associated with lessons |
| **Free Materials** | `/api/v1/free-materials` | Manage downloadable chemistry materials accessible without enrollment |
| **Progress** | `/api/v1/course-progress` | Get/update student completion status for specific lessons |
| **Enrollments**| `/api/v1/enrollments` | Enrolled courses records, checking enrollment status |
| **Payments** | `/api/v1/payments` | Initiate Razorpay order, verify signature, log transactions |
| **Health** | `/api/v1/health` | Health Check endpoints to test server response |

---

## 📄 License
This project is licensed under the ISC License.
