<template>
  <div>
    <Navsection />
    <div class="overview">
      <h1>Formative Evaluation and Cognitive Walkthrough</h1>
      <div class="content">
        <h2>Evaluation Method</h2>
        <h5>
          We recruited two evaluators from the class for our project for the
          Wizard of Oz evaluation. In this evaluation, the users will interact
          with the system which is presented as a low fidelity prototype in its
          basic form. One of us took the role of Computer to change the display
          of the screen based on the user/evaluator's actions. One of us took
          the role of Facilitator to help the users carry out the tasks listed
          and one of us worked as the Observer to understand the feedback
          provided by the users navigating the system aspects of the system. For
          the De-Binge Netflix system, the core tasks are all formed to help the
          user visualize, understand and reduce his Netflix watch time with use
          of the application, while shifting the focus to improve their
          productivity, mental health etc. We have designed the tasks for the
          same and integrated them from the design challenges mentioned in the
          Requirement Specifications document, reflecting the feedback gained in
          our prototype.
        </h5>
      </div>
      <img src="../assets/cognitive.png" alt="How You doin'?" />
    </div>
    <div class="overview" style="margin: 2%; background-color: #b6d5f08a">
      <h2 style="margin: 2%; padding: 2% 0px 0px 0px">
        Task and Scenario cards
      </h2>
      <h5>
        Task 1 : Evaluate your current Binge Session <br />Scenario : It is
        midnight when you realize that it has been a while since you last came
        out of the room. You want to find out for how long you have been binging
        and what shows you have covered after your last study session. What are
        the necessary actions you would take to see the graph of your current
        binge session? <br />Description : Go to the list of your binge sessions
        and choose your current binge. Analyze the graph and check how much
        netflix time you have left for the day.

        <br /><br />

        <br />Task 2 : Compare your watch pattern with your friend circle
        <br />Scenario : You have decided to coordinate and help Tom (your
        friend) and Bob (your cousin), to be accountable for reducing their time
        spent on Netflix along with you. Check how you are doing compared to
        each of them individually for the show - “Game of Thrones”
        <br />Description : In your friend groups, compare your watch history
        with Tom individually using the graph given. Then, compare your watch
        history with Bob individually.

        <br />
        <br />Task 3 : Check Progress for last one week <br />Scenario : After a
        long week of multiple binges, you want to see how you have spent your
        time on and off Netflix. You want to see how many hours you spent on
        Netflix and how many productive hours remained for yourself to plan out
        your coming week. What steps will you follow to see the information?
        <br />Description : Check how your netflix watchtime fluctuated in the
        last one week and analyze whether you have improved or not.

        <br /><br />

        <br />Task 4 : Analyze your Watch pattern <br />Scenario : You are
        watching multiple shows and wish to gain control over your binge
        watching. However, you have no idea as to what type of shows you are
        mostly addicted to or spend your screen time on. Check and analyze what
        type of shows you are mostly addicted to once you start watching them
        and try limiting shows from that genre. <br />Description : Analyze the
        genre of the shows that you are watching under watch pattern. Shuffle
        through different genres to check the pattern for each genre.
      </h5>
    </div>
    <div class="overview" style="margin: 2%; background-color: #b6d5f08a">
      <h2 style="margin: 2%; padding: 2% 0px 0px 0px">
        Low Fidelity Prototype
      </h2>
      <h5>
        <img src="../assets/fidelity1.jpg" />
        <img src="../assets/fidelity2.jpg" />
        <img src="../assets/fidelity3.jpg" />
      </h5>
    </div>
    <div class="overview" style="margin: 2%; background-color: #b6d5f08a">
      <h2 style="margin: 2%; padding: 2% 0px 0px 0px">
        Cognitive Walkthrough Insights
      </h2>
      <h5>
        We got the feedback from the evaluators as they navigated the system to
        achieve the tasks given to them while thinking-out-loud regarding the
        actions/paths they took. We noted down instances when they strayed from
        the ideal path i.e the path we want them to follow to complete the given
        task. This helped us improve various aspects of our design we used
        including the metaphors, navigation styles like the menu display and
        drop down options. Based on the evaluation we decided on the following
        changes for the working prototype:

        <br />
        The metaphor for finding the watch pattern was confusing. Changing it to
        a better title would make it much easier for the user to understand it.
        Based on the feedback, we have changed the name “SHOWTIME” to “Trends”
        so that the user can check for their watch patterns. <br />Adding the
        show icons to the 'binge-o-meter' instead of colors to help users
        understand the breakdown of their binge session by the shows/movies they
        watched in the current session. <br />
        While completing task 2, the current display is not glanceable which
        reduces its usability. Based on the feedback, the display for that will
        be changed to a cluster of bubbles per person where the bubble size is
        dependent upon the watch time for the show and the background for that
        will be its icon to increase the recognition and reduce the user's
        cognitive load. <br />
        Adding a selection dropdown for subgroups to select a classification of
        people will make the functionality easier to use as the user can now
        classify peers under groups (friends/family) and compare effectively.

        <br />
        When the user was trying to read the graph, they were not able to
        recognize their target and the actual hours they spent on a specific
        day. Based on the feedback, we decided to add a vertical line depicting
        their intended target watch hours to ensure deviation display. <br />
        Units and labels should be added appropriately in all of the screens to
        increase the learnability of the application. We decided to add a
        dropdown to specify 'week' / 'month' or 'year' for the number of hours
        each show was watched.
      </h5>
    </div>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";
