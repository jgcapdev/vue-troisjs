<template>
  <Box ref="portal" :size="4" :position="position" :receive-shadow="true" @created="initIMesh" @pointerOver="onPointerOver">
    <BasicMaterial :color="color" />
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
    color: {
      type: String,
      default: 'orange',
    },
  },
  methods: {
    initIMesh(imesh) {
      this.imesh = imesh;

      let mass = 0;

      imesh.userData.mass = mass;
    },
    onPointerOver(event) {
      event.component.mesh.material.color.set(event.over ? 0xff11ee : this.color);
    },
  },
};
</script>

<style></style>
