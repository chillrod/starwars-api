<template>
  <div class="single__character--data__container">
    <div class="single__character--data__image">
      <img :src="getCharacter.image.image" :alt="getCharacter.image.alt" />
    </div>
    <h2 class="single__character--data__name">
      {{ getCharacter.name }}
    </h2>
    <span class="single__character--data__title">
      About the character
    </span>
    <ul class="single__character--data__about">
      <li class="single__character--data__info"><span>Gender:</span> {{ getCharacter.gender }}</li>
      <li class="single__character--data__info">
        <span>Hair color:</span> {{ getCharacter.hair }}
      </li>
      <li class="single__character--data__info">
        <span>Skin color:</span> {{ getCharacter.skin }}
      </li>
      <li class="single__character--data__info">
        <span>Skin color:</span> {{ getCharacter.height }}
      </li>
    </ul>
    <div class="single__character--data__general">
      <span class="single__character--data__title">
        General Information
      </span>
      <p class="single__character--data__starships">Starships: {{ getCharacter.starships }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const getCharacter = computed(() => store.getters.getCharacter);

    return {
      getCharacter
    };
  }
};
</script>

<style lang="sass" scoped>
.single__character--data__container
  display: grid
  grid-template-columns: 2fr 2fr
  grid-template-rows: .3fr .1fr .5fr
  overflow-x: hidden

  @media (min-width: 776px)
    width: 600px
    padding-bottom: none

.single__character--data__image
  grid-row: 1 / -1
  object-fit: cover
  margin-left: .6em

  clip-path: circle(250px at 250px 150px)

  @media (min-width: 776px)
    clip-path: circle(500px at 520px 120px)

  img
    width: 100%
    height: 200%
    object-position: top center
    object-fit: cover

.single__character--data__name
  font-size: 2.5rem
  margin: .5em 0
  color: $gradientColor1
  font-weight: $regular

  grid-row: 1
  grid-column: 1

.single__character--data__about
  grid-row: 3
  grid-column: 1

.single__character--data__title
  margin: 1em 0
  font-size: 1rem
  color: $lightBlack
  opacity: .5

.single__character--data__info
  line-height: 1.4
  text-transform: capitalize

  span
    color: $lightBlack
    text-transform: none

.single__character--data__general
  margin-top: 1em

.single__character--data__starships
  margin: 1em 0
</style>
