<script>
export default {
  props: {
    movie: Object,
    uriImg: String
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
      <img :src="uriImg + movie.poster_path" :alt="movie.title">
      <p>Title: {{ movie.title }}</p>
      <p>Original Name: {{ movie.mainTitle }}</p>
      <p v-if="isThere">Language: <img :src="`./src/assets/img/flags/${movie.lang}.png`" :alt="movie.lang"></p>
      <p v-else>Language: {{ movie.lang }}</p>
      <p>Score: {{ Math.ceil(movie.vote) }}</p>
    </li>
  </ul>
</template>

<style scoped>
p img {
  height: 30px;
}
</style>
