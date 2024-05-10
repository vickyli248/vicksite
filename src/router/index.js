// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/Landing.vue';
import Consumption from '../pages/Consumption.vue';
import Professional from '../pages/Professional.vue';
import FunFunFun from '../pages/FunFunFun.vue';
import Redfin from '../pages/subpages/Redfin.vue'
import Bill from '../pages/subpages/Bill.vue'
import Canoo from '../pages/subpages/Canoo.vue'


const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/consumption',
    component: Consumption,
  },
  {
    path: '/professional',
    component: Professional,
  },
  {
    path: '/funfunfun',
    component: FunFunFun,
  },
  {
    path: '/redfin',
    component: Redfin,
  },
  {
    path: '/bill',
    component: Bill,
  },
  {
    path: '/canoo',
    component: Canoo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;