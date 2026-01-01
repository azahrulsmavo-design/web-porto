# Personal Portfolio — Muhammad Azahrul Ramadhan

This repository contains the source code for my personal portfolio website. It is a modern, responsive, and interactive single-page application built to showcase my background, skills, projects, and experience as an **Aspiring Data Analyst**.

The website is designed with a premium dark theme, featuring smooth animations and a clean user interface.

## 🔗 Live Website
**[Visit Portfolio](https://azahrul-portofolio.vercel.app/)**

---

## 🛠️ Technical Stack

This project is engineered using a robust modern web stack, focusing on performance, scalability, and developer experience.

### Core Frameworks & Languages
- **[React 19](https://react.dev/)**: The latest version of the library for building user interfaces, utilizing Server Components concepts and enhanced hooks.
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Core logic and interactivity.
- **[Vite 7](https://vitejs.dev/)**: Ultra-fast build tool and development server with Hot Module Replacement (HMR).

### Styling & Design System
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid, maintainable UI development.
- **[PostCSS](https://postcss.org/)**: Tool for transforming CSS with JavaScript plugins.
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for complex UI transitions and gestures.
- **[Lucide React](https://lucide.dev/)**: Consistent, lightweight SVG iconography.

### Backend & Data Services
- **[Supabase](https://supabase.com/)**: Open Source Firebase alternative used for:
  - **Database**: Postgres database for storing "Daily Posts" and content.
  - **Authentication**: Secure admin login for content management.
  - **Storage**: Media assets hosting.

### Routing & State Management
- **[React Router v7](https://reactrouter.com/)**: Dynamic client-side routing.
- **Context API**: Global state management for Theme (Dark/Light) and Language (EN/ID).

---

## 📌 Key Features

### 1. Dynamic Content Management
- **Daily Posts**: A built-in CMS allowing the admin to create, edit, and publish daily articles.
- **Admin Dashboard**: Protected route (`/admin`) for managing content and portfolio settings.
- **Multi-language Support**: Full English and Indonesian localization via `LanguageContext`.

### 2. Advanced UI/UX
- **Glassmorphism**: Modern frosted glass effects on cards and navigation.
- **Scroll Animations**: Elements fade and slide in as the user scrolls.
- **Responsive Layouts**: Adaptive grids that transition seamlessly from Mobile to Desktop.

### 3. Performance Optimization
- **Code Splitting**: Dynamic imports to reduce initial bundle size.
- **Lazy Loading**: Assets and components loaded only when needed.

---

## 🗂️ Project Structure

The project uses a modular architecture to separate concerns and improve maintainability.

```
/
├── public/                # Static assets (images, icons)
├── src/
│   ├── assets/            # Imported assets
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Global navigation
│   │   ├── Footer.jsx     # Site footer
│   │   └── ProtectedRoute.jsx # Auth guard wrapper
│   ├── context/           # Global state contexts
│   │   ├── AuthContext.jsx
│   │   └── LanguageContext.jsx
│   ├── data/              # Static data and locale files
│   │   └── locales.js     # Translation strings
│   ├── lib/               # Utility libraries (Supabase client)
│   ├── pages/             # Route components
│   │   ├── admin/         # Protected admin pages
│   │   ├── Home.jsx       # Landing page
│   │   ├── DailyPost.jsx  # Dynamic blog page
│   │   ├── Cases.jsx      # Projects list
│   │   └── Personal.jsx   # Personal details
│   ├── App.jsx            # Main app router
│   └── main.jsx           # App entry point
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/azahrulsmavo-design/web-porto.git
cd web-porto
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 👤 About the Author

**Muhammad Azahrul Ramadhan**  
Aspiring Data Analyst · Education & E-commerce Enthusiast  
📍 Jakarta, Indonesia

- **GitHub**: [azahrulsmavo-design](https://github.com/azahrulsmavo-design)
- **LinkedIn**: [Muhammad Azahrul Ramadhan](https://linkedin.com/in/muhammad-azahrul-ramadhan-9728bb252/)
- **Email**: [azahrulsmavo@gmail.com](mailto:azahrulsmavo@gmail.com)

---

## ⭐ Support

If you find this project useful or interesting, please consider giving it a **star (⭐)**!