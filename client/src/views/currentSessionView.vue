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
    <div class="bingometer"></div>
    <div class="info">
      <div class="sub-info leftbottom"><p>Session Binge Length</p></div>
      <div class="sub-info rightbottom"><p>Time Left</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "watchPattern",
  components: {},
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
  border: 3px solid green;
}
.sub-info.right {
  width: 33%;
  display: inline-block;
  border: 3px solid green;
  min-height: 100% !important;
}
.sub-info.leftbottom {
  width: 50%;
  display: inline-block;
  border: 3px solid green;
}
.sub-info.rightbottom {
  width: 50%;
  display: inline-block;
  border: 3px solid green;
  min-height: 100% !important;
}
.bingometer {
  width: 100%;
  height: 400px;
  display: inline-block;
  border: 3px solid blue;
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
