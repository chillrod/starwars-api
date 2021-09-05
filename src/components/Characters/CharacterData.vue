<template>
  <p>{{ data }}</p>
  <button @click="loadMore">click</button>
  <input type="text" v-model="searchQuery" />
</template>

<script>
import { watchEffect, ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    data: {
      type: Array,
      required: false
    }
  },
  setup() {
    const store = useStore();
    const searchQuery = ref("");

    const loadMore = async () => {
      await store.dispatch("handleCharacters", { page: 2 });
    };

    watchEffect(async () => {
      if (searchQuery.value === "") {
        await store.dispatch("handleCharacters", { page: 1, search: "Reset Search" });
      }

      if (searchQuery.value) {
        await store.dispatch("handleCharacters", { search: searchQuery.value });
      }
    });

    return {
      loadMore,
      searchQuery
    };
  }
};
</script>

<style lang="sass" scoped></style>
