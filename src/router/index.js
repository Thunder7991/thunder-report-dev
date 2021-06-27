import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//定义路由
const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home', 
      component:() => import('@/views/Home'), 
      meta: { title: '首页' },
    }
    
    
];

//创建router 实例
const router = new VueRouter({
  routes,
  mode: 'history',
});

//导出
export default router;
