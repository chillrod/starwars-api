<template>
  <div class="single__character--data__container">
    <span class="single__character--data__title">
      You are viewing
    </span>
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
    <span class="single__character--data__title">
      General Information
    </span>
    <div class="single__character--data__general">
      <p class="single__character--data__starships">
        <span>Starships:</span> {{ getCharacter.starships }}
      </p>
    </div>
    <div class="single__character--data__image">
      <img :src="getCharacter.image.image" :alt="getCharacter.image.alt" />
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
  grid-template-columns: 2fr 1.5fr
  grid-template-rows: .3fr .5fr .3fr .5fr .3fr 1fr

  margin-top: .5em
  max-width: 650px
  padding: 1.5em

  transition: 250ms ease-in-out

  background: rgba( 255, 255, 255, 0.25 )
  backdrop-filter: blur( 4px )
  -webkit-backdrop-filter: blur( 4px )
  border-radius: $bsm
  border: 1px solid rgba( 255, 255, 255, 0.18 )
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px

.single__character--data__title
  margin: .5em 0
  opacity: .9
  font-size: 1.1rem
  grid-column: 1

.single__character--data__name
  grid-column: 1
  margin-bottom: 1em

  font-size: 2.5rem
  color: $gradientColor1
  font-weight: $regular

.single__character--data__about
  grid-column: 1
  grid-row: 4

.single__character--data__info
  margin: .5em 0
  text-transform: capitalize
  span
    font-weight: $medium
.single__character--data__general
  grid-column: 1
  margin: .5em 0

.single__character--data__starships
  span
    font-weight: $medium
.single__character--data__image
  grid-column: 2
  grid-row: 1 / -1
  clip-path: circle(350px at 350px 115px)
  margin-left: 1em
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px
  @media (min-width: 776px)
    margin-left: 0
    clip-path: circle(450px at 500px 115px)

  img
    width: 100%
    height: 100%
    object-fit: cover
</style>
