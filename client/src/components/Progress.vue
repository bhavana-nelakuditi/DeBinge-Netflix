<template>
  <div class="progress-comp">
    <div class="info">
      <b>
        <div class="sub-info"><p>Current Average: 8 hrs</p></div>
        <div class="sub-info"><p>Target Average: 3 hrs</p></div>
        <div class="sub-info" style="text-align: justify">
          <p>
            Current Limits: N/A <br />Suggested Reduction: 1hr/day<br />Weeks on
            Plan: 5
          </p>
        </div></b
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "progress-component",
  props: {},
};
</script>

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
