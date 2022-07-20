<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window" shadow>
    <Stats />
    <Camera ref="camera" :far="1000" :near="1" :fov="60" :position="{ x: 30, y: 20, z: 40 }" />
    <Scene ref="scene" background="lightblue">
      <base-lights></base-lights>

      <base-plane></base-plane>

      <base-character :radius="2"></base-character>

      <base-room-model></base-room-model>
      <base-room-model :position="{ x: 30, y: 0, z: 0 }" :rotation="{ x: 0, y: Math.PI / -2, z: 0 }"></base-room-model>
      <base-room-model :position="{ x: 0, y: 0, z: 35 }" :rotation="{ x: 0, y: Math.PI / 2, z: 0 }"></base-room-model>

      <!-- <base-room :width="15" :height="8" :position="{ x: 0, y: 4, z: 0 }" :depth="15"></base-room>
      <base-room :width="5" :position="{ x: 25, y: 5, z: 0 }" :color="'yellow'"></base-room>
      <base-room :width="15" :position="{ x: 0, y: 5, z: 25 }" :color="'brown'"></base-room> -->
    </Scene>
  </Renderer>
</template>

<script>
import { Camera, Renderer, Scene } from 'troisjs';
import Stats from 'troisjs/src/components/misc/Stats';
import { AxesHelper } from 'three';

import BaseRoom from './components/base/BaseRoom.vue';
import BasePlane from './components/base/BaseFloor.vue';
import BaseCharacter from './components/base/BaseCharacter.vue';
import BaseLights from './components/lights/BaseLights.vue';
import BaseRoomModel from './components/base/BaseRoomModel.vue';

export default {
  components: {
    Camera,
    Renderer,
    Scene,
    BaseRoom,
    AxesHelper,
    BasePlane,
    BaseCharacter,
    BaseLights,
    Stats,
    BaseLights,
    BaseRoomModel,
  },
  mounted() {
    const scene = this.$refs.scene;

    const axesHelper = new AxesHelper(100);

    scene.add(axesHelper);
  },
};
</script>

<style>
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>
