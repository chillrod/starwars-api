<template>
  <CharacterData />
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";

import CharacterData from "./CharacterData.vue";

export default {
  components: {
    CharacterData
  },
  setup() {
    const store = useStore();
    const currentCharacters = ref();
    const currentStarships = ref();

    watchEffect(async () => {
      const getCharacters = computed(() => store.getters.getCharacters);
      const { value: getCharactersValue } = getCharacters;

      getCharactersValue.forEach(async character => {
        await store.dispatch("handleStarships", {
          characterName: character.name,
          starships: character.starships
        });
        await store.dispatch("handleCharactersImages", {
          name: character.name
        });
      });

      const getCharacterStarships = computed(() => store.getters.getCharacterStarships);
      const { value: getCharacterStarshipsValue } = getCharacterStarships;

      const joinedCharactersAndStarships = [getCharactersValue, getCharacterStarshipsValue];

      const [characters, starships] = joinedCharactersAndStarships;

      currentCharacters.value = characters;
      currentStarships.value = starships;
    });

    return {
      currentCharacters,
      currentStarships
    };
  }
};
</script>

<style lang="sass" scoped></style>
