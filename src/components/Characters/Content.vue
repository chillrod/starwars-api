<template>
  <h1 class="character__content--ctatext">
    May the 4th be with you
  </h1>
  <section class="character__content-container">
    <article class="character__content--data" v-for="(character, id) in characters" :key="id">
      <CharacterData
        :name="character.name"
        :image="character.characterImg"
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
</template>

<script>
import { computed, watchEffect, ref } from "vue";
import { useStore } from "vuex";

import CharacterData from "./CharacterData.vue";
import Load from "@/components/shared-components/UI/Load.vue";

export default {
  components: {
    CharacterData,
    Load
  },
  setup() {
    const store = useStore();

    const characters = ref([]);
    const starships = ref([]);
    const loadButton = ref(null);

    const getCharacters = computed(() => store.getters.getCharacters);

    const getCurrentPage = computed(() => store.getters.getCurrentPage);
    const getTotalCharacters = computed(() => store.getters.getTotalCharacters);

    const { value: characterValues } = getCharacters;

    const filterStarships = characterName => {
      const pushStarships = starships.value.filter(
        starship => starship.characterName === characterName
      );

      const mapStarships = pushStarships.map(starship => starship.starship);

      const joinStarships = mapStarships.join(", ");

      return joinStarships;
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
      console.log(loadButton);
      const getStarships = computed(() => store.getters.getCharacterStarships);
      const { value: starshipValues } = getStarships;

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

      const loadMoreObserverConfig = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      };

      function observeFn(entries) {
        console.log(...entries);
      }

      const observer = new IntersectionObserver(observeFn, loadMoreObserverConfig);

      observer.observe(loadButton.value);
    });

    return { characters, filterStarships, parseGender, fetchNextCharacters };
  }
};
</script>

<style lang="sass" scoped>
.character__content--ctatext
  color: $white
  text-align: center
  font-size: 3.5rem
  font-weight: $regular

  @media (max-width: 776px)
    font-size: 2.3rem

.character__content-container
  display: flex
  flex-wrap: wrap
  flex-basis: fit-content
  justify-content: center

.character__content--data
  width: 500px
.character__content--load-more
  display: grid
  justify-content: center
  margin-top: 1em
</style>
