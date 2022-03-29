<template>
  <div class="currentSession">
    <div class="info">
      <div class="sub-info left">
        <table>
          <tbody>
            <tr>
              <td v-for="(entry, i) in sortedList" :key="i">
                {{ entry.name }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sub-info right">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
    <div class="bingometer"><VueSpeedometer /></div>
    <div class="info">
      <div class="sub-info leftbottom">
        <p><b>Session Binge Length: 5hrs</b></p>
      </div>
      <div class="sub-info rightbottom">
        <p><b>Time Left: 1hr</b></p>
      </div>
    </div>
  </div>
</template>

<script>
import VueSpeedometer from "vue-speedometer";

export default {
  name: "watchPattern",
  components: { VueSpeedometer },
  template: `
    <div :style="styles">
      <vue-speedometer 
        :fluidWidth="true"
        :minValue="100"
        :maxValue="500"
        :value="473"
        needleColor="steelblue"
      />
      <div>
      Fluid width takes the width of the parent div (<strong>500px</strong> in this case)
      </div>
    </div>
  `,
  data: () => ({
    name: "",
    score: "",
    allScores: [
      { name: "cows", score: 10 },
      { name: "csts", score: 10 },
      { name: "dogs", score: 10 },
      { name: "fish", score: 10 },
    ],
  }),
  computed: {
    sortedList: function () {
      return this.allScores.slice().sort(function (a, b) {
        return b.score - a.score;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
