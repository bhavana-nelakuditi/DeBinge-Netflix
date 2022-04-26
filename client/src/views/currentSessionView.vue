<template>
  <div>
    <Navsection />
    <div class="currentSession">
      <div class="row">
        <div class="column left">
          <img
            alt="Binge-o-meter"
            src="../assets/Capture.png"
            width="500"
            height="300"
          />
          <div class="info">
            <div class="sub-info leftbottom">
              <b id="grad2">
                <p id="grad1">Session Binge Length: {{ bingeLength }} mins</p>
              </b>
              <p>
                <b>Time Left: {{ timeLeft }} mins</b>
              </p>
              <div id="grad1"></div>
            </div>
          </div>
        </div>
        <div class="sub-info rightbottom">
          <div class="column right">
            <p>Hello</p>
            <div v-for="data in data2graph" class="sugCard">
              <p>{{ data.task }}</p>
              <p>{{ data.due }}</p>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      data2graph: [
        { task: "Finish HW2", due: "12Pm, 04/26/2022" },
        { task: "Work on Final Presentation", due: "10Pm, 04/29/2022" },
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
    onChange() {
      this.options.forEach((element) => {
        if (element.value == this.selected) {
          this.bingeLength = element.bingeLength;
          this.timeLeft = element.timeLeft;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.column {
  //float: left;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.left {
  width: 50%;
  padding-top: 30px;
  padding-left: 30px;
}

.right {
  width: 50%;
  padding-top: 80px;
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
.sub-info.leftbottom {
  width: 50%;
  display: inline-block;
}
.sub-info.rightbottom {
  width: 50%;
  display: inline-block;
  min-height: 100% !important;
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
$width: calc(100px + 25%);

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
}
#grad2 {
  width: $width;
  padding-left: calc($width / 4);
}
.sugCard {
  border-color: #000;
  border: 20px;
  border-radius: 25px;
  padding: 50px 0 50px;
  margin: auto;
  text-align: center;
  width: 500px;
  background-color: pink;
  margin: 50px;
}
</style>
