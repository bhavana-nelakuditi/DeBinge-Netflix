<template>
  <div class="hello">
    <h1 style="color: #e50914">{{ msg }}</h1>
    <!-- <button @click="loginTrigger"> -->
    <img
      alt="Profile Image"
      src="../assets/netflix-profile.jpeg"
      style="width: 256px; height: 256px"
    />
    <!-- </button> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  // mounted() {
  //   this.loginTrigger();
  // },
  methods: {
    loginTrigger() {
      this.$store.dispatch("GET_SIGNING_IN", true);
    },
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
</style>
