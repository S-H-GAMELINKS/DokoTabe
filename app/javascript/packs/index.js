import Vue from 'vue/dist/vue.esm'
import Header from '../components/layouts/Header.vue'
import Router from '../router/router.js'

const index = new Vue({
    router: Router,
    el: "#index",
    components: {
        'nav-bar': Header
    },
    data: function(){
        return {
            message: "Hello World!"
        }
    }
})