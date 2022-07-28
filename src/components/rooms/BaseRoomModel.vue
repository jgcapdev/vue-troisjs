<template>
  <Mesh ref="wall" @created="createMesh" :scale="scale" :position="position" :rotation="rotation">
    <BoxGeometry />
    <BasicMaterial />
  </Mesh>
</template>

<script>
import { GltfModel, BasicMaterial, BoxGeometry, Mesh } from 'troisjs';
import { InstancedMesh, BufferGeometry, BufferAttribute, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  components: { GltfModel, BasicMaterial, BufferGeometry, BoxGeometry, Mesh },
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
    createMesh() {
      const loader = new GLTFLoader();
      let glTFGeometry = new BufferGeometry();

      this.imesh = this.$refs.wall.mesh;

      let scene = this.$store.getters.getScene;

      const that = this;
      loader.load('/assets/models/roomgood.gltf', function (gltf) {
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.userData.mass = 0;
            that.imesh.geometry = child.geometry;
            that.imesh.material = child.material;
          }

          scene.add(gltf.scene);
          console.log(gltf);
        });
      });

      let position = new Vector3(this.position.x, this.position.y, this.position.z);
      this.imesh.geometry.setAttribute('position', new BufferAttribute(position, 4));
    },
  },
};
</script>
