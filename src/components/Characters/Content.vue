<template>
  <article v-for="(character, id) in characters" :key="id">
    <CharacterData
      :name="character.name"
      :gender="character.gender"
      :starships="
        character.starships.length
          ? filterStarships(character.name)
          : 'Oops! This character doest not have any starships 😢'
      "
      :hair="character.hair_color"
      :skin="character.skin_color"
      :height="character.height"
    />
  </article>
</template>

<script>
import { computed, watchEffect, ref } from "vue";
import { useStore } from "vuex";

import CharacterData from "./CharacterData.vue";

export default {
  components: {
    CharacterData
  },
  setup() {
    const store = useStore();

    const characters = ref([]);
    const starships = ref([]);

    const getCharacters = computed(() => store.getters.getCharacters);
    const { value: characterValues } = getCharacters;

    const filterStarships = characterName => {
      const pushStarships = starships.value.filter(
        starship => starship.characterName === characterName
      );

      return pushStarships;
    };

    watchEffect(async () => {
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
    });

    return { characters, filterStarships };
  }
};
</script>

<style lang="sass" scoped></style>
