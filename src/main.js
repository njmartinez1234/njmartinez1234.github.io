import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/main.css';

Vue.config.productionTip = false;

const eventBus = new Vue({
  data() {
    return {
      token: '',
      userBalance: 0,
      loggedIn: false,
      userName:''
    };
  },
  watch: {
    token(newValue) {
      localStorage.setItem('token', newValue);
    },
    userBalance(newValue) {
      localStorage.setItem('userBalance', newValue);
    },
    loggedIn(newValue) {
      localStorage.setItem('loggedIn', newValue);
    },
    userName(newValue) {
      localStorage.setItem('userName', newValue);
    }
  }
});

Vue.prototype.$eventBus = eventBus;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
