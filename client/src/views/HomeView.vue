<template>
  <div class="home">
    <Navsection v-if="this.LoggedIn == true" />
    <h1 style="color: #e50914">De-Binge Netflix</h1>
    <div class="homescreen" v-if="this.loginType == 'demo'">
      <div class="linkNavigation">
        <div class="row">
          <p v-if="!moodSelected" style="text-transform: lowercase">
            Hi Saketh, How are you feeling today?
          </p>
          <div class="splitScreen leftScreen" style="margin-top: 25px">
            <div class="sub-info-mid" />
            <div class="sub-info-mid">
              <div class="row" v-if="!moodSelected">
                <div class="sub-info-submid">
                  <button
                    type="button"
                    class="button-mood"
                    style="margin-right: 200"
                    @click="showSuggestion('happy')"
                  >
                    😊
                  </button>
                </div>
                <div class="sub-info-submid">
                  <button
                    type="button"
                    class="button-mood"
                    @click="showSuggestion('sad')"
                  >
                    🙁
                  </button>
                </div>
              </div>
              <div class="row" v-if="!moodSelected">
                <div class="sub-info-submid">
                  <button
                    type="button"
                    class="button-mood"
                    @click="showSuggestion('angry')"
                  >
                    😡
                  </button>
                </div>
                <div class="sub-info-submid">
                  <button
                    type="button"
                    class="button-mood"
                    @click="showSuggestion('disappointed')"
                  >
                    😔
                  </button>
                </div>
              </div>
              <div class="row" v-if="moodSelected">
                <p class="sugCard">
                  {{ suggestedMoodHealer }}<br /><button
                    class="button-back"
                    @click="moodSelected = false"
                  >
                    Back
                  </button>
                </p>
              </div>
            </div>
            <div class="sub-info-mid" />
          </div>
        </div>
      </div>
      <div class="row" v-if="moodSelected">
        <h1>FIND YOUR ACTIVITY</h1>
        <div class="triplerow">
          <div class="activity" v-for="act in activityCards">
            <h2>{{ act.activity }}</h2>
            <img :src="act.img" />
            <p>{{ act.time }} min</p>
          </div>
        </div>
        <div class="column">
          <router-link to="/watchPattern">
            <img src="../assets/bargraphic.jpg" alt="Watch Pattern" />
            <div class="centered">Monitor what you are watching</div>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/social">
            <img src="../assets/socialgraphic.jpg" alt="Social" />
            <div class="centered">
              Find out how your friends and family compare
            </div>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/currentSession">
            <img src="../assets/bingegraphic.jpg" alt="Binge-o-meter" />
            <div class="centered">Are you on a binge right now?</div>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/progress">
            <img src="../assets/recoverygraphic.jpg" alt="How You doin'?" />
            <div class="centered">
              Check how much you improved <br />(or not)
            </div>
          </router-link>
        </div>
      </div>
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
    // var loginType = this.$store.state.loginType;
    var moodSelected = false;
    var suggestedMoodHealer = "";
    var activityCards = [
      { activity: "Yoga", img: require("../assets/yoga.png"), time: 60 },
      { activity: "Cardio", img: require("../assets/cardio.png"), time: 90 },
      { activity: "Dinner", img: require("../assets/cooking.png"), time: 30 },
      {
        activity: "Cycling",
        img: require("../assets/cycle.png"),
        time: 150,
      },
      {
        activity: "Art Show",
        img: require("../assets/art.png"),
        time: 300,
      },
      { activity: "Guitar", img: require("../assets/music.png"), time: 60 },
    ];
    return {
      loginType: this.$store.state.loginType,
      LoggedIn: this.$store.state.signingIn,
      moodSelected: moodSelected,
      suggestedMoodHealer: suggestedMoodHealer,
      activityCards: activityCards,
    };
  },
  methods: {
    loginTrigger(loginType) {
      this.$store.dispatch("GET_SIGNING_IN", true);
      this.$store.dispatch("GET_LOGIN_TYPE", loginType);
      this.LoggedIn = this.$store.state.signingIn;
      this.loginType = this.$store.state.loginType;
      console.log(this.$store.state.loginType);
    },
    showSuggestion(moodStatus) {
      this.moodSelected = true;
      switch (moodStatus) {
        case "happy":
          this.suggestedMoodHealer = "Continue having a great day!";
          break;
        case "sad":
          this.suggestedMoodHealer = "you're a sucker for happiness";
          break;
        case "angry":
          this.suggestedMoodHealer =
            "You watch history shows a lot of serious content!\nTry going for a short walk!";
          break;
        case "disappointed":
          this.suggestedMoodHealer = "you're a sucker for happiness";
          break;

        default:
          break;
      }
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap");
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
  color: #e50914;
}
.button-profile {
  background-color: #f5f5f1;
  border: 0px;
  padding: 20px 20px;
}
.button-back {
  color: #ff8095;
  background-color: transparent;
  border: solid;
  border-width: thin;
  border-radius: 25px;
  border-color: #ff8095;
  margin-top: 100px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
p {
  font-family: "Arial Bold";
  color: teal;
}
.home {
  font-family: "Roboto", sans-serif;
}
.linkNavigation {
  background-color: #f5f5f1;
  text-transform: uppercase;
  color: #141414;
  img {
    filter: blur(4px);
    -webkit-filter: blur(1px);
  }
}
.mood {
  width: 60%;
  height: 80px;
  background-color: #e50914;
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
    border-radius: 25px;
    float: left;
    width: 330px;
    height: 800px;

    object-fit: contain;
  }
}
.centered {
  position: absolute;
  backdrop-filter: blur(2px);
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: table;
  margin: 0px auto 0px auto;
  padding: 3px;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.582);
}
.centered:hover {
  color: #7e060c;
  text-decoration: underline;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
// .triplerow {
//   background-image: url("../assets/activity.png");
// }
.triplerow:after {
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
  font-size: 50px;
  border-color: #000;
  border: 1px;
  border-radius: 25px;
  // padding: 20px 20px;
  width: 100%;
  margin: 20px;
  padding: 30%;
}
.sugCard {
  border-color: #000;
  border: 20px;
  border-radius: 25px;
  padding: 50px 0 50px;
  margin: auto;
  text-align: center;
  width: 500px;
  background-color: #ffc0cb;
}
.activity {
  float: left;
  width: 15%;
  position: relative;
  text-align: center;
  box-shadow: 2px 2px 7px 1px #1c6ea4;
  img {
    width: 25%;
    height: 25%;
  }
  background-color: lightblue;
  margin: 10px;
}
.row button {
  background: #f8d9fb;
  background: -moz-linear-gradient(45deg, #f8d9fb 0%, #ffffff 100%);
  background: -webkit-linear-gradient(45deg, #f8d9fb 0%, #ffffff 100%);
  background: linear-gradient(45deg, #f8d9fb 0%, #ffffff 100%);
  margin-right: 16px;
}
.sub-info-mid {
  column-count: 1;
}
</style>
