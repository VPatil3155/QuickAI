# AI SaaS Platform

A full-stack AI-powered SaaS application built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). The platform provides multiple AI tools such as article generation, blog title generation, image generation, background removal, object removal, and resume analysis with subscription-based access control.

## 🚀 Features

### Authentication & User Management

* Secure authentication using Clerk
* Email and Google Sign-In
* User profile management
* Subscription management
* Protected routes

### AI Tools

#### 📝 Article Generator

* Generate AI-powered articles
* Multiple article length options
* Markdown formatted output

#### ✍️ Blog Title Generator

* Generate engaging blog titles
* Category-based suggestions
* SEO-friendly title generation

#### 🎨 Image Generator

* Generate images using AI prompts
* Multiple image styles
* Public/private image publishing
* Premium feature

#### 🖼️ Background Remover

* Remove image backgrounds automatically
* Cloudinary-powered processing
* Premium feature

#### 🧹 Object Remover

* Remove unwanted objects from images
* AI-assisted image editing
* Premium feature

#### 📄 Resume Analyzer

* Upload PDF resumes
* AI-powered resume evaluation
* Strengths and weaknesses analysis
* Career improvement suggestions
* Premium feature

### Community Features

* Public image gallery
* Like and unlike creations
* Community showcase

### Dashboard

* User creation history
* Subscription details
* Creation statistics
* Recent activity tracking

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Tailwind CSS
* Axios
* React Hot Toast
* React Markdown
* Lucide React

### Backend

* Node.js
* Express.js
* PostgreSQL
* Neon Database
* Clerk Authentication
* Multer
* PDF-Parse

### AI & Cloud Services

* Google Gemini API
* ClipDrop API
* Cloudinary

### Deployment

* Vercel
* GitHub

---

## 📁 Project Structure

```bash
project-root/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/ai-saas-platform.git
cd ai-saas-platform
```

---

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

### Frontend (.env)

```env
VITE_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Backend (.env)

```env
PORT=3000

DATABASE_URL=your_neon_database_url

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

GEMINI_API_KEY=your_gemini_api_key

CLIPDROP_API_KEY=your_clipdrop_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd server
npm run server
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:3000
```

---

## 🗄️ Database Schema

### Creations Table

```sql
CREATE TABLE creations (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    prompt TEXT,
    content TEXT,
    type VARCHAR(50),
    publish BOOLEAN DEFAULT FALSE,
    likes TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔒 Subscription Model

### Free Plan

* Article Generator
* Blog Title Generator
* Maximum 10 creations

### Premium Plan

* Unlimited usage
* AI Image Generator
* Background Removal
* Object Removal
* Resume Analysis
* Community Publishing

---

## 🌐 API Endpoints

### AI Routes

```http
POST /api/ai/generate-article
POST /api/ai/generate-blog-title
POST /api/ai/generate-image
POST /api/ai/remove-image-background
POST /api/ai/remove-image-object
POST /api/ai/review-resume
```

### User Routes

```http
GET /api/user/creations
GET /api/user/public-creations
POST /api/user/toggle-like
```

---

## ☁️ Deployment

### Frontend Deployment

* Deploy React application to Vercel

### Backend Deployment

* Deploy Express API separately on Vercel

### Database

* Neon PostgreSQL Serverless Database

### Authentication & Billing

* Clerk

---

## 📸 Application Modules

* Home Page
* Authentication
* Dashboard
* Article Generator
* Blog Title Generator
* Image Generator
* Background Removal
* Object Removal
* Resume Analyzer
* Community Gallery
* Subscription Management

---

## 🎯 Future Improvements

* AI Chat Assistant
* Content Summarizer
* AI Code Generator
* AI Video Generation
* Team Workspaces
* Admin Dashboard
* Analytics Panel

---

## 👨‍💻 Author

Developed as a Full Stack AI SaaS Platform using modern web technologies and AI services.

If you found this project useful, consider giving it a ⭐ on GitHub.
