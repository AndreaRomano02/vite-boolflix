import { reactive } from 'vue';

export const store = reactive({
  // Movies Array
  movies: [],
  series: [],

  // Search Text by AppSearch
  textSearched: '',
});
