<script>
// Import store
import { store } from '../../assets/data/store'

// Import App
import AppSearch from '../AppSearch.vue'
import AppNavbar from './AppNavbar.vue'

export default {
  components: { AppSearch, AppNavbar },
  data: () => store,
  methods: {
    onSearch(textSearched) {
      this.textSearched = textSearched;
      this.$emit('search')
    }
  },
  emits: ['search'],
}
</script>

<template>
  <header>
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-8 d-flex align-items-center">
          <img src="@/assets/img/logo.png" alt="Logo">
          <AppNavbar :list="navbarList" />
        </div>
        <div class="col-4">
          <AppSearch @search="onSearch" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 100px;
  background-color: rgb(20, 20, 20);
}

img {
  height: 50px;
}
</style>
