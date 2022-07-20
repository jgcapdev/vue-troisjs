<template>
  <Mesh ref="room" :position="position" receive-shadow>
    <BoxGeometry :width="width" :height="height" :depth="depth" />
    <BasicMaterial :color="color" />
  </Mesh>
</template>

<script>
import { Mesh, BoxGeometry, BasicMaterial } from 'troisjs';

export default {
  components: { Mesh, BoxGeometry, BasicMaterial },
  props: {
    position: {
      type: Object,
      default: { x: 0, y: 4, z: 0 },
    },
    width: {
      type: Number,
      default: 10,
    },
    height: {
      type: Number,
      default: 10,
    },
    depth: {
      type: Number,
      default: 10,
    },
    color: {
      type: String,
      default: 'red',
    },
  },
};
</script>
