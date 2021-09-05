<template>
  <button class="load__action--container">
    <p class="load__action--container-text">{{ isCharacterLoading ? "Loading" : "Load more" }}</p>
    <i
      class="load__action--container-icon"
      :class="!isCharacterLoading ? 'pi pi-spin pi-spinner' : ''"
    />
  </button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const isCharacterLoading = computed(() => store.getters.isCharacterLoading);

    return {
      isCharacterLoading
    };
  }
};
</script>

<style lang="sass">
.load__action--container
  background: none
  border: none
  box-shadow: $sprimary
  padding: 1em 3em

  display: flex
  align-items: center

.load__action--container-text
  color: $white
  font-size: 1.5rem
  font-weight: $regular

.load__action--container-icon
  font-size: 1.5rem
  color: $white
  margin: 0 1em
</style>
