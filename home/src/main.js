import Vue from 'vue'
import App from './App.vue'

import '@/fontsize.scss'
import animated from 'animate.css'

import TextMap from '@/constant/textmap.js'

Vue.config.productionTip = false

Vue.prototype.baseOss = 'https://lingyun-1303231715.cos.ap-chengdu.myqcloud.com/homepage/'
Vue.prototype.TextMap = TextMap

Vue.use(animated)

new Vue({
  render: h => h(App),
}).$mount('#app')
