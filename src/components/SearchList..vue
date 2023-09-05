<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input type="text" class="search-input" placeholder="Input Movie"
    v-model="searchMovie">
  </form>
  <Loader v-if="searchStore.loader"/>
  <div v-else>
    <MovieList v-for="movie in searchStore.movies" :key="movie.id" :movie="movie" :is-search="true"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MovieList from './MovieList.vue';
import {useSearchStore} from '../stores/search-store'
import Loader from '../components/LoaderLoad.vue'
const searchStore = useSearchStore()
const searchMovie = ref("")
</script>

<style scoped>
.search-input{
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>