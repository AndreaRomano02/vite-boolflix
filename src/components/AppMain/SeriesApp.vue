<script>
export default {
  props: {
    serie: Object,
    uriImg: String
  },
  data() {
    return {
      flags: ['de', 'en', 'es', 'fi', 'fr', 'it', 'ja', 'ko', 'pt', 'tr'],
    }
  },
  computed: {
    isThere() {
      return this.flags.includes(this.serie.lang);
    },
    score() {
      let score = Math.ceil(this.serie.vote / 2)
      return score
    },
  }
}
</script>

<template>
  <ul>
    <li>
      <img :src="uriImg + serie.poster_path" :alt="serie.title">
      <p>Title: {{ serie.title }}</p>
      <p>Original Name: {{ serie.mainTitle }}</p>
      <p v-if="isThere">Language: <img :src="`./src/assets/img/flags/${serie.lang}.png`" :alt="serie.lang"></p>
      <p v-else>Language: {{ serie.lang }}</p>
      <p>Score: {{ score }}</p>
    </li>
  </ul>
</template>

<style scoped>
p img {
  height: 30px;
}
</style>
