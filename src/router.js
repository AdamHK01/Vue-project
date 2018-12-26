import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //配置规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:SearchContainer},
    {path:'/search',component:ShopcarContainer}
  ],
  linkActiveClass:'mui-active' //覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router