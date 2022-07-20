<template>
  <AmbientLight color="#ffffff" :intensity="10" cast-shadow />
  <PointLight color="#afddff" :intensity="0.5" cast-shadow />
</template>

<script>
import { AmbientLight, PointLight } from 'troisjs';

export default {
  components: { AmbientLight, PointLight },
};
</script>
