<template>
  <h1 v-html="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup() {}
};
</script>

<style lang="sass" scoped>
h1
    color: $white
    font-size: 4.5rem
    font-weight: $semibold
    text-align: center

    backdrop-filter: blur( 10px )
    -webkit-backdrop-filter: blur( 20px )
    border-radius: $bsm
    padding: .5em
    margin-bottom: .5em

    @media (max-width: 776px)
        font-size: 2.2rem
</style>

<style scoped>
h1 {
  animation: slidein;
  animation-duration: 2550ms;
}
@keyframes slidein {
  from {
    opacity: 0.7;
    transform: translateY(-5%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
