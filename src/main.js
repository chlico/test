import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from "moment";
import 'normalize.css/normalize.css'
import '@/styles/index.css' // global css
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY/MM/DD HH:mm:ss") {
  return moment(parseInt(dataStr)).format(pattern);
});
Vue.use(ElementUI)

new Vue({
  router,

  render: function (h) {
    return h(App)
  }
}).$mount('#app')