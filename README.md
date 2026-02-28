# 🎬 MovieFlix GPT – AI Powered Movie Discovery App

An AI-powered Netflix-inspired movie streaming web app built using **React (Vite)**, **Tailwind CSS**, **Firebase Authentication**, **Redux Toolkit**, **TMDB API**, and **OpenAI API**.

MovieFlix GPT allows users to browse trending movies, watch trailers, and get AI-powered movie recommendations using natural language prompts.

---

# 🚀 Live Demo

🔗 Live Site: soon  
🔗 GitHub Repo: ...

---


# 🧠 About The Project

MovieFlix GPT is a full-featured movie streaming UI with AI integration.  
It combines:

- 🎬 Movie data from TMDB API  
- 🤖 AI recommendations from OpenAI  
- 🔐 Firebase authentication  
- ⚡ Vite for fast performance  
- 🎨 Tailwind CSS for styling  
- 🗂 Redux Toolkit for state management  

---

# ✨ Features

## 🔐 Authentication
- Sign Up / Sign In
- Firebase Email/Password Authentication
- Form validation using useRef
- Update profile (displayName & photoURL)
- Sign Out
- Protected Routes:
  - Redirect /browse → Login if not authenticated
  - Redirect /login → Browse if authenticated
- Proper cleanup of onAuthStateChanged

---

## 🎬 Browse Page (After Login)

### Main Container
- Hero movie trailer in background
- Autoplay & Muted YouTube trailer
- Movie title and description
- Beautiful Tailwind styling

### Secondary Container
- Now Playing Movies
- Popular Movies
- Reusable MovieList component
- MovieCard component
- TMDB Image CDN usage

---

## 🤖 MovieFlix GPT (AI Search Feature)

- GPT Search Page
- GPT Search Bar
- OpenAI API integration
- Fetch GPT movie suggestions
- Match results with TMDB
- Display suggestions in reusable MovieList
- Memoization for optimization
- Multi-language support

---

# 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- Redux Toolkit
- Firebase
- TMDB API
- OpenAI API
- React Router DOM

---

# 📂 Folder Structure

---

# 🔑 Environment Variables Setup

Before running the project, create a `.env` file in the root directory and add:

VITE_TMDB_KEY=your_tmdb_api_key  
VITE_OPENAI_KEY=your_openai_api_key  

⚠️ Add `.env` to `.gitignore` to protect your keys.

---

# ⚙️ Installation & Setup

1. Clone the repository:

git clone https://github.com/yourusername/movieflix-gpt.git

2. Navigate into the project:

cd movieflix-gpt

3. Install dependencies:

npm install

4. Start development server:

npm run dev

---

# 🔥 Firebase Setup

1. Go to Firebase Console  
2. Create a new project  
3. Enable Authentication → Email/Password  
4. Copy Firebase config  
5. Add config to firebase.js  
6. Handle authentication using onAuthStateChanged  

---

# 🎬 TMDB API Setup

1. Register at TMDB website  
2. Create an application  
3. Generate API access token  
4. Use:
   - Now Playing Movies API  
   - Popular Movies API  
   - Movie Videos API  
5. Use TMDB Image CDN for posters  

---

# 🤖 OpenAI Setup

1. Generate OpenAI API key  
2. Make GPT API call  
3. Get movie suggestions  
4. Fetch matched movies from TMDB  
5. Store data in Redux (gptSlice)  

---

# 🗂 Redux Store Architecture

- userSlice → User authentication state  
- movieSlice → Movies data (now playing, popular, trailer)  
- gptSlice → GPT movie suggestions  

---

# 🌍 Multi-Language Support

- Language constants file  
- Dynamic text switching  
- Scalable for more languages  

---

# 📱 Responsive Design

- Fully responsive  
- Mobile-first layout  
- Optimized Tailwind UI  
- Smooth UX across devices  

---

# 👨‍💻 Author

Kashaf khan 

---

If you like this project, give it a ⭐ on GitHub!