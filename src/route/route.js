import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../components/Landing.vue'
import Home from '../components/Home'
import Messages from '../components/Messages'
import Video from '../components/Video'
import StoriesBehind from '../components/StoriesBehind'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'LandingPage', component: Landing},
        {path: '/home', name:'HomePage', component: Home},
        {path: '/messages', name:'MessagesPage', component: Messages},
        {path: '/video', name:'VideoPage', component: Video},
        {path: '/storiesbehind', name:'StoriesBehindPage', component: StoriesBehind}
    ]
})