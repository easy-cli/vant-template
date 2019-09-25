import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'amfe-flexible';
import {
  NavBar,
  Field,
  CellGroup,
  Toast,
  Picker,
  Popup,
  SubmitBar
} from 'vant';

Vue.use(Field);
Vue.use(NavBar);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(SubmitBar);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
