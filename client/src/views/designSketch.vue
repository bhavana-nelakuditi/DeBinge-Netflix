<template>
  <div>
    <Navsection />
    <div class="contribution">
      <h2>Sketch Iterations and Narrative Reflection of Design Changes</h2>
      <p style="margin: 5%; padding 5%">
        Design Challenge 1 - Watch Pattern
        <br />
        Design Challenge 2 - Comparison with Peers <br />
        Design Challenge 3 - Session Length for the Binge <br />
        Design Challenge 4 -User Improvement over time
      </p>
      <div class="row">
        <div class="column">
          <ul>
            <h3>Sajal Kherde</h3>
            <li><img src="../assets/sajal1.jpg" /></li>
            <li><img src="../assets/sajal2.jpg" /></li>
            <li style="text-align: justify">
              The sketches and their iterations have brought out some really
              interesting insights. The one sketch I would like to talk about is
              the one addressing the design challenge of “How are you performing
              compared to your friends?”. I thought of various graphs that we
              could use to show the metrics but the most efficient one seemed to
              be a cluster graph. That way our user can see all shows together
              on one screen or select a specific one from the drop down to see
              the graph in a zoomed in view. The usability criteria was an
              important factor for the selection of this graph as it is a metric
              where it doesn’t matter to the user if they watched a few mins
              less or more compared to their friends precisely but it speeds up
              the users task of understanding and recognizing the difference.
              This helps speed up their recognition and processing of thoughts.
              The tips at the top are dynamically changing so the user takes
              time to recognize the change and read it, allowing it to have a
              larger impact on them. To cover help and documentation, we will
              have tooltips that will provide info on hovering over the graph.
              The filter button provides flexibility and efficiency of use.
            </li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <h3>Sai Saketh Chamarthi</h3>
            <li><img src="../assets/saketh1.jpg" /></li>
            <li><img src="../assets/saketh2.jpg" /></li>
            <li style="text-align: justify">
              In the process of iterating through multiple designs and iterating
              through each of them based on discussions with teammates and self
              judgment, we tried to optimize our designs in a way that they
              conveyed the necessary information. Whilst choosing optimal
              designs, we had to make sure that the user can access any
              functionality with a minimal number of taps. For the “current
              binge session” design challenge, the first alternatives were
              proposed by keeping the different ways a user would want to view
              his information. The first sketches showed the shows that the user
              has binged along with the list of binge sessions he/she ever had.
              There was one sketch with just plain text and no graphs. Another
              set of sketches from the preliminary round had a ‘bingometer’
              along with user limit and list of shows binged in the session. We
              pruned our list of sketches and decided to move forward with a
              sketch that had a bingometer as the needle helps in faster
              recognition of the amount of time binged and conveys the purpose
              of the page. We further incorporated multiple changes for the same
              by – 1) dropdown list of past user binge sessions, 2) Removing the
              shows watched and displaying just the time spent , 3) By adding a
              dropdown menu along with the time left and the shows watched. We
              rearranged the parameters on the screen to come up with 6
              different models which had similar functionality. From the set of
              6 sketches, we decided to highlight the bingometer in the center,
              keeping the shows in the header and showing the session binge
              length and time left icons below. The user also has the option of
              viewing previous binge sessions via a dropdown menu.
            </li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <h3>Bhavana Nelakuditi</h3>
            <li><img src="../assets/bhavana1.jpg" /></li>
            <li><img src="../assets/bhavana2.jpg" /></li>
            <li style="text-align: justify">
              For our sketching exercise we started out with basic goal-serving
              designs and went through multiple iterations while taking
              interactive responses and feedback from the peers to increase the
              visibility of the key points. I want to highlight the iterations
              we went through for the Design challenge 3 (Binge Session data) in
              which the first proposed sketch just contains the basic data which
              might affect the user experience by not exciting them in any
              sense. In the next iteration sketch, a list of all his current and
              past binges are included in the leftmost menu, which can be
              selected and it displays the shows he watched along with the time
              in a time series graph. Analyzing this sketch made me conclude
              that this would be an overload of information for the user which
              reduces the efficiency and might increase the human errors for a
              novice user. In the final sketch, displaying the session selection
              is mentioned in a drop down menu. Here the shows are displayed
              with their in-app icons to increase the user’s visibility which
              ties in with the consistency across both Netflix and our
              application. Time left for the current binge is highlighted in a
              different shape so it is glanceable. Even though a drop down menu
              functions more on recall, for this design challenge it provides
              the suitable functionality for the completion of this task without
              overloading the user and reducing relative visibility.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";

export default {
  name: "designSketch",
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
  font-family: "Rubik Mono One", sans-serif;
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
    font-family: "Rubik Mono One", sans-serif;
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
  color: darkblue;
  margin: 2%;
  padding: 1%;
}
</style>
