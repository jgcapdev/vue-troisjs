<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window" shadow>
    <Stats />
    <Camera ref="camera" :far="1000" :near="1" :fov="60" :position="{ x: 30, y: 20, z: 40 }" />
    <Scene ref="scene" background="lightblue">
      <slot></slot>
    </Scene>
  </Renderer>
</template>

<script>
import { Camera, Renderer, Scene } from 'troisjs';
import Stats from 'troisjs/src/components/misc/Stats';
import { AxesHelper } from 'three';

export default {
  components: {
    Camera,
    Renderer,
    Scene,
    Stats,
    AxesHelper,
  },
  mounted() {
    const scene = this.$refs.scene;

    const axesHelper = new AxesHelper(100);
    scene.add(axesHelper);
  },
};
</script>
