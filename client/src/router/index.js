import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/watchPattern",
    name: "watchPattern",
    // route level code-splitting
    // this generates a separate chunk (watchPattern.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "watchPattern" */ "../views/watchPatternView.vue"
      );
    },
  },
  {
    path: "/social",
    name: "social",
    // route level code-splitting
    // this generates a separate chunk (social.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "social" */ "../views/socialView.vue");
    },
  },
  {
    path: "/currentSession",
    name: "currentSession",
    // route level code-splitting
    // this generates a separate chunk (currentSession.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "currentSession" */ "../views/currentSessionView.vue"
      );
    },
  },
  {
    path: "/progress",
    name: "progress",
    // route level code-splitting
    // this generates a separate chunk (progress.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "progress" */ "../views/progressView.vue"
      );
    },
  },
  {
    path: "/reqGathering",
    name: "reqGathering",
    component: function () {
      return import(
        "../views/reqGathering.vue"
      );
    },
  },
  {
    path: "/designSketch",
    name: "designSketch",
    component: function () {
      return import(
        "../views/designSketch.vue"
      );
    },
  },
  {
    path: "/formativeCog",
    name: "formativeCog",
    component: function () {
      return import(
        "../views/formativeCog.vue"
      );
    },
  },
  {
    path: "/conclusion",
    name: "conclusion",
    component: function () {
      return import(
        "../views/conclusion.vue"
      );
    },
  },
  {
    path: "/contribution",
    name: "contribution",
    component: function () {
      return import(
        "../views/contribution.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
