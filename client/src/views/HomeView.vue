<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Navsection v-if="this.LoggedIn == true" />

    <h1 style="color: #e50914">De-Binge netflix</h1>
    <h3 v-if="this.LoggedIn == true">Are you still watching?</h3>
    <button @click="loginTrigger" v-if="this.LoggedIn == false">
      <img
        alt="Profile Image"
        src="../assets/netflix-profile.jpeg"
        style="width: 256px; height: 256px"
      />
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navsection from "@/components/Navsection.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    Navsection,
  },
  data() {
    return {
      LoggedIn: this.$store.state.signingIn ? true : false,
      //LoggedIn: this.$store.getters.SIGNING_IN,
    };
  },
  methods: {
    loginTrigger() {
      this.$store.dispatch("GET_SIGNING_IN", true);
      this.LoggedIn = this.$store.state.signingIn;
    },
  },
  computed() {
    this.LoggedIn = this.$store.state.signingIn;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  background-color: white;
  border: 0px;
}
</style>
