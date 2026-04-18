
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-BuildTool-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange)
![Redux](https://img.shields.io/badge/Redux-StateManagement-764ABC)
![TMDB](https://img.shields.io/badge/TMDB-Movie%20API-01B4E4)
![License](https://img.shields.io/badge/License-MIT-green)

# 🎬 MovieFlix

**MovieFlix** is a modern movie discovery platform inspired by Netflix.  
It allows users to browse trending movies, watch trailers, and explore content with a smooth and responsive UI.

Built using **React (Vite), Tailwind CSS, Firebase Authentication, Redux Toolkit, and TMDB API**.

---

## 🎥 Demo Video

[![Watch Demo](./src/assets/thumbnail.png)](./src/assets/homepage.mp4)

> Click the image above to watch the application demo

---

## 📸 Screenshots

### 🔐 Login Page
![Login](./src/assets/login.png)

### 🎥 Home Page
![Home](./src/assets/thumbnail.png)

---

## ✨ Features

- 🔍 Browse trending and popular movies  
- 🎬 Watch trailers inside the app  
- 🔐 Secure authentication with Firebase  
- ⚡ Fast and responsive UI  
- 🎨 Clean Netflix-style design  

---

## 🛠 Tech Stack

- ⚛️ React (Vite)  
- 🎨 Tailwind CSS  
- 🔥 Firebase Authentication  
- 📦 Redux Toolkit  
- 🌐 TMDB API  
- 🔀 React Router DOM  

---

## 📂 Project Structure

# 🏗 System Architecture

The application follows a **modular frontend architecture** with centralized state management and external API integrations.

```
        ┌──────────────┐
        │     User     │
        └──────┬───────┘
               │
               ▼
      ┌───────────────────┐
      │   React Frontend  │
      │  (Vite + Tailwind)│
      └─────────┬─────────┘
                │
                ▼
      ┌───────────────────┐
      │   Authentication  │
      │   Firebase Auth   │
      └─────────┬─────────┘
                │
                ▼
      ┌───────────────────┐
      │   Redux Store     │
      │ ┌───────────────┐ │
      │ │  userSlice    │ │
      │ │  movieSlice   │ │
      │ │               │
      │ └───────────────┘ │
      └─────────┬─────────┘
                │
                |
                ▼        
         ┌───────────────┐  
         │   TMDB API    │  
         │ Movie Data    │  
         └───────────────┘  
                │
               ▼
      ┌───────────────────┐
      │  MovieFlix UI     │
      │  Dynamic Movies   │
      │                   │
      └───────────────────┘
```

### Architecture Highlights

- **React + Vite** powers a fast and modern frontend experience.
- **Tailwind CSS** provides utility-first styling for responsive UI.
- **Firebase Authentication** handles secure user login and signup.
- **Redux Toolkit** manages global application state.
- **TMDB API** provides real-time movie data and trailers.
- **OpenAI API** generates intelligent movie recommendations.
- The architecture ensures **separation of concerns and scalable component structure**.

---

# 📸 Application Preview

[Preview](https://movieflix-gpt-9931.web.app/)

## 🔐 Authentication Interface
- Secure user authentication
- Sign In / Sign Up workflow
- Form validation
- Responsive UI


---

## 🎥 Browse Page (Main Experience)

- Hero trailer autoplay in background
- Movie title & description
- Multiple categorized movie lists
- Clean Netflix-style UI


---



# ✨ Key Features

## 🔐 Authentication System

- Firebase Email/Password authentication
- Secure Sign Up / Sign In workflow
- Profile update support (name & avatar)
- Sign Out functionality
- Protected routes
- Automatic redirect based on authentication state
- Auth state listener cleanup using `onAuthStateChanged`

---

## 🎬 Movie Browsing Experience

### Main Container

- Featured movie trailer background
- YouTube trailer autoplay with mute
- Dynamic movie title and overview
- Cinematic hero UI design

### Secondary Container

- Now Playing Movies
- Popular Movies
- Reusable Movie List component
- Optimized Movie Card UI
- TMDB Image CDN integration for faster image loading

---


# 🛠 Tech Stack

| Category | Technology |
|--------|-------------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Authentication | Firebase |
| Movie Data | TMDB API |
| Routing | React Router DOM |
| Deployment | Firebase Hosting |

---


# ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
VITE_TMDB_KEY=your_tmdb_api_key
VITE_OPENAI_KEY=your_openai_api_key
```

⚠️ Ensure `.env` is included in `.gitignore`.

---

# 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone  https://github.com/kashaf009/MovieFlix-gpt


```

### 2️⃣ Navigate to the Project Directory

```
cd movieflix-gpt
```

### 3️⃣ Install Dependencies

```
npm install
```

### 4️⃣ Start Development Server

```
npm run dev
```

---

# 🔥 Firebase Configuration

1. Create a project in **Firebase Console**
2. Enable **Authentication**
3. Enable **Email / Password Provider**
4. Copy Firebase configuration
5. Add it to `firebase.js`

Authentication state is managed using:

```
onAuthStateChanged()
```

---

# 🎬 TMDB Integration

Steps to configure TMDB:

1. Create an account on **The Movie Database**
2. Generate an **API access token**
3. Use endpoints such as:

- Now Playing Movies
- Popular Movies
- Movie Videos (for trailers)

Images are optimized using **TMDB CDN URLs**.

---


# 🧠 State Management

Redux Toolkit manages application state.

### Store Slices

**userSlice**
- Authentication state
- User profile

**movieSlice**
- Now Playing Movies
- Popular Movies
- Trailer videos

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

Tailwind CSS utility classes ensure consistent layout and performance.

---

# 🚀 Deployment (Firebase Hosting)

The application is deployed using **Firebase Hosting**.

### 1️⃣ Install Firebase CLI

```
npm install -g firebase-tools
```

---

### 2️⃣ Login to Firebase

```
firebase login
```

---

### 3️⃣ Initialize Firebase in the Project

```
firebase init
```

Select:

```
Hosting
```

Set the build folder to:

```
dist
```

Choose:

```
Single Page App → Yes
```

---

### 4️⃣ Build the Project

```
npm run build
```

This generates the **production-ready `dist` folder**.

---

### 5️⃣ Deploy to Firebase

```
firebase deploy
```

---


# 👨‍💻 Author

**Kashaf Khan**

GitHub  
 https://github.com/kashaf009/MovieFlix-gpt



---

# 📄 License

This project is built for educational and portfolio purposes.

All movie data belongs to **TMDB**.  
Netflix branding and trademarks belong to their respective owners.

---

⭐ If you found this project useful, consider giving it a **star on GitHub**.