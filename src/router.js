import Vue from 'vue';
import Router from 'vue-router';
import Custom from './components/Custom';
import Login from './components/Login.vue';
import HelloWorld from "@/components/HelloWorld";
import Array from "@/components/Array";
import Player from "@/components/Player";

Vue.use(Router);

export default new Router({
    mode: 'history',
   routes: [
       {
         path: '/',
         component: Custom,
       },
       {
           path: '/hello',
           component: HelloWorld,
       },
       {
           path: '/login',
           component: Login,
       },
       {
           path: '/array',
           component: Array,
       },
       {
           path: '/player',
           component: Player,
       },
       {
           path: '*',
           redirect: 'login',
       },
   ]
});
