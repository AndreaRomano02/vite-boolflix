import { reactive } from 'vue';

export const store = reactive({
  // Movies Array
  movies: [],
  series: [],
  castMovies: [],
  castSeries: [],

  // Search Text by AppSearch
  textSearched: '',

  // NavBar List
  navbarList: ['Home', 'Serie TV', 'Film', 'Originali', 'Aggiunti di recente', 'La mia lista'],
});
