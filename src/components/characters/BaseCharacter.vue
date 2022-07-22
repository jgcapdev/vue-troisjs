<template>
  <Mesh ref="character" @click="loadCryptos" :position="position" :receive-shadow="true" @pointerOver="onPointerOver">
    <SphereGeometry :radius="radius" />
    <BasicMaterial :color="color" />
  </Mesh>
</template>

<script>
import { Mesh, SphereGeometry, BasicMaterial } from 'troisjs';

export default {
  components: { Mesh, SphereGeometry, BasicMaterial },
  data() {
    return {
      color: this.setColor,
      radius: this.setRadius,
      position: this.setPosition,
    };
  },
  props: {
    setPosition: {
      type: Object,
      default: { x: 0, y: 10, z: 0 },
    },

    setRadius: {
      type: Number,
      default: 1,
    },
    setColor: {
      type: String,
      default: '#ffea00',
    },
    error: null,
  },
  mounted() {
    // ***** PANE *****
    const f1 = this.$pane.addFolder({
      title: 'Character',
    });
    f1.addInput(this, 'color');
    f1.addInput(this, 'radius', { min: 1, max: 10, step: 1 });
    f1.addInput(this, 'position');
    // ***** PANE *****

    const speed = 0.2;

    window.addEventListener('keypress', (event) => {
      if (event.key == 'w') {
        this.position.z = this.$refs.character.position.z -= speed;
      } else if (event.key == 'a') {
        this.position.x = this.$refs.character.position.x -= speed;
      } else if (event.key == 's') {
        this.position.z = this.$refs.character.position.z += speed;
      } else if (event.key == 'd') {
        this.position.x = this.$refs.character.position.x += speed;
      } else if (event.key == 'e') {
        this.position.y = this.$refs.character.position.y += speed;
      } else if (event.key == 'r') {
        this.position.y = this.$refs.character.position.y -= speed;
      }
    });
  },
  methods: {
    async loadCryptos() {
      try {
        await this.$store.dispatch('fetchCryptos');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
    },
    onPointerOver(event) {
      event.component.mesh.material.color.set(event.over ? 0xffcc00 : this.color);
    },
  },
};
</script>
