<template>
  <nav class="nav__container">
    <img
      @click="navigate('Home')"
      class="nav__container--logo"
      src="@/shared/assets/stardata-logo.svg"
      alt="Star Data - Your favorite characters all in one place"
    />
    <router-link class="nav__container--link" to="/favorites">Your Favorites</router-link>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const navigate = route => {
      router.push({ name: route });
    };

    return { navigate };
  }
};
</script>

<style lang="sass">
.nav__container
  display: grid
  padding: 0 2em

  margin-top: 2em
  margin-bottom: 4em

  @media(min-width: 776px)
      display: flex
      align-items: center
      justify-content: space-between

.nav__container--logo
  justify-self: center

.nav__container--link
  color: $white
  text-decoration: none
</style>
