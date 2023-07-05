<script>
export default {
  props: {
    show: Object,
    uriImg: String
  },
  data() {
    return {
      flags: ['de', 'en', 'es', 'fi', 'fr', 'it', 'ja', 'ko', 'pt', 'tr'],
    }
  },
  computed: {
    isThere() {
      return this.flags.includes(this.show.lang);
    },
    score() {
      let score = Math.ceil(this.show.vote / 2)
      return score
    },
  }
}
</script>

<template>
  <ul>
    <li>
      <img :src="uriImg + show.poster_path" :alt="show.title">
      <p>Title: {{ show.title }}</p>
      <p>Original Name: {{ show.mainTitle }}</p>
      <p v-if="isThere">Language: <img :src="`./src/assets/img/flags/${show.lang}.png`" :alt="show.lang"></p>
      <p v-else>Language: {{ show.lang }}</p>
      <p>Score: {{ score }}</p>
    </li>
  </ul>
</template>

<style scoped>
p img {
  height: 30px;
}
</style>
