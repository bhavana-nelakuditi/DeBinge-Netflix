<template>
  <div>
    <Navsection />
    <div class="row">
      <div class="sub-info left">
        <ul>
          <li><a href="/tag/word1" data-weight="3">Word1</a></li>
          <li><a href="/tag/word2" data-weight="7">Word2</a></li>
          <li><a href="/tag/word3" data-weight="4">Word3</a></li>
        </ul>
      </div>
      <div class="sub-info middle">
        <div class="sub-info top">
          <img
            alt="Binge-o-meter"
            src="../assets/Capture.png"
            width="500"
            height="300"
          />
        </div>
        <div class="sub-info bottom">
          <b id="grad2">
            <p id="grad1">Session Binge Length: {{ bingeLength }} mins</p>
          </b>
          <p style="color: red; font-weight: bold; margin-left: 150px">
            You Have Almost Reached your Limit Today!
          </p>
          <p>
            <b style="text-align: center; margin-left: 150px"
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
            background-color: #e0ffff;
          "
        >
          <h1 id="righthead" style="margin-left: 50px; margin-right: 50px">
            Tasks
            <button
              @click="addNote"
              style="
                background: transparent;
                border: 0;
                font-size: 25px;
                background-color: #58cded82;
                margin-left: 0px;
                margin-right: 0px;
              "
            >
              +
            </button>
          </h1>

          <div v-for="data in taskHolder" class="sugCard" style="margin-top: 0">
            <p>{{ data.task }}</p>
            <p>{{ data.due }}</p>
            <button @click="removeNote(i)">-</button>
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
      return {
        bingeLength: 200,
        timeLeft: 10,
        selected: "04/12/2022",
        taskHolder: [
          { index: 0, task: "Finish HW2", due: "Due:s 12PM, 04/26/2022" },
          {
            index: 1,
            task: "Work on Final Presentation",
            due: "Due: 10PM, 04/29/2022",
          },
        ],
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
        this.taskHolder.push({ task: "New HW", due: "Due: 11PM, 04/28/2022" });
        this.$store.dispatch("GET_TASK_HOLDER", this.taskHolder);
      },
      removeNote(i) {
        this.taskHolder.pop(this.taskHolder.splice(i, 1));
        this.$store.dispatch("GET_TASK_HOLDER", this.taskHolder);
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
      this.taskHolder = this.$store.state.taskHolder;
    },
  };
</script>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap");
  .sub-info.left {
    width: 20%;
    display: inline-block;
  }
  .sub-info.middle {
    width: 60%;
    display: inline-block;
  }
  .sub-info.right {
    width: 20%;
    //padding: 50px;
    display: inline-block;
  }
  .row {
    display: flex;
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
  }
  .sub-info.bottom {
    width: 100%;
    display: inline-block;
    // min-height: 100% !important;
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
    color: #42b983;
  }
  $width: 100%;
  #grad1 {
    //height: 10px;
    //width: 300px;

    //padding-left: 30px
    // background-color: red; /* For browsers that do not support gradients */
    border-color: teal;
    border-radius: 25px;
    //border-radius: 25px;
    border: 2px solid #73ad21;
    //border:10px;
    //width: 25%;
    background-image: linear-gradient(to right, #d2e7d6, #e5726a);
    margin-left: 20%;
    background-size: ($width * 0.9) 100%;
  }
  #grad2 {
    width: $width;
    padding-left: calc($width / 4);
  }
  .sugCard {
    border-color: rgb(0, 0, 0);
    // border: 20px;
    border-radius: 25px;
    padding: 20px 0 20px;
    margin: auto;
    text-align: center;
    width: 200px;
    //height: 100px;
    background-color: #58cded82;
    font-weight: lighter;
    font-size: 15px;
    //margin: 10px;
    // margin-right: 20px;
    margin-bottom: 50px;
    margin-left: 35px;
  }
  #righthead {
    font-family: Times New Roman;
    font-weight: bold;
    text-align: center;
    margin-right: 40px;
  }
</style>
