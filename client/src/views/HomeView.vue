<template>
  <div class="home">
    <Navsection v-if="this.LoggedIn == true" />
    <h1 style="color: #e50914">De-Binge netflix</h1>
    <h3 v-if="this.LoggedIn == true">Are you still watching?</h3>
    <button @click="loginTrigger" v-if="this.LoggedIn == false">
      <img
        alt="Profile Image"
        src="../assets/netflix-profile.jpeg"
        style="width: 256px; height: 256px"
      />
      <p style="font-size: 24px">Demo</p>
    </button>
    <button @click="loginTrigger" v-if="this.LoggedIn == false">
      <img
        alt="Profile Image"
        src="../assets/netflix-profile.jpeg"
        style="width: 256px; height: 256px"
      />
      <p style="font-size: 24px">Project</p>
    </button>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";

export default {
  name: "HomeView",
  components: {
    Navsection,
  },
  data() {
    return {
      LoggedIn: this.$store.state.signingIn ? true : false,
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
