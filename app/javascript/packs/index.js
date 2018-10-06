import Vue from 'vue/dist/vue.esm'
import * as VueGoogleMaps from 'vue2-google-maps'
import Header from '../components/layouts/Header.vue'
import Router from '../router/router.js'

Vue.use(VueGoogleMaps, {
    load: {
      key: String(gon.google_map_key),
      libraries: 'places', 
    },
})

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