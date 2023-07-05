<script>
// Import API key
import { api_key } from './assets/data/api_key'
import { baseUri } from './assets/data/data'

// Import axios Library
import axios from 'axios'
const axiosParams = {
  params: {
    api_key,
  }
};

export default {
  data() {
    return {
      api_key,
      baseUri,
    }
  },
  methods: {
    fetchMovies(uri = this.baseUri) {
      axios.get(uri + `/search/movie`, axiosParams)
        .then(res => {
          console.log(res.data)

        })
    },
  },
  created() {
    this.fetchMovies();
  },
}
</script>

<template>
  <h1>{{ api_key }}</h1>
</template>

<style></style>
