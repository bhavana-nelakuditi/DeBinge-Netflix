<template>
  <div>
    <Navsection />
    <div class="row">
      <div class="sub-info left" style="padding-left: 20px; padding-top: 50px">
        <div>
          <ul class="cloud" role="navigation" aria-label="Webdev tag cloud">
            <!--<h2 style="color: red">Your Binges!</h2>-->
            <br />
            <li>
              <a href="" data-weight="3">04/15/2022</a>
            </li>
            <li><a href="" data-weight="1">04/12/2022</a></li>
            <li><a href="" data-weight="5">04/09/2022</a></li>
            <br />
            <li><a href="" data-weight="7">04/08/2022</a></li>
            <li><a href="" data-weight="2">04/07/2022</a></li>
            <li><a href="" data-weight="4">04/04/2022</a></li>
            <br />
            <li><a href="" data-weight="5">04/02/2022</a></li>
            <li><a href="" data-weight="3">04/01/2022</a></li>
            <li><a href="" data-weight="4">03/31/2022</a></li>
            <br />
            <li><a href="" data-weight="5">04/16/2022</a></li>
            <li><a href="" data-weight="3">04/17/2022</a></li>
            <li><a href="" data-weight="4">03/18/2022</a></li>
          </ul>
        </div>
        <div class="pulse">
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
        </div>
      </div>
      <div class="sub-info middle">
        <div class="sub-info top">
          <p style="color: red; font-weight: bold">
            You Have Almost Reached your Limit Today!
          </p>
          <img
            alt="Binge-o-meter"
            src="../assets/1.png"
            width="600"
            height="300"
            style="padding-right: 50px"
          />
        </div>
        <div class="sub-info bottom">
          <b id="grad2">
            <p id="grad1">Session Binge Length: {{ bingeLength }} mins</p>
          </b>

          <p style="color: white; font-weight: bold; border-color: white">
            <b style="text-align: center; color: white"
              >Time Left: {{ timeLeft }} mins</b
            >
          </p>
        </div>
      </div>
      <div class="sub-info right">
        <div
          style="
            font-family: Roboto, sans-serif;
            padding: 10px;
            margin-bottom: 0;
            background-color: #221f1f;
          "
        >
          <h1
            id="righthead"
            style="
              margin-top: 0px;
              margin-left: 20px;
              margin-right: 20px;
              color: white;
              font-size: 30px;
            "
          >
            Tasks
            <button
              @click="addNote"
              style="
                background: transparent;
                border: 0;
                font-size: 15px;
                background-color: #ffffff;
                margin-left: 0px;
                margin-right: 0px;
                border-radius: 5px;
              "
            >
              +
            </button>
          </h1>

          <div v-for="data in taskHolder" class="sugCard" style="margin-top: 0">
            <p>{{ data.task }}</p>
            <p>{{ data.due }}</p>
            <button @click="removeNote(data.index)">-</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import Navsection from "@/components/Navsection.vue";

