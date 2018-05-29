require('./bootstrap');

window.Vue = require('vue');


Vue.component('vuemas', require('./components/VuemasComponent.vue'));

const app = new Vue({
    el: '#app'
});
