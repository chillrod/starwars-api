<template>
  <PageTitle class="character__content--ctatext" :text="'Hello little Sith'" />
  <section
    v-if="characters"
    class="character__content-container"
    :class="hideBackground ? 'character__content-hide' : ''"
  >
    <article class="character__content--data" v-for="(character, id) in characters" :key="id">
      <CharacterData
        :name="character.name"
        :image="filterImages(character.name)"
        :gender="parseGender(character.gender)"
        :starships="
          character.starships.length
            ? filterStarships(character.name)
            : 'Oops! This character does not have any starships 😢'
        "
        :hair="character.hair_color"
        :skin="character.skin_color"
        :height="character.height"
      />
    </article>
  </section>
  <section class="character__content--load-more">
    <Load @click="fetchNextCharacters" />
  </section>
  <Dialog v-model:visible="characterDetail" @hide="resetCharacter" @show="hideBackgroundContent">
    <CharacterModal />
  </Dialog>
</template>

<script>
import { computed, watchEffect, ref } from "vue";
import { useStore } from "vuex";
import { createToast } from "mosha-vue-toastify";

import Dialog from "primevue/dialog";

import toastInfo from "@/utils/ToastMessages/Info";
import toastErrors from "@/utils/ToastMessages/Error";

import CharacterData from "./CharacterData.vue";
import CharacterModal from "./CharacterModal.vue";
import Load from "@/components/shared-components/UI/Load.vue";
import PageTitle from "@/components/shared-components/UI/PageTitle.vue";

export default {
  components: {
    CharacterData,
    CharacterModal,
    Load,
    Dialog,
    PageTitle
  },
  setup() {
    const store = useStore();

    const characters = ref([]);
    const starships = ref([]);
    const images = ref([]);
    const contentLoad = ref(false);
    const characterDetail = ref(false);
    const hideBackground = ref(false);

    const getCharacters = computed(() => store.getters.getCharacters);

    const getCurrentPage = computed(() => store.getters.getCurrentPage);
    const getTotalCharacters = computed(() => store.getters.getTotalCharacters);

    const { value: characterValues } = getCharacters;

    const hideBackgroundContent = () => {
      hideBackground.value = true;
    };

    const resetCharacter = async () => {
      hideBackground.value = false;
      await store.dispatch("setCharacterDetail", {});
      await store.dispatch("setCharacterModal", false);
    };

    const filterStarships = characterName => {
      const pushStarships = starships.value.filter(
        starship => starship.characterName === characterName
      );

      const mapStarships = pushStarships.map(starship => starship.starship);

      const joinStarships = mapStarships.join(", ");

      return joinStarships;
    };

    const filterImages = characterName => {
      const findImages = images.value.find(image => image.characterName === characterName);
      const fallBackImage = {
        image: {
          alt: "Fallback image",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
        }
      };

      const {
        image: { image, alt }
      } = findImages || fallBackImage;

      return { image, alt };
    };

    const parseGender = gender => {
      if (gender === "n/a") return "No gender defined";

      return gender;
    };

    const fetchNextCharacters = async () => {
      const { value: currentPage } = getCurrentPage;
      const { value: totalCharacters } = getTotalCharacters;

      if (characters.value.length === totalCharacters) {
        createToast(toastInfo("Characters"), {
          hideProgressBar: true,
          type: "info",
          position: "top-center"
        });
        return;
      }

      try {
        await store.dispatch("handleCharacters", { page: currentPage + 1 });
      } catch (err) {
        createToast(toastErrors("Characters"), {
          hideProgressBar: true,
          type: "danger",
          position: "top-center"
        });
      }
    };

    watchEffect(async () => {
      const getStarships = computed(() => store.getters.getCharacterStarships);
      const { value: starshipValues } = getStarships;

      const getImages = computed(() => store.getters.getCharacterImages);
      const { value: imageValues } = getImages;

      const getShowCharacter = computed(() => store.getters.getShowCharacter);
      const { value: showCharacter } = getShowCharacter;

      characters.value = characterValues;
      starships.value = starshipValues;
      images.value = imageValues;
      characterDetail.value = showCharacter;
    });

    return {
      characters,
      filterStarships,
      parseGender,
      fetchNextCharacters,
      filterImages,
      contentLoad,
      characterDetail,
      resetCharacter,
      hideBackgroundContent,
      hideBackground
    };
  }
};
</script>

<style lang="sass" scoped>
.character__content-container
  display: flex
  flex-wrap: wrap
  justify-content: center
  transition: 250ms ease-in-out

  max-width: 900px
  margin: 0 auto
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )
  backdrop-filter: blur( 50px )
  -webkit-backdrop-filter: blur( 20px )
  border-radius: $bsm

  &.character__content-hide
    opacity: .3

.character__content--data
  width: 100%
  max-width: 450px

.character__content--load-more
  display: grid
  justify-content: center
  margin-top: 1em
</style>
