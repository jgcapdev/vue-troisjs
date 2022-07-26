<template>
  <Box ref="porta" :size="4" :position="position" :receive-shadow="true" @created="initIMesh">
    <BasicMaterial :color="'orange'" />
  </Box>
</template>

<script>
import { Box, BasicMaterial } from 'troisjs';

export default {
  components: {
    Box,
    BasicMaterial,
  },
  props: {
    position: {
      type: Object,
      default: { x: 14, y: 2, z: -25 },
    },
  },
  methods: {
    initIMesh(imesh) {
      this.imesh = imesh;

      let mass = 0;

      imesh.userData.mass = mass;
    },
  },
};
</script>

<style></style>
