<template>
  <div class="progress-comp">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="info">
      <b>
        <div class="sub-info"><p>Current Average: 9.6 hrs</p></div>
        <div class="sub-info"><p>Target Average: 3 hrs</p></div>
        <div class="sub-info"><p>Plan Outline</p></div></b
      >
    </div>
    <!-- <div class="graphArea"></div> -->
  </div>
</template>

<script>
export default {
  name: "progress-component",
  props: {
    // msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
}
.sub-info {
  width: 33%;
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
