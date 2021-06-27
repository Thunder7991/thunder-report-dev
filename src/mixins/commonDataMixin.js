function format(v) {
  // return (+v).toLocaleString();//转换成千分位
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  return `${v}`.replace(reg, '$&,');
}

function wrapperArray(o, k) {
  return o && o[k] ? o[k] : [];
}
function wrapperMoney(o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00';
}

function wrapperNumber(o, k) {
  return o && o[k] ? `${format(o[k])}` : '0';
}

function wrapperPercentage(o, k) {
  return o && o[k] ? `${o[k]}%` : '0';
}
export default {
  computed: {
    ReportData() {
      return this.getReportData();
    },
    salesToday() {
      return wrapperNumber(this.ReportData, 'name');
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.ReportData, 'salesGrowthLastDay');
    },
    // WordCloudData() {
    //   return this.getWordCloud();
    // },
    // getMapData() {
    //   return this.getMapData();
    // },
  },
  inject: ['getReportData', 'wordCloud', 'mapData'],
};
