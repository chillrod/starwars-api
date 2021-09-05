<template>
  <section class="home__container">
    <h1 class="home__container--ctatext">
      Your favorite<br />
      Star Wars characters<br />
      in one place
    </h1>
    <div class="home__container--ctabtn">
      <Button
        :disabled="getCharactersLoading"
        buttonText="Get Started"
        buttonIcon="pi pi-angle-right"
        @click="handleCharactersDataFetch"
      />
    </div>
  </section>
  <section class="home__background" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { createToast } from "mosha-vue-toastify";

import toastErrors from "@/utils/ToastMessages/Error";
import Button from "@/components/shared-components/UI/Button.vue";

export default {
  components: {
    Button
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const getCharactersLoading = computed(() => store.getters.getCharactersLoading);

    const handleCharactersDataFetch = async () => {
      const initialPage = 1;

      try {
        await store.dispatch("handleCharacters", { page: initialPage });
        router.push({ name: "Characters" });
      } catch (err) {
        createToast(toastErrors("Characters"), {
          hideProgressBar: true,
          type: "danger",
          position: "top-center"
        });
      }
    };

    return {
      handleCharactersDataFetch,
      getCharactersLoading
    };
  }
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

    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )
    backdrop-filter: blur( 50px )
    -webkit-backdrop-filter: blur( 20px )
    border-radius: $bsm
    padding: .5em

    @media (max-width: 776px)
      font-size: 2.3rem

  .home__container--ctabtn
    margin: 2em
    justify-self: center

.home__background

  height: 80vh
  background-image: url('../../shared/assets/backgrounds/death-star.svg')
  background-repeat: no-repeat
  background-size: 100%
  background-position: top center

  @media(min-width: 776px)
    background-size: 100%
    background-position: 50% 20%
</style>
