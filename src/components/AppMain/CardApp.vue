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
      return parseInt(Math.ceil(this.show.vote / 2));
    },
    lessToScore() {
      return 5 - this.score
    }
  }
}
</script>

<template>
  <ul>
    <li>
      <div class="poster">
        <img v-if="show.poster_path" :src="uriImg + show.poster_path" :alt="show.title">
        <p v-else>No Poster</p>
      </div>
      <div class="description">
        <p>Title: {{ show.title }}</p>
        <p>Original Name: {{ show.mainTitle }}</p>
        <p v-if="isThere">Language: <img :src="`./src/assets/img/flags/${show.lang}.png`" :alt="show.lang"></p>
        <p v-else>Language: {{ show.lang }}</p>
        <p>Score:
          <font-awesome-icon :icon="['fas', 'star']" v-for="star in score" />
          <font-awesome-icon :icon="['far', 'star']" v-for="star in lessToScore" />
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
p img {
  height: 30px;
}
</style>
