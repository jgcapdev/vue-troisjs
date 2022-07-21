<template>
  <GltfModel @created="hola" src="/assets/models/roomgood.gltf" :scale="scale" :position="position" :rotation="rotation" />
</template>

<script>
import { GltfModel } from 'troisjs';
import { BufferGeometry } from 'three';

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
  methods: {
    hola(e) {
      const glTFGeometry = new BufferGeometry();

      e.children.forEach((e) => {
        console.log(e);
        //glTFGeometry = e.geometry.boundingBox;
      });
    },
  },
};
</script>
