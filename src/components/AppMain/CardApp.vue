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
    },
    urlSrc() {
      const url = new URL(`../../assets/img/flags/${this.show.lang}.png`, import.meta.url);
      return url.href
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
      <div class="overlay">
        <div class="description">
          <p>Title: {{ show.title }}</p>
          <p>Original Name: {{ show.mainTitle }}</p>
          <p v-if="isThere"><img :src="urlSrc" :alt="show.lang"></p>
          <p v-else>Language: {{ show.lang }}</p>
          <p>Score:
            <font-awesome-icon :icon="['fas', 'star']" v-for="star in score" />
            <font-awesome-icon :icon="['far', 'star']" v-for="star in lessToScore" />
          </p>
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
