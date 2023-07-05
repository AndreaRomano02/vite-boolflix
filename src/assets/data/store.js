import { reactive } from 'vue';

export const store = reactive({
  // Movies Array
  movies: [],
  series: [],
  uriImg: 'https://image.tmdb.org/t/p/w342',

  // Search Text by AppSearch
  textSearched: '',
});
