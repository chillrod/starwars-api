<template>
  <button type="button" class="ui__button" :disabled="disabled">
    <span class="ui__button--text">{{ disabled ? "Loading... " : buttonText }}</span>
    <i
      class="ui__button-icon"
      v-if="buttonIcon"
      :class="disabled ? 'pi pi-spin pi-spinner' : buttonIcon"
    ></i>
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
    },
    disabled: {
      type: Boolean,
      default: false
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

  background: $red
  color: $white
  border-radius: $bsm
  box-shadow: $sprimary

  padding: .8em 3em

  &:hover
    transform: translateY(-5%)

  &:disabled
    background: $disabledRed
    cursor: wait

  .ui__button--text
    margin-right: 1em
    font-size: 1.2rem
    font-weight: $regular

  .ui__button-icon
    font-size: 1.5rem
</style>
