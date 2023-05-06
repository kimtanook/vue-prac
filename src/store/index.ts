import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1,
  },
  getters: {
    getTwoPowerCounter(state) {
      return state.count ** 2;
    },
  },
  mutations: {
    setCounter(state, value) {
      state.count = value;
    },
  },
  actions: {},
  modules: {},
});
