<template>
  <nav v-if="signingIn">
    <router-link to="/">Home</router-link> |
    <router-link to="/watchPattern">SHOWTIME</router-link> |
    <router-link to="/social">Social</router-link> |
    <router-link to="/currentSession">Bing-O-Meter</router-link> |
    <router-link to="/progress">How You Doin'?</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      signingIn: false,
    };
  },
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
