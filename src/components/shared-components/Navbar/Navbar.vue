<template>
  <nav class="nav__container">
    <img
      @click="navigate('Home')"
      class="nav__container--logo"
      src="@/shared/assets/stardata-logo.svg"
      alt="Star Data - Your favorite characters all in one place"
    />
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
  padding: 1em 2em
  margin-bottom: 4em

  background: $gradientColor1

  display: flex
  align-items: center
  justify-content: center

  position: sticky
  z-index: 10
  top: 0

.nav__container--logo
  cursor: pointer
  transition: 250ms ease-in-out

  &:hover
    transform: scale(1.1)

.nav__container--link
  color: $white
  text-decoration: none

  &:hover
    text-decoration: underline
</style>
