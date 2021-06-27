<template>
  <div>
    <common-cart title="累计用户数" value="1,087,503">

      <template>
        <v-chart :option="getOption()"></v-chart>
        <!-- <div id="total-users-chart" :style="{width:'100%',height:'100%'}"></div> -->
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比 </span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比 </span>
          <span class="emphasis">8.73%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-cart>
  </div>
</template>

<script>
import commonCartMixin from '../../mixins/commonCartMixin';
export default {
  name: 'users',
  mixins: [commonCartMixin],
  mounted() {
    // this.initChart();
  },
  methods: {
    getOption() {
      // const chartDom = document.getElementById('total-users-chart');
      // const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' });
      return {
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          type: 'category',
          show: false,
        },
        series: [
          {
            name:'上月平台用户量',
            type: 'bar',
            data: [200],
            barWidth: 10,
            stack: '总量',
            itemStyle: {
              color: '#45c946',
            },
          },
          {
            name:'今日平台用户量',
            type: 'bar',
            data: [250],
            stack: '总量',
            itemStyle: {
              color: '#eee',
            },
          },
          {
            type: 'custom', //自定义数据
            data: [200],
            stack: '总量',
            renderItem: (params, api) => {
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M966.845427 93.37191L483.364392 930.62808999 0 93.37191Z',
                      x: -5,
                      y: -25,
                      width: 15,
                      height: 15,
                      layout: 'cover',
                    },
                    style: {
                      fill: '#45c946',
                    },
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M51.181 917.124l467.885-810.25 467.774 810.25z',
                      x: -5,
                      y: 10,
                      width: 15,
                      height: 15,
                      layout: 'cover',
                    },
                    style: {
                      fill: '#45c946',
                    },
                  },
                ],
              };
            },
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
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>