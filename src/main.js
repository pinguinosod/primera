import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
require('bootstrap')
 
Vue.use(VueRouter)

import view from './view.vue'
import content from './content.vue'
import lab from './lab.vue'
import deutscheSprache from './lab/deutscheSprache.vue'
import arithmeticus from './lab/arithmeticus.vue'
import pinguinosod from './pinguinosod.vue'
import hw from './helloworld.vue'

 
const router = new VueRouter({
    routes: [
      { 
        path: '/', component: view,
        children: [
          { path:'', component: content },
          { path: '/lab', component: lab },
          { path: '/lab/deutscheSprache', component: deutscheSprache },
          { path: '/lab/arithmeticus', component: arithmeticus },
          { path: '/pinguinosod', component: pinguinosod },
          { path: '/hello-world', component: hw }
        ]
      }
    ]
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
