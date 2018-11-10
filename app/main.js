import Vue from 'nativescript-vue'
import App from './components/MapPage'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: '192.168.178.42' })
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(App)])
}).$start()
