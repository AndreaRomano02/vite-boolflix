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
      <p>Language: {{ movie.lang }}</p>
      <p>Score: {{ movie.popularity }}</p>
    </li>
  </ul>
</template>

<style scoped></style>
