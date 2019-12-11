// 1.引入vue和vue-router模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 6.引入路由需要渲染的组件
import Index from '@/views/index.vue'
import Pro from '@/views/pro.vue'
import Sg from '@/views/sg.vue'
import Mb from '@/views/mb.vue'
import Yl from '@/views/yl.vue'
// 2.让vue-router对vue进行路由管理
Vue.use(VueRouter)

// 3.创建路由对象
var router = new VueRouter({
  // 4.配置路由3个参数name,path,component
  routes: [
    {
      name: 'default',
      path: '/',
      component: Index
    },
    {
      name: 'index',
      path: '/index',
      component: Index
    },
    {
      name: 'pro',
      path: '/pro/:id',
      component: Pro,
      children: [
        { name: 'sg',
          path: 'sg',
          component: Sg
        },
        { name: 'mb',
          path: 'mb',
          component: Mb
        },
        { name: 'yl',
          path: 'yl',
          component: Yl
        }
      ]
    }
  ]
})

// 5.暴露路由
export default router
