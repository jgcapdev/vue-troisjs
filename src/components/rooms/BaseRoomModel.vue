<template>
  <GltfModel
    @load="createMesh($event, 1, 'wall')"
    src="/assets/models/roomgood.gltf"
    :scale="scale"
    :position="position"
    :rotation="rotation"
  />
  <GltfModel
    @load="createMesh($event, 1, 'floor')"
    src="/assets/models/roomgood.gltf"
    :scale="scale"
    :position="position"
    :rotation="rotation"
  />
  <GltfModel
    @load="createMesh($event, 1, 'rug')"
    src="/assets/models/roomgood.gltf"
    :scale="scale"
    :position="position"
    :rotation="rotation"
  />
  <GltfModel
    @load="createMesh($event, 1, 'couch001')"
    src="/assets/models/roomgood.gltf"
    :scale="scale"
    :position="position"
    :rotation="rotation"
  />
  <GltfModel
    @load="createMesh($event, 1, 'couch003')"
    src="/assets/models/roomgood.gltf"
    :scale="scale"
    :position="position"
    :rotation="rotation"
  />
</template>

<script>
import { GltfModel, BasicMaterial, BufferGeometry } from 'troisjs';
import { InstancedMesh, Object3D, DynamicDrawUsage } from 'three';

export default {
  components: { GltfModel, BasicMaterial, BufferGeometry },
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
    createMesh(gltf, count, groupname) {
      for (let i = 0; i < gltf.scene.children.length; i++) {
        let geometry = gltf.scene.children[i].geometry.clone();
        let material = gltf.scene.children[i].material;
        let instance = new InstancedMesh(geometry, material, count);

        instance.instanceMatrix.setUsage(DynamicDrawUsage);

        const dummy = new Object3D();

        dummy.position.set(this.position.x, this.position.y, this.position.z);
        dummy.updateMatrix();
        instance.setMatrixAt(i, dummy.matrix);
        instance.instanceMatrix.needsUpdate = true;

        if (groupname) {
          gltf.scene.children.forEach((e) => {
            if (e.name === groupname) e.add(instance);
          });
        } else {
          gltf.scene.add(instance);
        }
      }

      /*
      const loader = new GLTFLoader();

      loader.load('/assets/models/roomgood.gltf', function (gltf) {
        let _wallMesh = gltf.scene.getObjectByName('wall');
        const _floorMesh = gltf.scene.getObjectByName('floor').geometry;
        const _rugMesh = gltf.scene.getObjectByName('rug').geometry;
        const _couchOneMesh = gltf.scene.getObjectByName('couch001').geometry;
        const _couchTwoMesh = gltf.scene.getObjectByName('couch003').geometry;

        let instanced = new InstancedMesh(_wallMesh.geometry, _wallMesh.material, 500);
        instanced.name = 'wallAll';
      });
      */
    },
  },
};
</script>
