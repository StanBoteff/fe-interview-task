import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Audiences from '../views/Audiences';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    redirect: 'audiences'
  },
  {
    path: '/audiences',
    name: 'audience',
    component: Audiences
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import('../views/Campaigns')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
