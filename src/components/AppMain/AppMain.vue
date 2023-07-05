<script>
// Import store
import { store } from '@/assets/data/store'

// Import APP
import CardApp from './CardApp.vue'

export default {
  components: { CardApp },
  data: () => store,
}
</script>

<template>
  <!-- Films -->
  <h1>FILMS</h1>
  <CardApp v-for="movie in movies" :key="movie.id" :show="movie" :uriImg="uriImg" />

  <!-- Series -->
  <h1>SERIES</h1>
  <CardApp v-for="serie in series" :key="serie.id" :show="serie" :uriImg="uriImg" />
</template>

<style scoped></style>
