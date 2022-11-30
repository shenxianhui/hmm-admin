import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    // 默认
    {
      path: '/',
      redirect: '/login', // 重定向
    },

    // Demo
    {
      path: '/demo', // 路由地址
      name: 'demo', // 路由名称
      component: () =>
        import(/* webpackChunkName: "view-[request]" */ '@/views/demo.vue'),
    },
    // demo练习
    {
      path: '/demo-lianxi', // 路由地址
      name: 'demo-lianxi', // 路由名称
      component: () =>
        import(/* webpackChunkName: "view-[request]" */ '@/views/demo练习.vue'),
    },
    // hmm
    {
      path: '/hmm', // 路由地址
      name: 'hmm', // 路由名称
      component: () =>
        import(/* webpackChunkName: "view-[request]" */ '@/views/hmm.vue'),
    },
    // 练习1
    {
      path: '/test1', // 路由地址
      name: 'test1', // 路由名称
      component: () =>
        import(/* webpackChunkName: "view-[request]" */ '@/views/test1.vue'),
    },
    // 父组件
    {
      path: '/parent', // 路由地址
      name: 'parent', // 路由名称
      component: () =>
        import(/* webpackChunkName: "view-[request]" */ '@/views/parent.vue'),
    },
    // 登录页
    {
      path: '/login', // 路由地址
      component: () =>
        import(
          /* webpackChunkName: "view-[request]" */ '@/views/login/index.vue'
        ),
      children: [
        {
          path: '', // 路由地址
          name: 'login', // 路由名称
          component: () =>
            import(
              /* webpackChunkName: "view-[request]" */ '@/views/login/login.vue'
            ),
        },
        {
          path: 'register', // 路由地址
          name: 'register', // 路由名称
          component: () =>
            import(
              /* webpackChunkName: "view-[request]" */ '@/views/login/register.vue'
            ),
        },
        {
          path: 'find-password', // 路由地址
          name: 'find-password', // 路由名称
          component: () =>
            import(
              /* webpackChunkName: "view-[request]" */ '@/views/login/find-password.vue'
            ),
        },
      ],
    },
    // 首页
    {
      path: '/home', // 路由地址
      name: 'home', // 路由名称
      component: () =>
        import(
          /* webpackChunkName: "view-[request]" */ '@/views/home/home.vue'
        ),
    },
    //注册页
    // {
    //   path: '/register', // 路由地址
    //   name: 'register', // 路由名称
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "view-[request]" */ '@/views/login/register.vue'
    //     ),
    // },
  ],
})
