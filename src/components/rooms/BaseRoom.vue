<template>
  <Mesh ref="room" :position="position" receive-shadow @created="initIMesh">
    <BoxGeometry :width="width" :height="height" :depth="depth" />
    <BasicMaterial :color="color">
      <Texture src="/assets/textures/bricks/color.jpg" />
      <Texture src="/assets/textures/bricks/normal.jpg" name="normalMap" />
      <Texture src="/assets/textures/bricks/ambientOcclusion.jpg" name="aoMap" />
      <Texture src="/assets/textures/bricks/roughness.jpg" name="roughnessMap" />
    </BasicMaterial>
  </Mesh>
</template>

<script>
import { Mesh, BoxGeometry, BasicMaterial, Texture } from 'troisjs';

export default {
  components: { Mesh, BoxGeometry, BasicMaterial, Texture, Text },
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
  methods: {
    initIMesh(imesh) {
      this.imesh = imesh;

      let mass = 0;

      imesh.userData.mass = mass;
    },
  },
};
</script>
