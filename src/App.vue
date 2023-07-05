<script>
// Import API key
import { api_key } from './assets/data/api_key'

// Import axios Library
import axios from 'axios'

export default {
  data() {
    return {
      api_key,
    }
  }
}
</script>

<template>
  <h1>{{ api_key }}</h1>
</template>

<style></style>
