// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/Landing.vue';
import Consumption from '../pages/Consumption.vue';
import Professional from '../pages/Professional.vue';
import FunFunFun from '../pages/FunFunFun.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;