export default {
  name: "watchPattern",
  components: { Navsection },
  data() {
    var taskHolder = [
      { index: 0, task: "Finish HW2", due: "Due:s 12PM, 04/26/2022" },
      {
        index: 1,
        task: "Work on Final Presentation",
        due: "Due: 10PM, 04/29/2022",
      },
    ];
    return {
      bingeLength: 200,
      timeLeft: 10,
      selected: "04/12/2022",
      taskHolder: taskHolder,
      options: [
        {
          text: "04/12/2022",
          value: "04/12/2022",
          bingeLength: 200,
          timeLeft: 10,
        },
        {
          text: "04/11/2022",
          value: "04/11/2022",
          bingeLength: 3,
          timeLeft: 3,
        },
        {
          text: "04/10/2022",
          value: "04/10/2022",
          bingeLength: 7,
          timeLeft: 0,
        },
        {
          text: "04/09/2022",
          value: "04/09/2022",
          bingeLength: 4,
          timeLeft: 2,
        },
        {
          text: "04/08/2022",
          value: "04/08/2022",
          bingeLength: 5,
          timeLeft: 1,
        },
        {
          text: "04/07/2022",
          value: "04/07/2022",
          bingeLength: 3,
          timeLeft: 3,
        },
        {
          text: "04/06/2022",
          value: "04/06/2022",
          bingeLength: 8,
          timeLeft: 0,
        },
        {
          text: "04/05/2022",
          value: "04/05/2022",
          bingeLength: 4,
          timeLeft: 2,
        },
        {
          text: "04/04/2022",
          value: "04/04/2022",
          bingeLength: 1,
          timeLeft: 5,
        },
        {
          text: "04/03/2022",
          value: "04/03/2022",
          bingeLength: 3,
          timeLeft: 2,
        },
        {
          text: "04/02/2022",
          value: "04/02/2022",
          bingeLength: 6,
          timeLeft: 0,
        },
        {
          text: "04/01/2022",
          value: "04/01/2022",
          bingeLength: 9,
          timeLeft: 0,
        },
      ],
      allScores: [
        {
          name: "Crown",
          imageLocation: require("../assets/Crown.jpeg"),
          genre: "Drama",
        },
        {
          name: "Game of Thrones",
          imageLocation: require("../assets/GoT.jpeg"),
          genre: "Action",
        },
        {
          name: "You",
          imageLocation: require("../assets/You.jpeg"),
          genre: "Thriller",
        },
        {
          name: "Kota Factory",
          imageLocation: require("../assets/Kota.jpeg"),
          genre: "Drama",
        },
        {
          name: "HIMYM",
          imageLocation: require("../assets/HIMYM.jpeg"),
          genre: "Sitcom",
        },
      ],
    };
  },
  methods: {
    addNote() {
      this.taskHolder.push({
        index: this.taskHolder.length,
        task: "New HW",
        due: "Due: 11PM, 04/28/2022",
      });
      this.$store.dispatch("GET_TASK_HOLDER", this.taskHolder);
    },
    removeNote(i) {
      this.taskHolder.splice(i, 1);
      // this.$store.dispatch("GET_TASK_HOLDER", this.taskHolder);
    },
    onChange() {
      this.options.forEach((element) => {
        if (element.value == this.selected) {
          this.bingeLength = element.bingeLength;
          this.timeLeft = element.timeLeft;
        }
      });
    },
  },
  created() {
    var taskHolder = this.$store.state.taskHolder;
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap");

.sub-info.left {
  width: 20%;
  display: inline-block;
  background: #221f1f;
  padding-right: 30px;
  margin-right: 10px;
  margin-left: 10px;
}
.sub-info.middle {
  width: 60%;
  display: inline-block;
  background: #221f1f;
  padding-top: 0;
  padding-right: 20px;
}
.sub-info.right {
  width: 20%;
  background: #221f1f;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
}
.row {
  display: flex;
  margin-top: 12px;
}
.row1 {
  display: flex;
  margin-top: 30px;
  overflow-x: auto;
  overflow: hidden;
}
.info {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
  display: flex;
}
.sub-info.top {
  width: 100%;
  display: inline-block;
  padding-top: 30px;
  padding-right: 30px;
}
.sub-info.bottom {
  width: 100%;
  display: inline-block;
  margin-right: 150px;
}
.bingometer {
  //width: 100%;
  //height: 400px;
  display: inline-block;
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
  color: #ffffff;
  text-decoration: none;
}
a:hover {
  color: red;
}
$width: 100%;
#grad1 {
  //height: 10px;
  //width: 300px;

  //padding-left: 30px
  // background-color: red; /* For browsers that do not support gradients */
  //border-color: teal;
  border-radius: 10px;
  //border-radius: 25px;
  // border: 2px solid #73ad21;
  //border:10px;
  //width: 25%;
  background-image: linear-gradient(to right, #9ecea6, #e5726a);
  margin-left: 20%;
  margin-right: 20%;
  background-size: ($width * 0.9) 100%;
}
#grad2 {
  width: $width;
  padding-left: calc($width / 4);
}
.sugCard {
  border-color: rgb(0, 0, 0);
  // border: 20px;
  border-radius: 15px;
  padding: 10px 0 10px;
  margin: auto;
  text-align: center;
  width: 200px;
  //height: 100px;
  background-color: #a8b1b8;
  font-weight: lighter;
  font-size: 15px;
  //margin: 10px;
  // margin-right: 20px;
  margin-bottom: 20px;
  //margin-left: 35px;
}
.sugCard:hover {
  background-color: red;
  color: white;
}
#righthead {
  font-family: Times New Roman;
  font-weight: bold;
  text-align: center;
  margin-right: 40px;
}

ul.cloud {
  list-style: none;
  //padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 2.75rem;
  // width: 450px;
}

ul.cloud a {
  --size: 4;
  --color: #a33;
  color: var(--color);
  font-size: calc(var(--size) * 0.25rem + 0.5rem);
  display: block;
  padding: 0.125rem 0.25rem;
  position: relative;
  text-decoration: none;
}

ul.cloud a[data-weight="1"] {
  --size: 1;
}
ul.cloud a[data-weight="2"] {
  --size: 2;
}
ul.cloud a[data-weight="3"] {
  --size: 3;
}
ul.cloud a[data-weight="4"] {
  --size: 4;
}
ul.cloud a[data-weight="5"] {
  --size: 6;
}
ul.cloud a[data-weight="6"] {
  --size: 8;
}
ul.cloud a[data-weight="7"] {
  --size: 10;
}
ul.cloud a[data-weight="8"] {
  --size: 13;
}
ul.cloud a[data-weight="9"] {
  --size: 16;
}

ul[data-show-value] a::after {
  content: " (" attr(data-weight) ")";
  font-size: 1rem;
}

ul.cloud li:nth-child(2n + 1) a {
  --color: #181;
}
ul.cloud li:nth-child(3n + 1) a {
  --color: #33a;
}
ul.cloud li:nth-child(4n + 1) a {
  --color: #c38;
}

ul.cloud a:focus {
  outline: 1px dashed;
}

ul.cloud a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  background: var(--color);
  transform: translate(-50%, 0);
  opacity: 0.15;
  transition: width 0.25s;
}

ul.cloud a:focus::before,
ul.cloud a:hover::before {
  width: 100%;
}

@media (prefers-reduced-motion) {
  ul.cloud * {
    transition: none !important;
  }
}
</style>
