<template>
  <Mesh ref="character" @click="loadCryptos" :position="{ x: posX, y: posY, z: posZ }" receive-shadow>
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
      posX: 0,
      posY: 5,
      posZ: 0,
    };
  },
  props: {
    posiX: {
      type: Number,
      default: 0,
    },
    posiY: {
      type: Number,
      default: 15,
    },
    posiZ: {
      type: Number,
      default: 0,
    },
    radius: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: 'yellow',
    },
    error: null,
  },
  mounted() {
    const speed = 0.2;

    window.addEventListener('keypress', (event) => {
      // Refactor using props instead
      if (event.key == 'w') {
        this.posZ = this.$refs.character.position.z -= speed;
      } else if (event.key == 'a') {
        this.posX = this.$refs.character.position.x -= speed;
      } else if (event.key == 's') {
        this.posZ = this.$refs.character.position.z += speed;
      } else if (event.key == 'd') {
        this.posX = this.$refs.character.position.x += speed;
      } else if (event.key == 'e') {
        this.posY = this.$refs.character.position.y += speed;
      } else if (event.key == 'r') {
        this.posY = this.$refs.character.position.y -= speed;
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
  },
};
</script>
