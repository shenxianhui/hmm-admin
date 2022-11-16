import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    // 默认
    {
      path: '/',
      redirect: '/demo', // 重定向
    },

    // Demo
    {
      path: '/demo', // 路由地址
      name: 'demo', // 路由名称
      component: () =>
        import(/* webpackChunkName: "view-[request]" */ `@/views/demo.vue`),
    },
  ],
})
