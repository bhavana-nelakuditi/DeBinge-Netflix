<template>
  <div>
    <Navsection />
    <div class="currentSession">
      <div class="info">
        <div class="sub-info left">
          <table>
            <tbody>
              <tr>
                <td v-for="(entry, i) in allScores" :key="i">
                  <img :src="entry.imageLocation" width="125" height="150" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sub-info right">
          <p>Please select binge date:</p>
          <select v-model="selected" @change="onChange()" id="shows">
            <option v-for="option in options" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
      <div class="bingometer">
        <img alt="Binge-o-meter" src="../assets/speedometer.jpeg" />
      </div>
      <div class="info">
        <div class="sub-info leftbottom">
          <p>
            <b>Session Binge Length: {{ bingeLength }} mins</b>
          </p>
        </div>
        <div class="sub-info rightbottom">
          <p>
            <b>Time Left: {{ timeLeft }} mins</b>
          </p>
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
.info {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
  display: flex;
}
.sub-info.left {
  width: 66%;
  display: inline-block;
}
.sub-info.right {
  width: 33%;
  display: inline-block;
  min-height: 100% !important;
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
  width: 100%;
  height: 400px;
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
</style>
