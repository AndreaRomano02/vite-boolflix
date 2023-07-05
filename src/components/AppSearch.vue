<script>
export default {
  data() {
    return {
      textSearched: '',
    }
  },
  emits: ['search',],
}
</script>

<template>
  <div class="d-flex m-3">
    <input v-model="textSearched" type="text" class="form-control w-50" placeholder="Cerca...">
    <button class="btn btn-secondary" @click="$emit('search', textSearched)">Cerca</button>
  </div>
</template>

<style scoped></style>
