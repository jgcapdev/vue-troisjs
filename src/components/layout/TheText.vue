<template>
  <Text
    :text="text"
    font-src="/assets/fonts/helvetiker_regular.typeface.json"
    align="center"
    :size="3"
    :height="5"
    :position="position"
    :rotation="rotation"
    :cast-shadow="true"
  >
    <BasicMaterial>
      <Texture src="/assets/textures/grass/color.jpg" />
      <Texture src="/assets/textures/grass/normal.jpg" name="normalMap" />
      <Texture src="/assets/textures/grass/ambientOcclusion.jpg" name="aoMap" />
      <Texture src="/assets/textures/grass/roughness.jpg" name="roughnessMap" />
    </BasicMaterial>
  </Text>
</template>

<script>
import { Text, BasicMaterial, Texture } from 'troisjs';

export default {
  components: { Text, BasicMaterial, Texture },
  props: {
    text: {
      type: String,
      default: 'Troisjs and Vue',
    },
  },
  data() {
    return {
      position: { x: -5, y: 20, z: 10 },
      rotation: { x: 0, y: Math.PI * 0.5, z: 0 },
    };
  },
};
</script>
