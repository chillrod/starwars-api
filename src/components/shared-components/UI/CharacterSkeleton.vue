<template>
  <div class="character__skeleton--container">
    <Skeleton borderRadius="15" width="500px" height="200px" style="margin-bottom: 1em" />
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
    margin-top: 1em
</style>
