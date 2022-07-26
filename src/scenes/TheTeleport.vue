<template>
  <base-render-scene>
    <the-text :text="text"></the-text>

    <base-lights></base-lights>

    <cannon-world :gravity="{ x: 0, y: -9.82, z: 0 }">
      <base-plane></base-plane>

      <base-character @text-base="setText" :setRadius="2" ref="character"></base-character>

      <the-portal :position="{ x: 0, y: 2, z: 0 }"></the-portal>
    </cannon-world>
  </base-render-scene>
</template>

<script>
import BaseRenderScene from '@/components/layout/BaseRenderScene.vue';
import TheText from '@/components/ui/TheText.vue';

import BaseRoom from '@/components/rooms/BaseRoom.vue';
import BasePlane from '@/components/rooms/BaseFloor.vue';
import BaseCharacter from '@/components/characters/BaseCharacter.vue';
import BaseLights from '@/components/lights/BaseLights.vue';
import BaseRoomModel from '@/components/rooms/BaseRoomModel.vue';
import ThePortal from '@/components/rooms/ThePortal.vue';

import CannonWorld from 'troisjs/src/components/physics/CannonWorld.js';

export default {
  components: {
    BaseRoom,
    BasePlane,
    BaseCharacter,
    BaseLights,
    BaseLights,
    BaseRoomModel,
    BaseRenderScene,
    CannonWorld,
    TheText,
    ThePortal,
  },
  data() {
    return {
      text: 'Troisjs and Vue',
    };
  },
  methods: {
    setText(text) {
      this.text = text;
    },
  },
};
</script>
