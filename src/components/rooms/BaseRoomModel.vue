<template>
  <GltfModel ref="model-room" src="/assets/models/roomgood.glb" :scale="scale" :position="position" :rotation="rotation" />
</template>

<script>
import { GltfModel } from 'troisjs';

export default {
  components: { GltfModel },
  props: {
    position: {
      type: Object,
      default: { x: 0, y: 0, z: 0 },
    },
    scale: {
      type: Object,
      default: { x: 5, y: 5, z: 5 },
    },
    rotation: {
      type: Object,
      default: { x: 0, y: 0, z: 0 },
    },
  },
};
</script>
