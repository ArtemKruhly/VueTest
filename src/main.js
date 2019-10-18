import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import VueDraggable from 'vue-draggable'

Vue.use(VueDraggable);
Vue.use(Buefy);
Vue.use(VueVideoPlayer);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
