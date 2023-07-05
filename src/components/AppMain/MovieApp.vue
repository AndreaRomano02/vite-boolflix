<script>
export default {
  props: {
    movies: Array
  },
}
</script>

<template>
  <ul>
    <li v-for="movie in movies">
      <p>Title: {{ movie.title }}</p>
      <p>Original Name: {{ movie.original_title }}</p>
      <p>Language: <img :src="`./src/assets/img/${movie.lang}.png`" :alt="movie.lang"></p>
      <p>Score: {{ movie.popularity }}</p>
    </li>
  </ul>
</template>

<style scoped>
img {
  height: 30px;
}
</style>
