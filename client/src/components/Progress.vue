<template>
  <div class="progress-comp">
    <div class = "Currentplan">
      <h2> Current Plan </h2>
      <div class = "row" >
        <div class = "column">
          <h3> Your Goal </h3>
          <img src = "../assets/laptop.png">
          <p> currently you are on a custom plan: </p>
          <p style = "color: #141414 "> Target Average :  3 Hours </p>
          <p style = "color: #141414 "> Current Average : <p style="color: red; font-size:32px" > 8 Hours </p> </p>
          <h6> Change Plan </h6>
        </div>
        <div class = "column">
          <h3> Screen Time Decrease </h3>
          <img src = "../assets/reduce.png">
          <p> Your Screen time decreased by </p>
          <p style="color: rgb(49, 212, 34); font-size:32px" > 37% </p>
          <h4 style = "color: grey"> compared to last week </h4>
          <h6> Great Job! </h6>
        </div>
        <div class = "column">
          <h3> Suggested Reduction </h3>
          <img src = "../assets/screen.png">
          <p> Reduce your screen time by </p>
          <p style="color: rgb(49, 212, 34); font-size:32px" > 1 hour per day </p>
          <h4 style = "color: grey"> Weeks on Plan: 5 </h4>
          <br>
          <br>
        </div>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
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
.Currentplan {
  background-color: #d0e4f58a;
  border-radius: 5px;
  margin: 20px;
}
h2 {
  margin: 10px;
  padding-top: 2%;
  align-content: left;
  font-family: 'Rubik Mono One', sans-serif;
  ;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 31%;
  position: relative;
  text-align: center;
  color: white;
  border:#141414;
  background-color: #d0e4f5e6 ;
  border-radius: 5px;
  margin: 10px;
    h3 {
      padding: 10%;
      font-family: 'Rubik', sans-serif;
      margin: 5px;
      color:#141414;
    }
    img {
      max-width:100%;
      max-height:100%;
      border-radius: 5px;
    }
    p{
      padding:1px;
      margin:1px;
      font-family: 'DM Sans', sans-serif;
      color: #4a4848;
    }
    h6 {
      color: #477f58
    }
    h6:hover {
  color: #7e060c;
  text-decoration: underline;
}
}
</style>
