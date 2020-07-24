// tslint:disable-next-line:ordered-imports
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/tailwind.css';
// import 'tailwindcss/tailwind.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    // tslint:disable-next-line:object-literal-sort-keys
    render: (h) => h(App),
}).$mount('#app');
