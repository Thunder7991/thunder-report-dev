<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView';
import SalesView from '../components/SalesView';
import BottomView from '../components/BottomView';
import MapView from '../components/MapView';
import { wordcloud } from '../api/index';
export default {
  name: 'Home',
  data() {
    return {
      reportData: {
        name:'132255305'
      },
      wordCloud: null,
      mapData: null,
    };
  },
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },

  provide() {
    return {
      getReportData: this.getReportData,
      wordCloud: this.getWordCloud,
      mapData: this.getMapData,
    };
  },

  mounted() {
    this.tests();
  },
  methods: {
    tests() {
      wordcloud().then(res => {
        console.log(res);
      });
    },
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
       return this.wordCloud
    },
    getMapData() {
      return this.mapData
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>