![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-BuildTool-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange)
![Redux](https://img.shields.io/badge/Redux-StateManagement-764ABC)
![OpenAI](https://img.shields.io/badge/OpenAI-AI%20Integration-black)
![TMDB](https://img.shields.io/badge/TMDB-Movie%20API-01B4E4)
![License](https://img.shields.io/badge/License-MIT-green)

# 🎬 MovieFlix GPT

**MovieFlix GPT** is a modern AI-powered movie discovery platform inspired by Netflix.  
It allows users to browse trending movies, watch trailers, and receive **AI-generated movie recommendations** using natural language prompts.

The application integrates **TMDB for movie data** and **OpenAI for intelligent recommendations**, providing a seamless and interactive movie exploration experience.

Built using **React (Vite), Tailwind CSS, Firebase Authentication, Redux Toolkit, TMDB API, and OpenAI API**.

---

# 🌐 Live Demo

🚀 **Live Application:**  
      (updating soon)  

📂 **GitHub Repository:**  
 https://github.com/kashaf009/MovieFlix-gpt



---

# 💡 Why I Built MovieFlix GPT

I built MovieFlix GPT to explore the integration of AI-powered recommendations into modern web applications.

The goal of this project was to combine:

- Real-world API integration
- AI-powered user experiences
- Scalable React architecture
- Modern frontend tooling

It demonstrates skills in building **production-ready full-stack frontend applications** using modern industry tools.

---
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
      │ │  gptSlice     │ │
      │ └───────────────┘ │
      └─────────┬─────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
 ┌───────────────┐  ┌───────────────┐
 │   TMDB API    │  │   OpenAI API  │
 │ Movie Data    │  │ AI Suggestions│
 └───────────────┘  └───────────────┘
                │
                ▼
      ┌───────────────────┐
      │  MovieFlix GPT UI │
      │  Dynamic Movies   │
      │  & AI Suggestions │
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

(updating soon)

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

## 🤖 AI Movie Search (MovieFlix GPT)

- AI-powered movie recommendation engine
- GPT search interface
- Dynamic movie suggestion grid
- TMDB data integration



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

## 🤖 AI Movie Recommendation Engine

The **MovieFlix GPT** feature allows users to search movies using natural language.

Example queries:

- *"Suggest some sci-fi movies like Interstellar"*
- *"Best comedy movies from the 2000s"*

### Workflow

1. User enters prompt
2. OpenAI processes the query
3. AI returns movie suggestions
4. TMDB API fetches actual movie data
5. Results render in reusable MovieList components

---

## 🌍 Multi-Language Support

- Language constants configuration
- Dynamic UI text switching
- Easily extendable for additional languages

---

# 🛠 Tech Stack

| Category | Technology |
|--------|-------------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Authentication | Firebase |
| Movie Data | TMDB API |
| AI Recommendations | OpenAI API |
| Routing | React Router DOM |
| Deployment | Vercel / Netlify / Firebase Hosting |

---

# 🏗 Project Architecture

(updating soon)

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

# 🤖 OpenAI Integration

The AI search feature works as follows:

1. User submits a natural language query
2. OpenAI generates movie suggestions
3. Suggested titles are matched with TMDB data
4. Results are displayed using reusable components

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

**gptSlice**
- GPT search query
- AI movie suggestions

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

Tailwind CSS utility classes ensure consistent layout and performance.

---

# 🚀 Deployment

Build the production version:

```
npm run build
```

Deploy using:

- **Vercel**
- **Netlify**
- **Firebase Hosting**

---

# 📈 Future Improvements

Planned enhancements include:

- Watchlist feature
- Movie detail pages
- Ratings & reviews
- Dark / Light mode
- Improved GPT prompt engineering
- Personalized recommendations

---

# 👨‍💻 Author

**Your Name**

GitHub  
 https://github.com/kashaf009/MovieFlix-gpt



---

# 📄 License

This project is built for educational and portfolio purposes.

All movie data belongs to **TMDB**.  
Netflix branding and trademarks belong to their respective owners.

---

⭐ If you found this project useful, consider giving it a **star on GitHub**.