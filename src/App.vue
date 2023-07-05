<script>
// Import store
import { store } from './assets/data/store'

// Import API key
import { api_key } from './assets/data/api_key'
import { baseUri } from './assets/data/data'

// Import axios Library
import axios from 'axios'
const axiosParams = {
  params: {
    api_key,
    language: 'it-IT',
  }
};

// Import APP
import AppSearch from './components/AppSearch.vue'

export default {
  components: { AppSearch, },
  data() {
    return {
      store,
      baseUri,
    }
  },
  methods: {
    fetchMovies(textSearched) {
      axios.get(this.baseUri + `/search/movie?query=${textSearched}`, axiosParams)
        .then(res => {
          this.store.movies.push(res.data.results)

        })
        .catch(err => console.error(err))
    },
  },
}
</script>

<template>
  <AppSearch @search="fetchMovies" />
</template>

<style></style>
