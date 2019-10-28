import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ()=>import('@/views/Home.vue'),
    children:[
      {path:"index",component:()=>import('@/components/index.vue')},
      {path:"list",component:()=>import('@/components/list.vue')}
    ],
    redirect:"./index"
  },
  {
    path: "/user",
    name: "user",
    component: ()=>import('@/views/user.vue'),
    children:[
      {path:"test",component:()=>import('@/components/test.vue')}
    ],
    redirect:"./user/test"
  },
  {
    path: "/system",
    name: "system",
    component: ()=>import('@/views/system.vue'),
    children:[
      {path:"systema",component:()=>import('@/components/systema.vue')}
    ],
    redirect:"./system/systema"
  }

];

const router = new VueRouter({
  mode:"history",
  routes
});

export default router;
