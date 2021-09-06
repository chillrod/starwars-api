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
  background-position: 0 90%
  background-size: 100%

  @media(min-width: 776px)
    background-size: 100%
    background-position: 0 10%

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, sans-serif
  line-height: 1.3
</style>
