<template>
  <router-view></router-view>
</template>

<script>
import TheRooms from './scenes/TheRooms.vue';

export default {
  components: { TheRooms },
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
