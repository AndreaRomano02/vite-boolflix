<script>
// Import store
import { store } from './assets/data/store'

// Import API key
import { baseUri } from './assets/data/data'
import { params } from './assets/data/data'

// Import axios Library
import axios from 'axios'

// Import APP
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppMain from './components/AppMain/AppMain.vue'

export default {
  components: { AppMain, AppHeader },
  data() {
    return {
      baseUri,
      params
    }
  },
  computed: {
    axiosParams() {
      const { api_key, language } = params;
      return {
        params: {
          language,
          api_key,
          query: store.textSearched,
        }
      }
    },
  },
  methods: {
    onSearch() {
      if (!store.textSearched) {
        store.series = [];
        store.movies = [];
        return;
      }

      this.fetchApi('search/movie', 'movies');
      this.fetchApi('search/tv', 'series');
    },
    fetchApi(endpoint, target) {
      axios.get(`${this.baseUri}/${endpoint}`, this.axiosParams)
        .then(res => {
          store[target] = res.data.results
        })
        .catch(err => console.error(err))
    },
  },
}
</script>

<template>
  <AppHeader @search="onSearch" />
  <AppMain />
</template>

<style></style>
