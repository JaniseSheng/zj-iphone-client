// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import storage from '@/lib/storagejs';
import 'base/styles/global.less'
import 'base/styles/themes.less';
import uiLoading from '@/components/loading'
Vue.use(iView)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if ((to.name !== 'login') && !storage.get('islogin')) {
    next({path: 'login'});
  } else {
    next();
  }
})

Vue.mixin({
  data() {
    return {
      get isGloloading() {
        return false
      }
    }
  }
})

Vue.prototype.$isloading = false
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App,
      uiLoading
    }
  })
