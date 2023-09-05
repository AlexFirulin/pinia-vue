import { defineStore } from "pinia";
import { useMovieStore } from "./movie-store";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "ea80459d2ee5d55fa6ac4fc7d08d1cdc";

export const useSearchStore = defineStore("SearchStore", () => ({
  loader: false,
  movies: [],
  async getMovies(search) {
    this.loader = true;
    try {
      const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${search}`;
      const res = await fetch(url);
      const data = await res.json();
      this.movies = data.results || [];
    } catch (error) {
      console.error("Произошла ошибка при запросе к API TMDb:", error);
      this.movies = [];
    }
    this.loader = false;
  },
  addToUserMovies(object) {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    movieStore.activeTab = 1;
  },
}));
