import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment';
import 'normalize.css/normalize.css';

import './plugins/element';
import './plugins/vcharts';
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import 'echarts-wordcloud';
// v-charts 不支持 echarts5版本

import VueEcharts from 'vue-echarts';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.prototype.$bus = new Vue();
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern);
});
Vue.component('v-chart', VueEcharts);
if (process.env.NODE_ENV === 'development') {
  // 测试服务器使用mock数据
  require('@/mock');
}
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
