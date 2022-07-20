<template>
  <Mesh ref="floor" :rotation="{ x: Math.PI / -2 }" receive-shadow>
    <PlaneGeometry :width="100" :height="100" />
    <BasicMaterial :color="color" />
  </Mesh>
</template>

<script>
import { Mesh, PlaneGeometry, BasicMaterial } from 'troisjs';

export default {
  components: { Mesh, PlaneGeometry, BasicMaterial },
  props: {
    color: {
      type: String,
      default: 'green',
    },
  },
};
</script>
