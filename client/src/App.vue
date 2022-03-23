<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/watchPattern">Watch Pattern</router-link> |
    <router-link to="/social">Social</router-link> |
    <router-link to="/currentSession">Current Session</router-link> |
    <router-link to="/progress">Progress</router-link>
  </nav>
  <router-view />
</template>

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
