import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroesArray: [],
  },
  mutations: {
    pushHeroesArray(state, heroesAction) {
      state.heroesArray = heroesAction;
    },
  },
  actions: {
    getHeroesArray: async ({ commit }) => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const heroesArray = await data.json();
        commit("pushHeroesArray", heroesArray);
      } catch (error) {
        alert(error);
      }
    },
  },
  modules: {},
});
