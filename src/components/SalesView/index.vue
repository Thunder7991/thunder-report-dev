<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{padding:'0 0 20px 0'}">
      <template v-slot:header>
        <div class="menu-wtapper">
          <el-menu mode="horizontal" :default-active="activeIndex" @select="onMenuSelect" class="sales-view-menu">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker class="sales-view-picker" type="daterange" v-model="date" range-separator="至"
              start-placeholder="开始日期" end-placeholder="结束日期" size="small" :picker-options="pickerOptions"
              :unlink-panels="true"></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :option="chartOPtion"></v-chart>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-number',+item.no <=3?'top-no':'']">{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      chartOPtion: {
        tooltip: {
          show:'true',
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          // formatter:function(params) {
          //   return params.seriesName
          // }
        },
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666',
          },
          left:25,
          top:20
        },
        xAxis: {
          type:'category',
          data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          axisTick:{
            alignWithLabel:true,
            lineStyle:{
              color:'#999'
            }
          },
          axisLine:{
              lineStyle:{
                color:'#999'
              }
          },
          axisLabel:{
            color:'#333'
          }
        },
        yAxis: {
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            lineStyle:{
              type:'dotted',
              color:'#eee'
            }
          }
        },
        series: [
          {
            name:'销售额',
            type:'bar',
            barWidth:'35%',
            data:[200,355,210,666,777,999,888,7899,452,100,332,111]
          }
        ],
        color:['#3398DB'],
        grid:{
          top:70,
          left:60,
          right:60,
          bottom:50
        }
      },
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '99',
        },
        {
          no: 2,
          name: '麦当劳',
          money: '99',
        },
        {
          no: 3,
          name: '麦当劳',
          money: '99',
        },
        {
          no: 4,
          name: '麦当劳',
          money: '99',
        },
        {
          no: 5,
          name: '麦当劳',
          money: '99',
        },
        {
          no: 6,
          name: '麦当劳',
          money: '99',
        },
        {
          no: 7,
          name: '麦当劳',
          money: '99',
        },
        {
          no: 8,
          name: '麦当劳',
          money: '99',
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wtapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 700;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>