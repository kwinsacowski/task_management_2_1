🧺 Cozy Cottage Task Dashboard

A user-authenticated task management application built with React, TypeScript, Context API, and Auth0.
Each user has their own persistent task list stored locally and isolated by their Auth0 identity.

This project demonstrates modern React architecture, protected routes, global state management, and per-user data persistence.

---

✨ Features

🔐 Auth0 Authentication (login/logout, protected routes)
🗂️ Task CRUD (Create, Read, Update, Delete)
🌍 Global state management using React Context API
💾 Persistent storage using localStorage
👤 Per-user task isolation using Auth0 user ID
🧭 React Router navigation with dynamic routes
🧵 Strong typing throughout using TypeScript
🎨 Styled dashboard UI

---

🛠️ Tech Stack

React
TypeScript
React Router DOM
Auth0 React SDK
Context API
Vite
Local Storage API

---

📁 Project Structure

src/
│
├── components/
│   ├── Dashboard.tsx
│   ├── TaskDetails.tsx
│
├── context/
│   └── TaskContext.tsx
│
├── types/
│   └── types.ts
│
├── auth/
│   └── AuthProvider.tsx
│
├── App.tsx
└── main.tsx


---

🔐 Authentication Flow

This app uses Auth0 for authentication.
 - Unauthenticated users are redirected to login
 - Authenticated users can access the dashboard
 - Tasks are saved using a key based on the user’s Auth0 sub id

---

Setup 
1️⃣ Clone the repository
  git clone <your-repo-url>
  cd cozy-cottage-task-dashboard

2️⃣ Install dependencies
  npm install

3️⃣ Set up Auth0
  VITE_AUTH0_DOMAIN=your_domain_here
  VITE_AUTH0_CLIENT_ID=your_client_id_here


In the Auth0 dashboard, make sure the following URLs are all set to http://localhost:5173
 - Allowed Callback URLs
 - Allowed Logout URLS
 - Allowed Web Origins

4️⃣ Start the dev server
  npm run dev

Visit: http://localhost:5173


---

📚 What This Project Demonstrates
 - Real-world React architecture
 - Proper TypeScript usage
 - Authentication & route protection
 - Global state patterns
 - Data persistence strategies
 - Clean component separation

 ---

 👩‍💻 Author

Kayla Salmon
Software Engineer | Full Stack Developer