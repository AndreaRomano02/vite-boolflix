import { reactive } from 'vue';

export const store = reactive({
  // Movies Array
  movies: [],

  // Search Text by AppSearch
  textSearched: '',
});
