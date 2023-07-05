<script>
export default {
  props: {
    list: Array,
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list"><a href="#">{{ item }}</a></li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  gap: 20px;
}

li {
  color: white;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
