import { createRouter, createWebHistory } from 'vue-router';

import TheRooms from './scenes/TheRooms.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/rooms' },
    { path: '/rooms', component: TheRooms },
  ],
});

export default router;
