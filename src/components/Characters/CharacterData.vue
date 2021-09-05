<template>
  <p>{{ name }}</p>
  <p>{{ gender }}</p>
  <p>{{ starships }}</p>
  <p>{{ hair }}</p>
  <p>{{ skin }}</p>
  <p>{{ height }}</p>
  <button @click="loadMore">click</button>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    starships: {
      type: Array,
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
  setup() {
    const store = useStore();
    const searchQuery = ref("");

    const loadMore = async () => {
      await store.dispatch("handleCharacters", { page: 2 });
    };

    return {
      loadMore,
      searchQuery
    };
  }
};
</script>

<style lang="sass" scoped>
p
  color: $white
</style>
