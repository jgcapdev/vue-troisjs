<template>
  <base-render-scene>
    <the-text></the-text>

    <base-lights></base-lights>

    <cannon-world :gravity="{ x: 0, y: -9.82, z: 0 }">
      <base-plane></base-plane>

      <base-character :setRadius="2" ref="character"></base-character>

      <div v-if="isModel">
        <base-room-model></base-room-model>
        <base-room-model :position="{ x: 30, y: 0, z: 0 }" :rotation="{ x: 0, y: Math.PI / -2, z: 0 }"></base-room-model>
        <base-room-model :position="{ x: 0, y: 0, z: 35 }" :rotation="{ x: 0, y: Math.PI / 2, z: 0 }"></base-room-model>
      </div>

      <div v-else>
        <base-room :width="15" :height="8" :position="{ x: 0, y: 4, z: 0 }" :depth="15"></base-room>
        <base-room :width="5" :position="{ x: 25, y: 5, z: 0 }" :color="'yellow'"></base-room>
        <base-room :width="15" :position="{ x: 0, y: 5, z: 25 }" :color="'blue'"></base-room>
      </div>
    </cannon-world>
  </base-render-scene>
</template>

<script>
import { Camera, Renderer, Scene } from 'troisjs';
import Stats from 'troisjs/src/components/misc/Stats';

import BaseRenderScene from '../components/layout/BaseRenderScene.vue';
import TheText from '../components/layout/TheText.vue';

import BaseRoom from '../components/rooms/BaseRoom.vue';
import BasePlane from '../components/rooms/BaseFloor.vue';
import BaseCharacter from '../components/characters/BaseCharacter.vue';
import BaseLights from '../components/lights/BaseLights.vue';
import BaseRoomModel from '../components/rooms/BaseRoomModel.vue';

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
    TheText,
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
      title: 'Models',
    });
    f3.addButton({ title: 'Switch Models' }).on('click', this.switchModel);
  },
};
</script>
