<template>
  <button class="load__action--container">
    <p class="load__action--container-text">{{ isCharacterLoading ? "Loading" : "Load more" }}</p>
    <i
      class="load__action--container-icon"
      :class="isCharacterLoading ? 'pi pi-spin pi-spinner' : ''"
    />
  </button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const isCharacterLoading = computed(() => store.getters.getCharactersLoading);

    return {
      isCharacterLoading
    };
  }
};
</script>

<style lang="sass">
.load__action--container
  cursor: pointer
  transition: 250ms ease-in-out

  background: none
  border: none
  box-shadow: $sprimary

  margin-top: 5em
  padding: 1em 3em

  display: flex
  align-items: center

  &:hover
    transform: translateY(-5%)
    background: $gradientColor1

.load__action--container-text
  color: $white
  font-size: 1.5rem
  font-weight: $regular

.load__action--container-icon
  font-size: 1.5rem
  color: $white
  margin: 0 1em
</style>
