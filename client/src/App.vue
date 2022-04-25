<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      signingIn: false,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 !important;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #E50914;
  text-align: left;
  //background-color: #141414;
  background-color: #F5F5F1;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
