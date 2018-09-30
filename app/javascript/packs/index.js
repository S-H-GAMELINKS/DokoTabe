import Vue from 'vue/dist/vue.esm'
import Header from '../components/layouts/Header.vue'

const index = new Vue({
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