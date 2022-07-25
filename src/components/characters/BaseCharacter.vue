<template>
  <Mesh
    ref="character"
    @click="loadCryptos"
    :position="position"
    :receive-shadow="true"
    @pointerOver="onPointerOver"
    @created="initIMesh"
  >
    <SphereGeometry :radius="radius" />
    <BasicMaterial :color="color" />
  </Mesh>
</template>

<script>
import { Mesh, SphereGeometry, BasicMaterial } from 'troisjs';
import { Object3D, Vector3 } from 'three';

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
      default: { x: 0, y: 15, z: 0 },
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
    f1.addInput(this.imesh.userData.body, 'position');
    // ***** PANE *****

    const speed = 0.2;

    window.addEventListener('keypress', (event) => {
      if (event.key == 'w') {
        this.imesh.userData.body.position.z = this.position.z -= speed;
      } else if (event.key == 'a') {
        this.imesh.userData.body.position.x = this.position.x -= speed;
      } else if (event.key == 's') {
        this.imesh.userData.body.position.z = this.position.z += speed;
      } else if (event.key == 'd') {
        this.imesh.userData.body.position.x = this.position.x += speed;
      } else if (event.key == 'e') {
        this.imesh.userData.body.position.y = this.position.y += speed;
      } else if (event.key == 'r') {
        this.imesh.userData.body.position.y = this.position.y -= speed;
      }
    });

    this.imesh.userData.body.addEventListener('collide', (e) => {
      /**
       * IDS
       * 105 --- BASE ROOM
       * 523 --- FLOOR
       * 424 --- BROWN ROOM
       * 401 --- RED ROOM
       */
      console.log(e.contact);

      if (e.contact.id === 105) {
        console.log('Contact with base room');
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
    initIMesh(imesh) {
      this.imesh = imesh;

      let mass = 1;

      imesh.userData.mass = mass;
      imesh.userData.damping = 0.7;
    },
  },
};
</script>
