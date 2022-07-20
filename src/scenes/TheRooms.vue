<template>
  <base-render-scene>
    <base-lights></base-lights>

    <base-plane></base-plane>

    <base-character :radius="2"></base-character>

    <base-room-model></base-room-model>
    <base-room-model :position="{ x: 30, y: 0, z: 0 }" :rotation="{ x: 0, y: Math.PI / -2, z: 0 }"></base-room-model>
    <base-room-model :position="{ x: 0, y: 0, z: 35 }" :rotation="{ x: 0, y: Math.PI / 2, z: 0 }"></base-room-model>

    <!-- <base-room :width="15" :height="8" :position="{ x: 0, y: 4, z: 0 }" :depth="15"></base-room>
      <base-room :width="5" :position="{ x: 25, y: 5, z: 0 }" :color="'yellow'"></base-room>
      <base-room :width="15" :position="{ x: 0, y: 5, z: 25 }" :color="'brown'"></base-room> -->
  </base-render-scene>
</template>

<script>
import { Camera, Renderer, Scene } from 'troisjs';
import Stats from 'troisjs/src/components/misc/Stats';
import { AxesHelper } from 'three';

import BaseRenderScene from '../components/layout/BaseRenderScene.vue';

import BaseRoom from '../components/rooms/BaseCharacter.vue';
import BasePlane from '../components/rooms/BaseFloor.vue';
import BaseCharacter from '../components/rooms/BaseCharacter.vue';
import BaseLights from '../components/lights/BaseLights.vue';
import BaseRoomModel from '../components/rooms/BaseRoomModel.vue';

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
    BaseRenderScene,
  },
};
</script>
