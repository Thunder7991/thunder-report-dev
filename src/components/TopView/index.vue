<template>
  <div class="topview">
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- :body-style="{padding:0}" -->
        <el-card shadow="hover" >
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-user></today-user>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales';
import TotalOrders from '../TotalOrders';
import TodayUser from '../TodayUser';
import TotalUsers from '../TotalUsers';

export default {
  name:'TopicView',
  components: {
    TotalSales,
    TotalOrders,
    TodayUser,
    TotalUsers,
  },
};
</script>

<style lang="scss" scoped>
</style>