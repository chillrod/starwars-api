<template>
  <div class="character__data--container">
    <div class="character__data--image">
      <img :src="image.image" :alt="image.alt" />
    </div>
    <h2 class="character__data--name">
      {{ name }}
    </h2>
    <span class="character__data--gender"> Gender: {{ gender }} </span>
    <p class="character__data--starships">Starships: {{ starships }}</p>
    <div class="character__data--actions">
      <button class="character__actions" @click="setShowCharacter">
        See more
        <i class="pi pi-external-link character__actions-icon"></i>
      </button>
      <button class="character__actions">
        Like
        <i class="pi pi-star-o character__actions-icon"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    starships: {
      type: String,
      required: true
    },
    hair: {
      type: String,
      required: true
    },
    skin: {
      type: String,
      required: true
    },
    height: {
      type: String
    }
  },
  setup(props) {
    const store = useStore();

    const setShowCharacter = async () => {
      await store.dispatch("setCharacterDetail", {
        name: props.name,
        image: props.image,
        starships: props.starships,
        gender: props.gender,
        hair: props.hair,
        skin: props.skin,
        height: props.height
      });

      await store.dispatch("setCharacterModal", true);
    };

    return { setShowCharacter };
  }
};
</script>

<style lang="sass" scoped>
.character__data--container
  border-radius: $bsm
  transition: 250ms ease-in-out
  margin: 1.5em 1em

  background: rgba( $white, 0.85 )
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )
  backdrop-filter: blur( 4px )
  -webkit-backdrop-filter: blur( 4px )

  display: grid
  grid-template-columns: 1fr 3.5fr

  grid-template-rows: 1fr .5fr 1fr 1fr

  &:hover
    transform: translateY(-.8%)

.character__data--image
  grid-row: 1 / -1
  width: 90px
  background: $gradientColor1
  clip-path: circle(120px at -30px 115px)
  padding-right: .5em

  img
    border-radius: $bsm
    object-fit: cover
    height: 100%
    width: 100%
    object-position: center

.character__data--name
  font-size: 1.8rem
  padding-top: 1em
  color: $gradientColor1

.character__data--gender
  font-size: .9rem
  color: $lightBlack
  margin-bottom: 1em
  text-transform: captalize

.character__data--starships
    font-size: 1rem
    grid-row: 3
    display: -webkit-box
    text-overflow: ellipsis
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    overflow: hidden
    width: 95%
    max-height: 40px

.character__data--actions
  grid-row: 4
  align-self: end
  margin-bottom: 5%

  display: flex
  width: 95%

.character__actions
  cursor: pointer
  border: none

  padding: .3em
  margin-right: 1em
  display: grid
  grid-template-columns: 1fr .5fr

  font-size: 1.2rem
  color: $gradientColor1
  background: none

  &:hover
    transform: scale(1.1)

.character__actions-icon
  margin-left: .5em
</style>
