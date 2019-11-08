import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import pt_BR from 'vee-validate/dist/locale/pt_BR';
import VeeValidate,{ Validator } from 'vee-validate';

Vue.use(VeeValidate,{
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
Validator.localize('pt_BR',pt_BR);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
