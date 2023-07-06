<script>
import { uriImg } from '../../assets/data/data'

export default {
  props: {
    show: Object,
    credits: Array,
  },
  data() {
    return {
      flags: ['de', 'en', 'es', 'fi', 'fr', 'it', 'ja', 'ko', 'pt', 'tr'],
      uriImg,
    }
  },
  methods: {
    star(i) {
      if (i <= this.score && this.score > 0) return 'fas'
      else return 'far'
    }
  },
  computed: {
    title() {
      return this.show.title || this.show.name;
    },
    originalTitle() {
      return this.show.original_title || this.show.original_name;
    },
    isThere() {
      return this.flags.includes(this.show.original_language);
    },
    score() {
      return Math.ceil(this.show.vote_average / 2);
    },
    urlSrc() {
      const url = new URL(`../../assets/img/flags/${this.show.original_language}.png`, import.meta.url);
      return url.href
    },
    fiveCredits() {
      return this.credits.splice(0, 5)
    },
  }
}
</script>

<template>
  <ul>
    <li>
      <div class="poster">
        <img v-if="show.poster_path" :src="uriImg + show.poster_path" :alt="title">
        <p v-else>No Poster</p>
      </div>
      <div class="overlay">
        <div class="description">
          <p>Title: {{ title }}</p>
          <p>Original Name: {{ originalTitle }}</p>
          <p v-if="isThere"><img :src="urlSrc" :alt="show.original_language"></p>
          <p v-else>Language: {{ show.original_language }}</p>
          <p>Score:
            <font-awesome-icon :icon="[`${star(i)}`, 'star']" v-for="i in 5" :key="show.id" />
          </p>
          <div>
            <h5>Main Actors: </h5>
            <span v-for="credit in fiveCredits" :key="credit.id">{{ credit.original_name }}, </span>
          </div>
          <div>
            <h5>Description: </h5>
            <p>{{ show.overview }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_mixins.scss' as *;

p img {
  height: 30px;
}

li {
  position: relative;
  height: 100%;

  &:hover .overlay {
    display: flex;
  }
}

.overlay {
  text-align: center;
  background-color: rgba(30, 30, 30, 0.95);
  overflow: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @include flex-center;

  display: none;

}

.poster {
  height: 100%;

  img {
    width: 100%;

    height: 100%;
  }

  p {
    @include flex-center;
    height: 513px;
  }
}
</style>
