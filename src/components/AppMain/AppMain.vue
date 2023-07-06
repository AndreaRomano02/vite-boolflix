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
    <div v-if="!movies.length && !series.length" class="main-start">
      <h1>CERCA UN FILM O UNA SERIE TV!!!</h1>
    </div>
    <div v-else class="main-content py-5">
      <div class="container">
        <!-- Films -->
        <h1>FILMS</h1>
        <div class="row row-cols-4 g-4">
          <CardApp class="col" v-for="movie in movies" :key="movie.id" :show="movie" :uriImg="uriImg" />
        </div>

        <!-- Series -->
        <h1>SERIES</h1>
        <div class="row row-cols-4 g-4">
          <CardApp class="col" v-for="serie in series" :key="serie.id" :show="serie" :uriImg="uriImg" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_mixins.scss' as *;
@use '@/assets/scss/_variable.scss' as *;

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

.main-content {
  color: white;
  background-color: $bg-netflix;
  min-height: 100%;

  h1:last-of-type {
    margin-top: 100px;
  }
}
</style>
