<template>
  <div>
    <Navsection />
    <div class="contribution">
      <h2>Individual Contribution</h2>
      <p style="margin: 5%; padding 5%; text-align: justify">
        We majorly discussed most of the stuff to include like the actual
        problem we are addressing, the vision, the kind of data we need from the
        users to implement our plans and how effective the actual solution we
        are proposing will help the users and the effectiveness of incentives
        like achievements and badges. We also got together to address the
        feedback we got from the Instructor and our peers (through piazza) so we
        can make various improvements like the questions in User Interviews and
        alternate options that can be provided to the user. <br /><br />
        Requirement Gathering and Specifications: All of us conducted Interviews
        and got together to analyze the responses we got along with establishing
        the requirements from finding extensions to our project scope.

        <br /><br />Sketch Diary: Each individual contributed 3 sketches for the
        first segment out of which one was selected and for the second round,
        each individual contributed 2 sketches, out of which we selected one
        final sketch.

        <br /><br />Report: We all sat down together and created the report.
        Everyone contributed equally to the entire report.
        <br /><br />Requirement Elicitation: We came up with 2 questions each
        (total of 6). <br /><br />
        For Formative Evaluation: We based our low fidelity prototypes on the
        final sketches selected after the Sketching activity done using the 10
        plus 10 method. After creating the prototype we conducted the evaluation
        with the two evaluators from class.

        <br /><br />
        For the screen of low fidelity prototype we created the following
        screens: Sajal: Home, SHOWTIME, How you doin' Saketh: Binge-o-meter
        Bhavana: Social

        <br /><br />
        For the evaluation we took on the following roles: Sajal : Computer
        Saketh: Facilitator Bhavana: Observer

        <br /><br />After conducting the evaluation, we got insights together
        and decided on changes we have to make to the application. <br /><br />
        For the website we based the design based on our sketches and the
        feedback we received after the frormative Evaluation. We got together to
        decide on the designs of each page to increase their usability and
        focused mainly on the glanceability and ease of use.
      </p>
      <div class="row">
        <div class="column">
          <ul>
            <h3>Sajal Kherde</h3>
            <li>Concept and the Conceptual Model</li>
            <li>Literature Review</li>
            <li>Development Options</li>
            <li>Results and analysis</li>
            <li>User Requirements</li>
            <li>Non Functional Requirements</li>
            <li>Vue Project set up</li>
            <li>Routes</li>
            <li>Home page Mood detection</li>
            <li>Navigation bar</li>
            <li>Scenarios for the task cards</li>
            <li>Annotated the screens</li>
            <li>User/evaluator paths(CW) for the given tasks</li>
            <li>
              General improvements under feedback from formative evaluation
            </li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <h3>Sai Saketh Chamarthi</h3>
            <li>Introduction & Vision</li>
            <li>Example tasks</li>
            <li>User Scenarios</li>
            <li>Usability Requirements</li>
            <li>Requirement Elicitation</li>
            <li>Non Functional Requirements</li>
            <li>Bing-o-meter</li>
            <li>Watch Pattern Page</li>
            <li>Walkthrough comments for CW from the user paths</li>
            <li>Tasks and description for the task cards</li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <h3>Bhavana Nelakuditi</h3>
            <li>Refinement of Project Scope</li>
            <li>Target Users</li>
            <li>Characteristics</li>
            <li>Goals</li>
            <li>User & Functional requirements</li>
            <li>Plans for gathering requirements</li>
            <li>Website Home page</li>
            <li>How You Doin' Page</li>
            <li>Project section of the website</li>
            <li>Evaluation Method</li>
            <li>Cognitive walkthrough</li>
            <li>Ideal path and assumptions</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";

export default {
  name: "contribution",
  components: {
    Navsection,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.watchPattern {
  margin: 40px 0 0 0;
  width: 100%;
  display: flex;
}
.splitScreen.leftScreen {
  width: 70%;
  height: 100%;
  margin: 0 10px 0 10px;
  display: inline-block;
}
.splitScreen.rightScreen {
  width: 25%;
  margin: 0 10px 0 10px;
  display: inline-block;
  border: 1px solid green;
  min-height: 100% !important;
}
.tableCSS {
  width: 100%;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
.filter {
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
  // background-color: #d0e4f58a;
  border-radius: 5px;
  margin: 20px;
}
h2 {
  margin: 10px;
  padding-top: 2%;
  align-content: left;
  font-family: "Rubik Mono One", sans-serif;
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
  border: #141414;
  background-color: #d0e4f5e6;
  border-radius: 5px;
  margin: 10px;
  h3 {
    padding: 10%;
    font-family: "Rubik", sans-serif;
    margin: 5px;
    color: #141414;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
  }
  p {
    padding: 1px;
    margin: 1px;
    font-family: "DM Sans", sans-serif;
    color: #4a4848;
  }
  h6 {
    color: #477f58;
  }
  h6:hover {
    color: #7e060c;
    text-decoration: underline;
  }
}

ul {
  // background: #60a6eb5d;
  padding: 5%;
  margin: 5%;
}
ul li {
  // background: #cce5ff;
  background: #60a6eb5d;
  color: darkblue;
  margin: 2%;
  padding: 1%;
}
</style>