import BarChart from "@/components/BarChart.vue";

export default {
  name: "watchPattern",
  components: {
    BarChart,
    Navsection,
  },
  data() {
    return {
      selected: "All",
      chartData: {
        labels: ["Crown", "Game of Thrones", "You", "Kota Factory", "HIMYM"],
        datasets: [
          {
            label: "TV Shows",
            backgroundColor: "#f87979",
            data: [5, 9, 15, 7, 2],
          },
        ],
      },
      data2graph: [
        { name: "Crown", hours: 5, genre: "Drama" },
        { name: "Game of Thrones", hours: 9, genre: "Action" },
        { name: "You", hours: 15, genre: "Thriller" },
        { name: "Kota Factory", hours: 7, genre: "Drama" },
        { name: "HIMYM", hours: 2, genre: "Sitcom" },
      ],
      options: [
        { text: "All", value: "All" },
        { text: "Drama", value: "Drama" },
        { text: "Action", value: "Action" },
        { text: "Thriller", value: "Thriller" },
        { text: "Sitcom", value: "Sitcom" },
      ],
    };
  },
  methods: {
    onChange() {
      this.data2graph = [
        { name: "Crown", hours: 5, genre: "Drama" },
        { name: "Game of Thrones", hours: 9, genre: "Action" },
        { name: "You", hours: 15, genre: "Thriller" },
        { name: "Kota Factory", hours: 7, genre: "Drama" },
        { name: "HIMYM", hours: 2, genre: "Sitcom" },
      ];
      this.chartData.labels = [];
      this.chartData.datasets[0].data = [];
      var data2graphLoop = [];
      this.data2graph.forEach((element) => {
        if (this.selected == element.genre) {
          data2graphLoop.push(element);
          this.chartData.labels.push(element.name);
          this.chartData.datasets[0].data.push(element.hours);
        } else if (this.selected == "All") {
          data2graphLoop = [
            { name: "Crown", hours: 5, genre: "Drama" },
            { name: "Game of Thrones", hours: 9, genre: "Action" },
            { name: "You", hours: 15, genre: "Thriller" },
            { name: "Kota Factory", hours: 7, genre: "Drama" },
            { name: "HIMYM", hours: 2, genre: "Sitcom" },
          ];
          this.chartData.labels = [
            "Crown",
            "Game of Thrones",
            "You",
            "Kota Factory",
            "HIMYM",
          ];
          this.chartData.datasets[0].data = [5, 9, 15, 7, 2];
        }
      });
      this.data2graph = data2graphLoop;
    },
  },
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
.overview {
  background-color: #d0e4f58a;
  border-radius: 5px;
  margin: 20px;
  h5 {
    font-family: "Lato", sans-serif;
    color: #141414;
  }
  img {
    width: 30%;
    height: 30%;
    margin: 1px;
    padding: 2px;
  }
}
.overview:after {
  content: "";
  clear: both;
  display: table;
}
.content {
  float: left;
  width: 50%;
  padding: 5px;
}
</style>
