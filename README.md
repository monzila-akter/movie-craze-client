## 🎬 Movie Craze – Your Ultimate Movie Portal

![CoinCrafter Screenshot](https://github.com/monzila-akter/movie-craze-client/blob/main/src/assets/movie-craze-2.PNG)
![CoinCrafter Screenshot](https://github.com/monzila-akter/movie-craze-client/blob/main/src/assets/movie-craze-1.PNG)

## 🚀 Project Overview

- Movie Craze is a user-friendly movie portal designed to help users explore, add, delete, and manage their favorite movies. With dynamic movie details, authentication, and user favorites, the platform provides a seamless movie discovery experience.

## 🛠️ Tech Stack

- Frontend: React.js, Tailwind CSS, React Router
- Backend: Node.js, Express.js, MongoDB
- Authentication: Firebase Authentication, JWT (JSON Web Token)
- UI Enhancements: React Simple Star Rating, Swiper.js
- Hosting: Netlify (Client), Vercel (Server), Firebase

## 🌟 Core Features

✅ User Authentication: Email/password login and Google sign-in
✅ Movie Management: Add, update, delete, and explore movies dynamically
✅ Favorites List: Save and manage favorite movies
✅ Movie Details Page: View complete details with rating, summary, and genre
✅ Private Routes: Secure pages for adding movies and favorites
✅ Search & Filtering: Search movies based on title
✅ Dark/Light Mode Toggle: Customizable theme for better UX
✅ Toast Notifications: Meaningful alerts for all CRUD operations
✅ Responsive UI: Optimized for mobile, tablet, and desktop

## 📦 Dependencies
### Below are the key dependencies used in the project:

1. Client-Side (Frontend)
- React.js
- React Router DOM
- Firebase Authentication
- Tailwind CSS
- React Hook Form
- React Simple Star Rating
- Swiper.js (for sliders)
- SweetAlert / React Toastify (for notifications)
2. Server-Side (Backend)
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)

## 🏗️ Installation & Setup
### Follow these steps to set up the project locally:

### 1️⃣ Clone the Repositories
- bash
- Copy
- Edit
- git clone <CLIENT_REPO_URL>
- git clone <SERVER_REPO_URL>

### 2️⃣ Install Dependencies
### Navigate into both the client and server directories and install dependencies:

- bash
- Copy
- Edit

# For client-side
- cd client
- npm install

# For server-side
- cd server
- npm install

### 3️⃣ Set Up Environment Variables
### Create a .env file in the server directory and add the following:

- env
- Copy
- Edit
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret_key
### For the client, set up Firebase credentials in an .env file:

- env
- Copy
- Edit
- REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
### 4️⃣ Run the Server & Client

- bash
- Copy
- Edit

# Start the backend server
- cd server
- npm run dev  

# Start the frontend client
- cd client
- npm start  

## 🔗 Live Links & Resources
1. Live Site: https://moviecraze-client-auth.web.app/
2. Client GitHub Repo: https://github.com/monzila-akter/movie-craze-client
3. Server GitHub Repo: https://github.com/monzila-akter/movie-craze-server

 
## 6.Required document link:

- https://docs.google.com/document/d/1dw9lqDFGzo40mEAx1A9Kp_hgVa9Ust2Tyg2hVTfBgps/edit?tab=t.0

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
