<script>
export default {
  props: {
    serie: Object
  },
  data() {
    return {
      flags: ['de', 'en', 'es', 'fi', 'fr', 'it', 'ja', 'ko', 'pt', 'tr'],
    }
  },
  computed: {
    isThere() {
      return this.flags.includes(this.serie.lang);
    }
  }
}
</script>

<template>
  <ul>
    <li>
      <p>Title: {{ serie.title }}</p>
      <p>Original Name: {{ serie.mainTitle }}</p>
      <p v-if="isThere">Language: <img :src="`./src/assets/img/flags/${serie.lang}.png`" :alt="serie.lang"></p>
      <p v-else>Language: {{ serie.lang }}</p>
      <p>Score: {{ Math.ceil(serie.vote) }}</p>
    </li>
  </ul>
</template>

<style scoped>
img {
  height: 30px;
}
</style>
