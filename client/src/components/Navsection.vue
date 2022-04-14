<template>
  <div>
    <nav v-if="this.loginType == 'demo'">
      <router-link to="/">Home</router-link> |
      <router-link to="/watchPattern">Watch Pattern</router-link> |
      <router-link to="/social">Social</router-link> |
      <router-link to="/currentSession">Binge-O-Meter</router-link> |
      <router-link to="/progress">How You Doin'?</router-link> |
      <a href="/" @click="loginTrigger">Sign Out</a>
    </nav>
    <nav v-if="this.loginType == 'project'">
      <router-link to="/">Home</router-link> |
      <router-link to="/reqGathering">Requirements</router-link> |
      <router-link to="/designSketch">Sketch Diary</router-link>
      |
      <router-link to="/formativeCog">Formative Evaluation</router-link>
      | <router-link to="/conclusion">Conclusion</router-link> |
      <router-link to="/contribution">Individual Contributions</router-link> |
      <a href="/" @click="loginTrigger">Sign Out</a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return { loginType: this.$store.state.loginType };
  },
  methods: {
    loginTrigger() {
      this.$store.dispatch("GET_SIGNING_IN", false);
    },
  },
  created() {
    this.loginType = this.$store.state.loginType;
  },
};
</script>

<style lang="scss">
#app {
  font-family: AppleSymbols;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
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
