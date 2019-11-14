import VueRouter from 'vue-router'
import index from '../../component/content/index.vue'
import sort from '../../component/content/sort.vue'
import sale from '../../component/content/sale.vue'
import sort1 from '../../component/content/sort1.vue'
import search from '../../component/content/search.vue'
import aside from '../../component/content/aside.vue'
import details from '../../component/content/details.vue'
import cart from '../../component/content/cart.vue'
import nav from '../../component/nav/nav.vue'
import login from '../../component/login/login.vue'
import resign from '../../component/login/resign.vue'
import forgetPass from '../../component/login/forgetPass.vue'
export default new VueRouter({
  routes:[
    {
      path:'/',component:nav,
      // 默认路径
      children:[
        {
          path:'/index',component:index
        },
        {
          path:'/sort',component:sort,
        },
        {
          path:'/sale',component:sale
        },
        {
          path:'/sort1',component:sort1
        },
        {
          path:'/cart',component:cart
        }
      ],
      redirect:'/index'
    },
    {
      path:'/details',component:details
    },
    {
      path:'/search',component:search
    },
    {
      path:'/aside',component:aside
    },
    {
      path:'/login',component:login
    },
    {
      path:'/resign',component:resign
    },
    {
      path:'/forgetPass',component:forgetPass
    },
    {
      path:'/*',redirect:nav,
      // 匹配以上不符合的路径
    }
  ]
})
