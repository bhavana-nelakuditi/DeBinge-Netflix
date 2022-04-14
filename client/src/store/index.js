import { createStore } from "vuex";

export default createStore({
  state: {
    signingIn: false,
    loginType: "",
  },
  getters: {
    SIGNING_IN: (state) => {
      return state.signingIn;
    },
    LOGIN_TYPE: (state) => {
      return state.loginType;
    },
  },
  mutations: {
    SET_SIGNING_IN: (state, payload) => {
      state.signingIn = payload;
    },
    SET_LOGIN_TYPE: (state, payload) => {
      state.loginType = payload;
    },
  },
  actions: {
    GET_SIGNING_IN: async (context, payload) => {
      context.commit("SET_SIGNING_IN", payload);
    },
    GET_LOGIN_TYPE: async (context, payload) => {
      context.commit("SET_LOGIN_TYPE", payload);
    },
  },
  modules: {},
});
