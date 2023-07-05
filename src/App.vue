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
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppMain from './components/AppMain/AppMain.vue'

export default {
  components: { AppMain, AppHeader },
  data() {
    return {
      store,
      baseUri,
    }
  },
  methods: {
    fetchMovies() {
      axios.get(this.baseUri + `/search/movie?query=${this.store.textSearched}`, axiosParams)
        .then(res => {
          const apiMovies = res.data.results;

          store.movies = apiMovies.map(movie => {
            const { id, original_language, original_title, title, vote_average } = movie;
            return { id, lang: original_language, original_title, title, vote: vote_average }
          });

        })
        .catch(err => console.error(err))
    },
  },
}
</script>

<template>
  <AppHeader @search="fetchMovies" />
  <AppMain />
</template>

<style></style>
