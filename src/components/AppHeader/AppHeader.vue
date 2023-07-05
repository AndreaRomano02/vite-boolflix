<script>
// Import store
import { store } from '../../assets/data/store'

// Import App
import AppSearch from '../AppSearch.vue'

export default {
  components: { AppSearch },
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
  <AppSearch @search="onSearch" />
</template>

<style scoped></style>
