<template>
  <div class=" bg-teal-500 py-6">
    <button class=" bg-black text-white" @click="getHeroesArray">
      Get Data
    </button>
    {{ heroesArray }}
    <ul>
      <li v-for="item of heroesArray" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",

  computed: {
    ...mapState(["heroesArray"]),
  },

  methods: {
    ...mapMutations(["pushHeroesArray"]),
    ...mapActions(["getHeroesArray"]),
  },

  // mounted() {
  //   this.getHeroesArray();
  // },
};
</script>
