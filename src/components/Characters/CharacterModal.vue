<template>
  <div class="single__character--data__container">
    <div class="single__character--data__image">
      <img :src="getCharacter.image.image" :alt="getCharacter.image.alt" />
    </div>
    <h2 class="single__character--data__name">
      {{ getCharacter.name }}
    </h2>
    <ul class="single__character--data__about">
      <span class="single__character--data__title">
        About the character
      </span>
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
      <p class="single__character--data__starships">{{ getCharacter.starships }}</p>
    </div>
    <div class="single__character--data__actions">
      <button class="single__character--action">
        Like
        <i class="pi pi-star-o single__character--icon"></i>
      </button>
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
  grid-template-columns: 2.5fr 2fr
  grid-template-rows: .3fr .3fr 1fr

  @media (min-width: 776px)
    width: 500px

.single__character--data__image
  grid-column: 2
  grid-row: 1 / -1
  background: $black
  clip-path: circle(800px at 800px 190px)
  width: max-content

  img
    height: 160%
    object-fit: cover
    object-postion: top center

.single__character--data__name
    font-size: 2.5rem
    color: $gradientColor1
    font-weight: $regular

    grid-row: 1
    grid-column: 1

.single__character--data__about
  grid-row: 3
  grid-column: 1
  margin-top: 2em

.single__character--data__title
  font-size: 1.1rem
  color: $lightBlack
  opacity: .8

.single__character--data__info
  margin: 1em 0
  text-transform: capitalize

  span
    color: $lightBlack
    text-transform: none

.single__character--data__actions
    margin: 1em 0
    grid-row: 2
    grid-column: 1
    align-self: end
    display: flex
    justify-content: space-between

.single__character--data__general
  margin-top: 1em

.single__character--data__starships
  margin: 1em 0

.single__character--action
  cursor: pointer
  border: none

  padding: .3em
  display: grid
  grid-template-columns: 1fr .5fr

  font-size: 1.2rem
  color: $gradientColor1
  background: none

  &:hover
    transform: scale(1.1)

.single__character--icon
  margin-left: .5em
</style>
