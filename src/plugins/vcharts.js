import Vue from 'vue';
import VeLine from 'v-charts/lib/line.common';
import 'v-charts/lib/style.css';
import VeBmap from 'v-charts/lib/bmap.common';
import VeMap from 'v-charts/lib/map.common';
Vue.component(VeLine.name, VeLine); //传入的是组件的形式
Vue.component(VeBmap.name, VeBmap);
Vue.component(VeMap.name, VeMap);
