<script>
// Import store
import { store } from '@/assets/data/store'

// Import APP
import CardApp from './CardApp.vue'

export default {
  components: { CardApp },
  data: () => store,
}
</script>

<template>
  <main>
    <div v-if="!movies.length || !series.length" class="main-start">
      <h1>CERCA UN FILM O UNA SERIE TV!!!</h1>
    </div>
    <div v-else class="main-content">
      <!-- Films -->
      <h1>FILMS</h1>
      <CardApp v-for="movie in movies" :key="movie.id" :show="movie" :uriImg="uriImg" />

      <!-- Series -->
      <h1>SERIES</h1>
      <CardApp v-for="serie in series" :key="serie.id" :show="serie" :uriImg="uriImg" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_mixins.scss' as *;

main {
  height: calc(100vh - 100px);
}

.main-start {
  height: 100%;
  background-color: gray;
  @include flex-center;
  background-image: url('@/assets/img/bg-main.png');
  background-repeat: no-repeat;
  background-size: cover;


  h1 {
    display: inline-block;
    padding: 2rem;
    font-size: 3rem;
    color: whitesmoke;
    text-shadow: 0 0px 20px white;
    background-color: rgba($color: #000, $alpha: 0.9);
  }
}
</style>
