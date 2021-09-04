<template>
  <button class="ui__button">
    <span class="ui__button--text">{{ buttonText }}</span>
    <i class="ui__button-icon" v-if="buttonIcon" :class="buttonIcon"></i>
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonIcon: {
      type: String,
      default: ""
    }
  },
  setup() {}
};
</script>

<style lang="sass" scoped>
.ui__button
  cursor: pointer
  border: none
  transition: 250ms ease-in-out

  display: flex
  align-items: center
  grid-template-columns: 1fr .5fr
  gap: 1em

  background: $red
  color: $white
  box-shadow: $sprimary

  padding: 1em 2em
  border-radius: $bsm

  &:hover
    transform: translateY(-5%)

  .ui__button--text
    font-size: 1.2rem
    font-weight: $regular

  .ui__button-icon
    font-size: 1.5rem
</style>
