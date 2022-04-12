import { createStore } from "vuex";

export default createStore({
  state: {
    signingIn: false,
  },
  getters: {
    SIGNING_IN: (state) => {
      return state.signingIn;
    },
  },
  mutations: {
    SET_SIGNING_IN: (state, payload) => {
      state.signingIn = payload;
    },
  },
  actions: {
    GET_SIGNING_IN: async (context, payload) => {
      context.commit("SET_SIGNING_IN", payload);
    },
  },
  modules: {},
});
