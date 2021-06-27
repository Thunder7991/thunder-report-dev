<template>

  <div style="height:100%;" ref="liquidFill"></div>

</template>

<script>
function getColor(value) {
  return (value > 0 && value <= 0.5)
    ? 'rgba(97,216,0,.7)'
    : (value > 0.5 && value <= 0.8)
    ? 'rgba(204,178,26,0.7)'
    : (value > 0.8)
    ? 'rgba(241,47,28,0.7)'
    : '#c7c7cb';
}

export default {
  data() {
    return {
      arrData: 0.58,
    };
  },
  mounted() {
    this.drawLiquidfill();
  },
  methods: {
    drawLiquidfill() {
      let hygrometer = this.$echarts.init(this.$refs.liquidFill);
      hygrometer.setOption({
        tooltip: {
          show: true,
        },
        series: [
          {
            name: '支付转化率',
            type: 'liquidFill',
            radius: '80%',
            data: [
              this.arrData,
              //   {
              //     value: 0.45,
              //     direction: 'left',
              //   },
              //   {
              //     value: 0.26,
              //     itemStyle: { opacity: 0.6 },
              //     emphasis: { itemStyle: { opacity: 0.9 } },
              //   },
            ],
            label: {
              color: '#27e5f1',
              insideColor: '#fff',
              fontSize: 40,
              fontWeight: 'normal',
              formatter: v => {
                return `${Math.floor(v.value * 100)}%`;
              },
              position: ['50%', '50%'],
            },
            color: [
              {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: ['#f6ffed'], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: [`${getColor(this.arrData)}`], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            ],
            outline: {
              show: true,
              borderDistance: 0,
              itemStyle: {
                borderColor: '#aaa4a4',
                borderWidth: 1,
                color: 'none',
                shadowBlur: 0,
                shadowColor: '#fff',
              },
            },
            backgroundStyle: {
              color: '#fff',
            },
            itemStyle: {
              shadowBlur: 0,
              shadowColor: '#fff',
            },
            amplitude: 8, //振幅
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>