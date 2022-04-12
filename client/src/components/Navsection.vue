<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/watchPattern">SHOWTIME</router-link> |
    <router-link to="/social">Social</router-link> |
    <router-link to="/currentSession">Binge-O-Meter</router-link> |
    <router-link to="/progress">How You Doin'?</router-link>
  </nav>
</template>

<script></script>

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
