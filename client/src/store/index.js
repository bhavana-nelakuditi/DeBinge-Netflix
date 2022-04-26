import { createStore } from "vuex";

export default createStore({
  state: {
    signingIn: false,
    loginType: "",
    taskHolder: [
      { index: 0, task: "Finish HW2", due: "Due: 12PM, 04/26/2022" },
      { index: 1, task: "Work on Final Presentation", due: "Due: 10PM, 04/29/2022" },
    ]
  },
  getters: {
    SIGNING_IN: (state) => {
      return state.signingIn;
    },
    LOGIN_TYPE: (state) => {
      return state.loginType;
    },
    TASK_HOLDER: (state) => {
      return state.taskHolder;
    },
  },
  mutations: {
    SET_SIGNING_IN: (state, payload) => {
      state.signingIn = payload;
    },
    SET_LOGIN_TYPE: (state, payload) => {
      state.loginType = payload;
    },
    SET_TASK_HOLDER: (state, payload) => {
      state.taskHolder = payload;
    },
  },
  actions: {
    GET_SIGNING_IN: async (context, payload) => {
      context.commit("SET_SIGNING_IN", payload);
    },
    GET_LOGIN_TYPE: async (context, payload) => {
      context.commit("SET_LOGIN_TYPE", payload);
    },
    GET_TASK_HOLDER: async (context, payload) => {
      context.commit("SET_TASK_HOLDER", payload);
    },
  },
  modules: {},
});
