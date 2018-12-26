// 入口文件

import Vue from 'vue'

//导入Mui的样式
import './lib/mui/css/mui.min.css'
//按需导入 Mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

//导入app根组件

import app from './App.vue'

var vm  = new Vue({
    el:'#app',
    render:function(c){
       return c(app)
    }
})