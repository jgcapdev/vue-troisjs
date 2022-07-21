<template>
  <Renderer
    ref="renderer"
    antialias
    :orbit-ctrl="{ enableDamping: true }"
    resize="window"
    shadow
    :pointer="{ intersectRecursive: true }"
  >
    <Stats />
    <Camera ref="camera" :far="1000" :near="1" :fov="60" :position="{ x: 30, y: 20, z: 40 }" />
    <Scene ref="scene" background="lightblue">
      <slot></slot>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.1" :threshold="0.99" />
      <FXAAPass />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Camera, Renderer, Scene, EffectComposer, RenderPass, UnrealBloomPass, FXAAPass } from 'troisjs';
import Stats from 'troisjs/src/components/misc/Stats';
import { AxesHelper } from 'three';

export default {
  components: {
    Camera,
    Renderer,
    Scene,
    Stats,
    AxesHelper,
    EffectComposer,
    RenderPass,
    UnrealBloomPass,
    FXAAPass,
  },
  mounted() {
    const scene = this.$refs.scene;

    const axesHelper = new AxesHelper(100);
    scene.add(axesHelper);
  },
};
</script>
