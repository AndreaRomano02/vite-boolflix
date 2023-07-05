<script>
// Import store
import { store } from '@/assets/data/store'

// Import APP
import MovieApp from './MovieApp.vue'

export default {
  components: { MovieApp },
  data: () => store,
}
</script>

<template>
  <MovieApp v-for="movie in movies" :key="movie.id" :movie="movie" />
</template>

<style scoped></style>
