import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import 'vuetify/dist/vuetify.min.css'

Vue.use(axios)
Vue.use(Vuetify)

new Vue(App).$mount('#app');