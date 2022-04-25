<template>
  <div class="home">
    <Navsection v-if="this.LoggedIn == true" />
    <h1 style="color: #e50914;">De-Binge Netflix</h1>
    <!-- h3 v-if="this.loginType == 'demo'">Welcome to the project demo!</h3--->
    <div class = "homescreen" v-if="this.loginType == 'demo'">
    <div class = "linkNavigation" >
      <div class="row">
        <br>
        <div class="column">
          <router-link to="/watchPattern">
          <img src="../assets/bargraphic.jpg" alt="Watch Pattern">
            <div class="centered">Centered</div> 
          </router-link>
        </div>
        <div class="column">
          <router-link to="/social">
          <img src="../assets/socialgraphic.jpg" alt="Social">
          <div class="centered">Centered</div>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/currentSession">
          <img src="../assets/bingegraphic.jpg" alt="Binge-o-meter">
            <div class="centered">Centered</div> 
          </router-link>
        </div>
        <div class="column">
          <router-link to="/progress">
          <img src="../assets/bargraphic.jpg" alt="How You doin'?">
            <div class="centered">Centered</div>
          </router-link>
        </div>
      </div>
      </div>
    <br>
      <p> Hi Alex, How are you feeling today?
        Implement a mood checker!
      </p>
    <br>
      <p> Find your activity : Suggest them alternative activities
      </p>
    
    </div>
    <h3 v-if="this.loginType == 'project'">
      Welcome to the project!<br /><br />For project demo: Please Sign Out and
      select 'Demo' profile
    </h3>
    <button @click="loginTrigger('demo')" v-if="this.LoggedIn == false">
      <img
        alt="Profile Image"
        src="../assets/netflix-profile.jpeg"
        style="width: 256px; height: 256px"
      />
      <p style="font-size: 24px">Demo</p>
    </button>
    <button @click="loginTrigger('project')" v-if="this.LoggedIn == false">
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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Martel+Sans&display=swap');
h1 {
  font-family: 'Bebas Neue', cursive;
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
button {
  background-color: #F5F5F1;;
  border: 0px;
  padding: 20px 20px;
  
}
p {
  font-family: 'Arial Bold';
  color: blue;
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
  height:  80px;
  background-color: #9FC;
  margin-right: auto;
  margin-left: auto;
  color: #039;
  display: grid;
  grid-template-columns: auto auto ;/* this make content center*/
}
.column {
  float: left;
  width: 25%;
  position: relative;
  text-align: center;
  color: white;
  border:#141414;
    img {
    float: left;
    width:  450px;
    height: 800px;
    
    object-fit:contain;
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
</style>
