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
  <div class="d-flex">
    <input v-model="textSearched" @keyup.enter="$emit('search', textSearched)" type=" text" class="form-control"
      placeholder="Cerca...">
    <button class="btn btn-secondary" @click="$emit('search', textSearched)">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </button>
  </div>
</template>

<style scoped></style>
