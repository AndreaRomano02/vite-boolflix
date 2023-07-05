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
  <MovieApp :movies="movies" />
</template>

<style scoped></style>
