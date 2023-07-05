<script>
// Import store
import { store } from '@/assets/data/store'

// Import APP
import MoviesApp from './MoviesApp.vue'
import SeriesApp from './SeriesApp.vue'

export default {
  components: { MoviesApp, SeriesApp },
  data: () => store,
}
</script>

<template>
  <!-- Films -->
  <h1>FILMS</h1>
  <MoviesApp v-for="movie in movies" :key="movie.id" :movie="movie" />

  <!-- Series -->
  <h1>SERIES</h1>
  <SeriesApp v-for="serie in series" :key="serie.id" :serie="serie" />
</template>

<style scoped></style>
