import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(fasStar, farStar, faMagnifyingGlass);

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app');
