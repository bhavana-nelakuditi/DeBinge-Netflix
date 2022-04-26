<template>
  <div class="home">
    <Navsection v-if="this.LoggedIn == true" />
    <h1 style="color: #e50914">De-Binge Netflix</h1>
    <!-- h3 v-if="this.loginType == 'demo'">Welcome to the project demo!</h3--->
    <div class="homescreen" v-if="this.loginType == 'demo'">
      <div class="linkNavigation">
        <div class="row">
          <p>Hi Alex, How are you feeling today?</p>
          <div class="splitScreen leftScreen" style="margin-top: 100px">
            <div class="sub-info-mid" />
            <div class="sub-info-mid">
              <div class="row">
                <div class="sub-info-submid">
                  <button type="button" class="button-mood">Click Me!</button>
                </div>
                <div class="sub-info-submid">
                  <button type="button" class="button-mood">Click Me!</button>
                </div>
              </div>
              <div class="row">
                <div class="sub-info-submid">
                  <button type="button" class="button-mood">Click Me!</button>
                </div>
                <div class="sub-info-submid">
                  <button type="button" class="button-mood">Click Me!</button>
                </div>
              </div>

              <!-- <button type="button" class="button-mood">Click Me!</button>
              <button type="button" class="button-mood">Click Me!</button> -->
            </div>
            <div class="sub-info-mid" />
          </div>
        </div>
      </div>
      <!-- <br />
      <p>Find your activity : Suggest them alternative activities</p> -->
    </div>
    <h3 v-if="this.loginType == 'project'">
      Welcome to the project!<br /><br />For project demo: Please Sign Out and
      select 'Demo' profile
    </h3>
    <button
      class="button-profile"
      @click="loginTrigger('demo')"
      v-if="this.LoggedIn == false"
    >
      <img
        alt="Profile Image"
        src="../assets/netflix-profile.jpeg"
        style="width: 256px; height: 256px"
      />
      <p style="font-size: 24px">Demo</p>
    </button>
    <button
      class="button-profile"
      @click="loginTrigger('project')"
      v-if="this.LoggedIn == false"
    >
      <img
        alt="Profile Image"
        src="../assets/netflix-avatar.png"
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
    var loginType = "";
    return {
      loginType: loginType,
      LoggedIn: this.$store.state.signingIn ? true : false,
    };
  },
  methods: {
    loginTrigger(loginType) {
      this.$store.dispatch("GET_SIGNING_IN", true);
      this.$store.dispatch("GET_LOGIN_TYPE", loginType);
      this.LoggedIn = this.$store.state.signingIn;
      this.loginType = loginType;
    },
  },
  created() {
    this.$store.dispatch("GET_LOGIN_TYPE", "");
    this.LoggedIn = this.$store.state.signingIn;
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Martel+Sans&display=swap");
h1 {
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  font-size: 60px;
}
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
.button-profile {
  background-color: #f5f5f1;
  border: 0px;
  padding: 20px 20px;
}
p {
  font-family: "Arial Bold";
  color: teal;
}
.linkNavigation {
  //background-color: #141414;
  color: #141414;
  img {
    filter: blur(3px);
    -webkit-filter: blur(1px);
  }
}
.mood {
  width: 60%;
  height: 80px;
  background-color: #9fc;
  margin-right: auto;
  margin-left: auto;
  color: #039;
  display: grid;
  grid-template-columns: auto auto; /* this make content center*/
}
.column {
  float: left;
  width: 25%;
  position: relative;
  text-align: center;
  color: white;
  border: #141414;
  img {
    float: left;
    width: 450px;
    height: 800px;

    object-fit: contain;
  }
}
.centered {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.sub-info-mid {
  width: 33%;
  display: inline-block;
}
.sub-info-submid {
  width: 50%;
  display: inline-block;
}
.button-mood {
  border-color: #000;
  border: 1px;
  border-radius: 25px;
  padding: 20px 20px !important;
}
</style>
