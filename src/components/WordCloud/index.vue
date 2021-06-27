<template>
  <div id="main" style="height:100%;" ref="wordCloud"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    initWordCloud() {
      let wcChart = this.$echarts.init(this.$refs.wordCloud);
      var data1 = [
        { name: 'Java', value: 200 },
        { name: 'Python', value: 200 },
        { name: 'HTML', value: 150 },
        { name: 'JavaSript', value: 150 },
        { name: 'Java Web', value: 180 },
        { name: 'MySQL', value: 160 },
        { name: 'CentOS', value: 170 },
        { name: 'Android', value: 100 },
        { name: 'Hadoop', value: 210 },
        { name: 'HDFS', value: 190 },
        { name: 'YARN', value: 190 },
        { name: 'MapReduce', value: 190 },
        { name: 'Flume', value: 180 },
        { name: 'Sqoop', value: 170 },
        { name: 'Hive', value: 180 },
        { name: 'Azkaban', value: 175 },
        { name: 'Zookpeer', value: 155 },
        { name: '爬虫', value: 210 },
        { name: 'Spark', value: 195 },
        { name: '大数据', value: 500 },
        { name: 'Hbase', value: 229 },
        { name: '其他', value: 60 },
        { name: 'Ajax', value: 320 },
        { name: 'IDE', value: 167 },
        { name: 'echarts', value: 99 },
        { name: 'wordCloud', value: 111 },
        { name: '数据采集', value: 68 },
        { name: '数据分析', value: 123 },
        { name: '数据清洗', value: 135 },
        { name: '数据存储', value: 135 },
        { name: '数据可视化', value: 165 },
        { name: 'apache', value: 215 },
        { name: 'Scalar', value: 220 },
        { name: '人工智能', value: 320 },
      ];
      var option = {
        title: {
          text: 'Thunder店铺',
          textStyle: {
            color: '#000',
          },
        },
        tooltip: {
          show: true,
        },
        backgroundColor: '#fff',
        series: [
          {
            type: 'wordCloud',

            //网格尺寸,尺寸越大，字体之间的间隔越大
            grideSize: 2,

            //字体的最大与最小字号
            sizeRange: [12, 35],

            //字体旋转的范围
            rotationRange: [45, 90, 135, -90],

            //词云形状 circle:圆形,pentagon:五边形
            //cardioid:苹果形或心形,star:星形,diamond:钻石,
            //triangle-forward:三角形,triangle:三角形,smooth:平滑
            shape: 'pentagon',
            textStyle: {
                //字体随机颜色
                color: function () {
                  return (
                    'rgb(' +
                    [
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255),
                    ].join(',') +
                    ')'
                  );
              },
              emphasis: {
                //阴影距离
                shadowBlur: 5,

                //阴影颜色
                shadowColor: '#333',
              },
            },
            data: data1,
          },
        ],
      };
      wcChart.setOption(option);
    },
  },
  mounted() {
    this.initWordCloud();
  },
};
</script>

<style lang="scss" scoped>
</style>