<template>
  <div class="character__skeleton--container">
    <Skeleton borderRadius="15" width="100%" height="200px" />
  </div>
</template>

<script>
import Skeleton from "primevue/skeleton";

export default {
  components: { Skeleton },
  setup() {}
};
</script>

<style lang="sass" scoped>
.character__skeleton--container
    display: grid
    place-items: center
    margin: 1em
</style>
