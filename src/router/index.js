import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/proto-chain',
    name: 'Prototype chain',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrototypeChainComponent.vue'),
  },
  {
    path: '/promise-array',
    name: 'Promise array',
    component: () => import(/* webpackChunkName: "about" */ '../views/PromiseArray.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
