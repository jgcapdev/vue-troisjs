import { createRouter, createWebHistory } from 'vue-router';

import TheRooms from '@/scenes/TheRooms.vue';
import TheTeleport from '@/scenes/TheTeleport.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/rooms' },
    { path: '/rooms', component: TheRooms },
    { path: '/teleport', component: TheTeleport },
  ],
});

export default router;
