export const photoURL="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"


export const TMDB_API = import.meta.env.VITE_TMDB_API_KEY

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_API}`
  }
};
