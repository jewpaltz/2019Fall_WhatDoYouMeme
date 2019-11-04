import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/js/all';
import 'bulma/css/bulma.css';
import 'notyf/notyf.min.css'; // for React and Vue

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
