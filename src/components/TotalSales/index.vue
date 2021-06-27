<template>
  <div>
    <common-cart title="累计销售额" :value=salesToday>
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>同日比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月日比</span>
            <span class="emphasis">9.33%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">¥ 30,000,000</span>
      </template>
    </common-cart>
  </div>
</template>

<script>
import commonCartMixin from '../../mixins/commonCartMixin';
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'sales',
  mixins: [commonCartMixin,commonDataMixin],
  computed: {
    
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    font-size: 12px;
    margin-top: 3px;
    color: #666;
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="scss" >
.emphasis {
  margin-left: 5px;
  font-weight: 700;
  color: #333;
}
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>