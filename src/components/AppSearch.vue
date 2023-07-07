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
  <form class="d-flex" @submit.prevent="$emit('search', textSearched)">
    <input v-model="textSearched" type=" text" class="form-control" placeholder="Cerca...">
    <button class="btn btn-secondary">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </button>
  </form>
</template>

<style scoped></style>
