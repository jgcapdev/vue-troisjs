<template>
  <Mesh ref="floor" :rotation="{ x: Math.PI / -2 }" receive-shadow>
    <PlaneGeometry :width="100" :height="100" />
    <BasicMaterial :color="color" :props="{ side: materialSide }">
      <Texture src="/assets/textures/grass/color.jpg" />
      <Texture src="/assets/textures/grass/normal.jpg" name="normalMap" />
      <Texture src="/assets/textures/grass/ambientOcclusion.jpg" name="aoMap" />
      <Texture src="/assets/textures/grass/roughness.jpg" name="roughnessMap" />
    </BasicMaterial>
  </Mesh>
</template>

<script>
import { Mesh, PlaneGeometry, BasicMaterial, Texture } from 'troisjs';
import { DoubleSide, Vector3 } from 'three';

export default {
  components: { Mesh, PlaneGeometry, BasicMaterial, Texture },
  props: {
    color: {
      type: String,
      default: 'green',
    },
  },
  data() {
    return {
      materialSide: DoubleSide,
    };
  },
};
</script>
