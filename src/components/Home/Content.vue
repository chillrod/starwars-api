<template>
  <section class="home__container">
    <PageTitle
      class="home__container--ctatext"
      :text="'Join the Dark Side<br /> in this amazing<br />Star Wars database'"
    />
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
import PageTitle from "@/components/shared-components/UI/PageTitle.vue";

export default {
  components: {
    Button,
    PageTitle
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const getCharactersLoading = computed(() => store.getters.getCharactersLoading);
    const getCharacters = computed(() => store.getters.getCharacters);

    const handleCharactersDataFetch = async () => {
      const initialPage = 1;

      try {
        if (!getCharacters.value.length) {
          await store.dispatch("handleCharacters", { page: initialPage });
        }
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
  display: grid
  grid-template-rows: 1fr .2fr
  justify-content: center

  @media (max-width: 776px)
    padding: 0 1em

  .home__container--ctabtn
    justify-self: center

.home__background
  height: 100vh
  background-image: url('../../shared/assets/backgrounds/death-star.svg')
  background-repeat: no-repeat
  background-size: 100%
  background-position: top center

  @media(min-width: 776px)
    background-size: 50%
    background-position: 50% 10%
</style>
