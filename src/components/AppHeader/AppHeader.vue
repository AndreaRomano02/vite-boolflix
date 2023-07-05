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
          <a href="#"><img src="@/assets/img/logo.png" alt="Logo"></a>
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
  background-color: rgb(10, 10, 10);
}

img {
  height: 50px;
}
</style>
