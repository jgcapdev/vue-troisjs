<template>
  <Renderer
    ref="renderer"
    antialias
    :orbit-ctrl="{ enableDamping: true }"
    :resize="resize"
    shadow
    :pointer="{ intersectRecursive: true }"
  >
    <Stats />
    <Camera ref="camera" :far="1000" :near="1" :fov="fov" :position="position" />
    <Scene ref="scene" :background="background">
      <!-- Render scene is here! -->
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
import { AxesHelper, Fog } from 'three';

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
  data() {
    return {
      far: 1000,
      fov: 60,
      position: { x: 27.6, y: 30.8, z: 33.8 },
      background: '#ADD8E6',
      resize: 'window',
    };
  },
  mounted() {
    const scene = this.$refs.scene.scene;
    scene.fog = new Fog(0xa0a0a0, 200, 1000);
    this.$store.dispatch('fetchScene', this.$refs.scene);

    const axesHelper = new AxesHelper(100);
    scene.add(axesHelper);

    // ***** PANE *****
    const f5 = this.$pane.addFolder({
      title: 'Scene',
    });
    f5.addInput(this, 'far');
    f5.addInput(this, 'fov');
    f5.addInput(this, 'position');
    f5.addInput(this, 'background');
    f5.addBlade({
      view: 'list',
      label: 'render',
      options: [
        { text: 'false', value: false },
        { text: 'true', value: true },
        { text: 'window', value: 'window' },
      ],
      value: 'window',
    });
    // ***** PANE *****
  },
};
</script>
