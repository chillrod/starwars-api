<template>
  <div id="app__container">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/shared-components/Navbar/Navbar.vue";
import Footer from "@/components/shared-components/Footer/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="sass">
#app__container

  background-image: url('../shared/assets/backgrounds/stars.svg')
  background-repeat: repeat-x
  background-position: 0 90%
  background-size: 120%

  @media(min-width: 776px)
    background-size: 90%
    background-position: 0 150%

  font-family: 'Roboto Mono'
  line-height: 1.3

  button, p, h1, h2
    font-family: 'Roboto Mono'
    line-height: 1.5
</style>
