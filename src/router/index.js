import Vue from "vue";
import VueRouter from "vue-router";

import home from "../components/home.vue";
import layout from "../layout";
import products from "../Views/Products/products.vue";
import detail from "../Views/Products/detail.vue";
import shoppingCart from "../Views/Products/shoppingCart.vue";

// 把VueRouter挂载到Vue实例（根），这样就不用每个模块都导入，通过this.$router访问路由
Vue.use(VueRouter);

const routes = [
  {
    //两种方式打开路由
    //1.声明式:<router-link to="/home">
    //2.编程式:router.push('/home')、
    //        router.push({ name: 'user', params: { userId: '123' }})
    //        router.push({ path: 'user', query: { plan: 'private' }})  //如果通过path打开，params会忽略，query会拼在url中
    path: '/home',
    name: '/home',
    component: layout,
    children: [
      {
        path: '/products',  // 'products' 和 '/products' 不一样，加了'/'后会当作根路径
        component: products
      },
      {
        //动态路径参数，参数值会被设置到 this.$route.params
        //当使用路由参数时，原来的组件实例会被复用，可以在beforeRouteUpdate处理数据
        //router.push({ name: 'user', params: { userId }}) // -> /user/123
        //router.push({ path: `/user/${userId}` }) // -> /user/123
        path: '/detail/:id',
        component: detail
      },
      {
        path: '/detail',
        name: '/detail',
        component: detail
      },
      {
        path: '/shoppingCart',
        name: '/shoppingCart',
        component: shoppingCart
      },
    ]
  },
  {
    path: '/detail/v1-*',  //前缀路由
    component: detail
  },
  {
    //同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：路由定义得越早，优先级就越高。
    //通配符路由，当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。
    path: '*',  
    component: home //*通常用于404
  },
]

const router = new VueRouter({
  routes
});

export default router;