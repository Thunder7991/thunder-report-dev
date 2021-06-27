<template>
  <div>
    <common-cart title="累计订单量" value="2,157,420">
      <template>
        <v-chart :option="initChart()"></v-chart>
        <!-- <div id="total-orders-chart" :style="{width:'100%',height:'100%'}"></div> -->
      </template>

      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">¥ 2,000,000</span>
      </template>
    </common-cart>
  </div>
</template>

<script>
import commonCartMixin from '../../mixins/commonCartMixin';
export default {
  name: 'orders',
  mixins: [commonCartMixin],
  mounted() {
    // this.initChart();
  },
  methods: {
    initChart() {
      // const chartDom = document.getElementById('total-orders-chart');
      // const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' });
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false, //X轴两侧的间距
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'line',
            data: [612, 987, 321, 565, 440, 520, 398, 499, 199, 299, 298, 632],
            areaStyle: {
              //折线图底部展示的面积
              color: 'purple',
            },
            lineStyle: {
              //折线统计图上的线段粗细
              width: 0,
            },
            itemStyle: {
              //折线统计图上的小点
              opacity: 0,
            },
            smooth: true,
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
.compare-wrapper {
}
</style>