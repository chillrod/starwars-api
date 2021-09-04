<template>
  <section class="home__container">
    <h1 class="home__container--ctatext">
      Your favorite<br />
      Star Wars characters<br />
      in one place
    </h1>
    <div class="home__container--ctabtn">
      <Button buttonText="Get Started" buttonIcon="pi pi-angle-right" />
    </div>
  </section>
  <section class="home__background" />
</template>

<script>
import Button from "@/components/shared-components/UI/Button.vue";

export default {
  components: {
    Button
  },
  setup() {}
};
</script>

<style lang="sass" scoped>
.home__container
  margin: 0 auto
  padding-bottom: 2em

  display: grid
  grid-template-rows: 1fr .2fr
  justify-content: center

  @media (max-width: 776px)
    padding: 0 1em

  .home__container--ctatext
    color: $white
    text-align: center
    font-size: 3.5rem
    font-weight: $regular

    @media (max-width: 776px)
      font-size: 2.3rem

  .home__container--ctabtn
    margin: 2em
    justify-self: center

.home__background

  height: 50vh
  background-image: url('../../shared/assets/backgrounds/death-star.svg')
  background-repeat: no-repeat
  background-size: 100%
  background-position: top center

  @media(min-width: 776px)
    padding-bottom: 25em
    background-size: 70%
    background-position: top center
</style>
