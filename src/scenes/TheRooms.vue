<template>
  <base-render-scene>
    <base-lights></base-lights>

    <cannon-world :gravity="{ x: 0, y: 0, z: 0 }">
      <base-plane></base-plane>

      <base-character :setRadius="2"></base-character>

      <div v-if="isModel">
        <base-room-model></base-room-model>
        <base-room-model :position="{ x: 30, y: 0, z: 0 }" :rotation="{ x: 0, y: Math.PI / -2, z: 0 }"></base-room-model>
        <base-room-model :position="{ x: 0, y: 0, z: 35 }" :rotation="{ x: 0, y: Math.PI / 2, z: 0 }"></base-room-model>
      </div>
      <!-- <base-room-model></base-room-model>
      <base-room-model :position="{ x: 30, y: 0, z: 0 }" :rotation="{ x: 0, y: Math.PI / -2, z: 0 }"></base-room-model>
      <base-room-model :position="{ x: 0, y: 0, z: 35 }" :rotation="{ x: 0, y: Math.PI / 2, z: 0 }"></base-room-model> -->

      <div v-else>
        <base-room :width="15" :height="8" :position="{ x: 0, y: 4, z: 0 }" :depth="15"></base-room>
        <base-room :width="5" :position="{ x: 25, y: 5, z: 0 }" :color="'yellow'"></base-room>
        <base-room :width="15" :position="{ x: 0, y: 5, z: 25 }" :color="'brown'"></base-room>
      </div>
    </cannon-world>
  </base-render-scene>
</template>

<script>
import { Camera, Renderer, Scene } from 'troisjs';
import Stats from 'troisjs/src/components/misc/Stats';

import BaseRenderScene from '../components/layout/BaseRenderScene.vue';

import BaseRoom from '../components/rooms/BaseRoom.vue';
import BasePlane from '../components/rooms/BaseFloor.vue';
import BaseCharacter from '../components/characters/BaseCharacter.vue';
import BaseLights from '../components/lights/BaseLights.vue';
import BaseRoomModel from '../components/rooms/BaseRoomModel.vue';

import { Color, MathUtils, Object3D, Vector3 } from 'three';
import CannonWorld from 'troisjs/src/components/physics/CannonWorld.js';

export default {
  components: {
    Camera,
    Renderer,
    Scene,
    BaseRoom,
    BasePlane,
    BaseCharacter,
    BaseLights,
    Stats,
    BaseLights,
    BaseRoomModel,
    BaseRenderScene,
    CannonWorld,
  },
  data() {
    return {
      isModel: false,
    };
  },
  methods: {
    switchModel() {
      this.isModel = !this.isModel;
    },
  },
  mounted() {
    const f3 = this.$pane.addFolder({
      title: 'Character',
    });
    f3.addButton({ title: 'Switch Models' }).on('click', this.switchModel);
  },
};
</script>
