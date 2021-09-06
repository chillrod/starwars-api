<template>
  <PageTitle class="character__content--ctatext" :text="'Hello little Jedi'" />
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
  <section class="character__content--load-more" ref="loadButton">
    <Load @click="fetchNextCharacters" />
  </section>
  <Dialog v-model:visible="characterDetail" @hide="resetCharacter" @show="hideBackgroundContent">
    <CharacterModal />
  </Dialog>
</template>

<script>
import { computed, watchEffect, ref } from "vue";
import { useStore } from "vuex";

import Dialog from "primevue/dialog";

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
    const loadButton = ref(null);
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
            "data:image/png;base64,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"
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

      if (characters.value.length !== totalCharacters) {
        await store.dispatch("handleCharacters", { page: currentPage + 1 });
      }
    };

    watchEffect(async () => {
      const getStarships = computed(() => store.getters.getCharacterStarships);
      const { value: starshipValues } = getStarships;

      const getImages = computed(() => store.getters.getCharacterImages);
      const { value: imageValues } = getImages;

      const getShowCharacter = computed(() => store.getters.getShowCharacter);
      const { value: showCharacter } = getShowCharacter;

      characterValues.forEach(async character => {
        await store.dispatch("handleStarships", {
          characterName: character.name,
          starships: character.starships
        });

        await store.dispatch("handleCharactersImages", {
          name: character.name
        });
      });

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
      loadButton,
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
