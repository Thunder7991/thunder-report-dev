<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="always">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,782</div>
                <v-chart :option="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <v-chart :option="searchUserOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableTata">
                <el-table-column prop="rank" label="排名" width="180">
                </el-table-column>
                <el-table-column prop="keyword" label="关键字">
                </el-table-column>
                <el-table-column prop="count" label="总搜索量">
                </el-table-column>
                <el-table-column prop="users" label="搜索用户数">
                </el-table-column>
              </el-table>
              <el-pagination layout="prev,pager,next" :total="100" :page-size="4" background
                @current-change="onPageChange"></el-pagination>
            </div>
          </div>

        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类">
                </el-radio-button>
                <el-radio-button label="商品">
                </el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :option="categoryOptions"></v-chart>
          </div>

        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'line',
            data: [100, 150, 622, 987, 222, 102],
            areaStyle: {
              color: 'rgba(95,187,255,.5)',
            },
            lineStyle: {
              color: 'rgb(95,187,255)',
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
      },
      searchNumberOption: {},
      tableTata: [
        {
          id: 1,
          rank: 1,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%',
        },
        {
          id: 2,
          rank: 2,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%',
        },
        {
          id: 3,
          rank: 3,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%',
        },
        {
          id: 4,
          rank: 4,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%',
        },
      ],
      radioSelect: '品类',
      categoryOptions: {},
    };
  },
  mounted() {
    this.renderPieChart();
  },
  methods: {
    onPageChange(page) {
      console.log(page);
    },
    renderPieChart() {
      const mockData = [
        {
          legendname: '辛安杂货铺',
          value: 77,
          precent: '15.40%',
          itemStyle: {
            color: '#e7e702',
          },
          name: '辛安杂货铺 | 15.40%',
        },
        {
          legendname: '辛安拉面',
          value: 97,
          precent: '22.30%',
          itemStyle: {
            color: '#8d7fec',
          },
          name: '辛安拉面 | 22.30%',
        },
        {
          legendname: '辛安炸鸡饭',
          value: 92,
          precent: '21.15%',
          itemStyle: {
            color: '#5085f2',
          },
          name: '辛安炸鸡饭 | 21.15%',
        },
      ];
      this.categoryOptions = {
        legend: {
          show: true,
          type: 'scroll',
          orient: 'vertical', //图例列表的布局朝向。
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c',
          },
        },
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666',
            },
            left: 20,
            top: 20,
          },
          {
            text: '累计订单量',
            subtext: '770',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
          },
        ],
        series: [
          {
            name: '品类分布',
            type: 'pie',
            data: [...mockData],
            label: {
              
                show: true,
                position: 'outside',
                color: 'inherit',
                formatter: function (params) {
                  return `${params.data.legendname}`;
                },
            },
            center: ['35%', '50%'],
            radius: ['45%', '60%'], //第一项是内半径,第二项是外半径.
            labelLine: {
            
                length: 5,
                length2: 3,
                smooth: true, //是否平滑视觉引导线
             
            },
            clockwise: true, //饼图的扇区是否是顺时针排布。
            itemStyle:{
              borderWidth:4,
              borderColor:'#fff'
            }
          },
        ],
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const str =
              params.seriesName +
              '<br />' +
              params.marker +
              params.data.legendname +
              '<br />' +
              '数量: ' +
              params.data.value +
              '<br />' +
              '占比:' +
              params.data.precent;
            return str;
          },
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    box-sizing: border-box;
    width: 50%;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 700;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin: 0 20px 20px;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>