<template>
  <div>
    <common-cart title="今日交易用户数" value="2,512,420">
      <template>
        <v-chart :option="initChart()"></v-chart>
        <!-- <div id="today-users-chart" :style="{width:'100%',height:'100%'}"></div> -->
      </template>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-cart>
  </div>
</template>

<script>
import commonCartMixin from '../../mixins/commonCartMixin';
export default {
  name: 'todayUser',
  mixins: [commonCartMixin],
  mounted() {
    // this.initChart();
  },
  methods: {
    initChart() {
      // const chartDom = document.getElementById('today-users-chart');
      // const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' });
      return {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        },
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false, //X轴两侧的间距
          data: [
            '00:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
            '01:00',
          ],
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: '退货率',
            type: 'bar',
            data: [410, 621, 330, 752, 199, 366, 265, 310, 550, 654, 299, 311, 66, 98],
            barWidth: '60%',
          },
        ],
        grid: {
          left: 0,
          bottom: 0,
          right: 0,
          top: 0,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>