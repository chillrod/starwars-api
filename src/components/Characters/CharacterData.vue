<template>
  <div class="character__data--container" v-if="image.alt !== 'Fallback image'">
    <div class="character__data--image">
      <img :src="image.image" :alt="image.alt" />
    </div>
    <h2 class="character__data--name">
      {{ fallBackIfLoading(name) }}
    </h2>
    <span class="character__data--gender"> Gender: {{ fallBackIfLoading(gender) }} </span>
    <p class="character__data--starships">Starships: {{ fallBackIfLoading(starships) }}</p>
    <div class="character__data--actions">
      <button class="character__actions" @click="setShowCharacter">
        See more
        <i class="pi pi-external-link character__actions-icon"></i>
      </button>
    </div>
  </div>
  <div v-else>
    <CharacterSkeleton />
  </div>
</template>

<script>
import { useStore } from "vuex";

import CharacterSkeleton from "@/components/shared-components/UI/CharacterSkeleton.vue";

export default {
  components: { CharacterSkeleton },
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

    const fallBackIfLoading = entity => {
      if (!entity.length) return "Loading";

      return entity;
    };

    return { setShowCharacter, fallBackIfLoading };
  }
};
</script>

<style lang="sass" scoped>
.character__data--container
  border-radius: $bsm
  transition: 250ms ease-in-out
  margin: 1.5em 1em
  animation: $animation

  background: rgba( $white, 0.85 )
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )
  backdrop-filter: blur( 4px )
  -webkit-backdrop-filter: blur( 4px )

  display: grid
  grid-template-columns: 2fr 3.5fr
  grid-template-rows: 1fr .5fr 1fr 1fr

  &:hover
    transform: translateY(-.8%)

.character__data--image
  grid-row: 1 / -1
  background: $gradientColor1
  clip-path: circle(150px at -25px 115px)
  padding-right: .9em
  width: max-content

  @media (min-width: 776px)
    clip-path: circle(210px at -75px 115px)

  img
    border-radius: $bsm
    object-fit: cover
    height: 100%
    width: 115%
    object-position: top left

.character__data--name
  font-size: 1.5rem
  padding-top: .8em
  color: $gradientColor1
  display: -webkit-box
  text-overflow: ellipsis
  -webkit-line-clamp: 1
  -webkit-box-orient: vertical
  overflow: hidden

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
    height: 50px

.character__data--actions
  grid-row: 4
  align-self: end
  margin-bottom: 5%

  display: flex
  width: 95%

.character__actions
  cursor: pointer
  border: none

  display: flex
  align-items: center

  font-size: 1.2rem
  color: $gradientColor1
  background: none

  &:hover
    transform: scale(1.1)

.character__actions-icon
  margin-left: .5em
</style>

<style scoped>
.character__data--container {
  animation: slidein;
  animation-duration: 500ms;
}
@keyframes slidein {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
