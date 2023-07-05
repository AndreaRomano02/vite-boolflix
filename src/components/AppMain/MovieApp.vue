<script>
export default {
  props: {
    movie: Object
  },
  data() {
    return {
      flags: ['de', 'en', 'es', 'fi', 'fr', 'it', 'ja', 'ko', 'pt', 'tr'],
    }
  },
  computed: {
    isThere() {
      return this.flags.includes(this.movie.lang);
    }
  }
}
</script>

<template>
  <ul>
    <li>
      <p>Title: {{ movie.title }}</p>
      <p>Original Name: {{ movie.original_title }}</p>
      <p v-if="isThere">Language: <img :src="`./src/assets/img/flags/${movie.lang}.png`" :alt="movie.lang"></p>
      <p v-else>Language: {{ movie.lang }}</p>
      <p>Score: {{ Math.ceil(movie.vote) }}</p>
    </li>
  </ul>
</template>

<style scoped>
img {
  height: 30px;
}
</style>
