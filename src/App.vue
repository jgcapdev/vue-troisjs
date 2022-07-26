<template>
  <router-view></router-view>
</template>

<script>
import TheRooms from '@/scenes/TheRooms.vue';
import TheTeleport from '@/scenes/TheTeleport.vue';

export default {
  components: { TheRooms, TheTeleport },
};
</script>

<style>
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>
