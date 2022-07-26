<template>
  <div v-if="showModel">
    <GltfModel
      @load="createMesh($event, 500, 'wall')"
      src="/assets/models/roomgood.gltf"
      :scale="scale"
      :position="position"
      :rotation="rotation"
    />
    <GltfModel
      @load="createMesh($event, 500, 'floor')"
      src="/assets/models/roomgood.gltf"
      :scale="scale"
      :position="position"
      :rotation="rotation"
    />
    <GltfModel
      @load="createMesh($event, 500, 'rug')"
      src="/assets/models/roomgood.gltf"
      :scale="scale"
      :position="position"
      :rotation="rotation"
    />
    <GltfModel
      @load="createMesh($event, 500, 'couch001')"
      src="/assets/models/roomgood.gltf"
      :scale="scale"
      :position="position"
      :rotation="rotation"
    />
    <GltfModel
      @load="createMesh($event, 500, 'couch003')"
      src="/assets/models/roomgood.gltf"
      :scale="scale"
      :position="position"
      :rotation="rotation"
    />
  </div>

  <div v-else>
    <Mesh ref="wall" @created="create" :scale="scale" :position="position" :rotation="rotation">
      <BoxGeometry />
      <BasicMaterial />
    </Mesh>
  </div>
</template>

<script>
import { GltfModel, BasicMaterial, BufferGeometry, BoxGeometry } from 'troisjs';
import { InstancedMesh, Object3D, DynamicDrawUsage } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  components: { GltfModel, BasicMaterial, BufferGeometry, BoxGeometry },
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
  data() {
    return {
      showModel: true,
    };
  },
  methods: {
    createMesh(gltf, count, groupname) {
      console.log(gltf);
      for (let i = 0; i < gltf.scene.children.length; i++) {
        let geometry = gltf.scene.children[i].geometry.clone();
        let material = gltf.scene.children[i].material;
        let instance = new InstancedMesh(geometry, material, count);

        //instance.instanceMatrix.setUsage(DynamicDrawUsage);

        const dummy = new Object3D();

        dummy.position.set(this.position.x, this.position.y, this.position.z);
        dummy.updateMatrix();
        //instance.setMatrixAt(i, dummy.matrix);
        // instance.instanceMatrix.needsUpdate = true;

        if (groupname) {
          gltf.scene.children.forEach((e) => {
            if (e.name === groupname) e.add(instance);
          });
        } else {
          gltf.scene.add(instance);
        }
      }
    },
    create(e) {
      const loader = new GLTFLoader();
      let mesh = this.$refs.wall.mesh;

      loader.load('/assets/models/roomgood.gltf', function (gltf) {
        let _wallMesh = gltf.scene.getObjectByName('wall');
        const _floorMesh = gltf.scene.getObjectByName('floor');
        const _rugMesh = gltf.scene.getObjectByName('rug').geometry;
        const _couchOneMesh = gltf.scene.getObjectByName('couch001').geometry;
        const _couchTwoMesh = gltf.scene.getObjectByName('couch003').geometry;

        let instancedWalls = new InstancedMesh(_wallMesh.geometry, _wallMesh.material, 500);
        instancedWalls.name = 'walls';
        instancedWalls.userData.mass = 1;

        let instancedFloors = new InstancedMesh(_floorMesh.geometry, _floorMesh.material, 500);
        instancedFloors.name = 'floors';
        instancedFloors.userData.mass = 1;
      });
    },
  },
};
</script>
