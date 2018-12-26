// 入口文件

//导入Mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需导入 Mint-UI中的组件   
import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己配置的router.js路由模块
import router from './router.js'

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource)

//导入app根组件
import app from './App.vue'

var vm  = new Vue({
    el:'#app',
    render:function(c){
       return c(app)
    },
    router //1.4挂载路由对象到vm实例上
}) 