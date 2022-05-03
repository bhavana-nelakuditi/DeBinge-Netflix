<template>
  <div>
    <Navsection />
    <div class="requirement">
      <div class="splitScreen leftScreen">
        <div class = "overview" style= "margin:2%; background-color: #b6d5f08a;" >
        <h2 style= "margin:1%; padding: 2%;">Requirement Elicitation:</h2>
        <h5 style= "margin:6%; padding: 2%;">  
        Interviews:
        We conducted interviews instead of surveys with a goal to find out limits and watch patterns with people who were able to regain habitual usage over their Netflix binge-watching habits. We started with a specific set of questions:
        What is the main motivation behind quitting Netflix?
        What is the turning point that made you realize the impact of binge-watching in your life?
        What is the first step you took to overcome this addiction?
        Did you find yourself slipping back to your binge-watching habits? What is the main trigger?
        How often do you watch Netflix now?
        What kind of encouragement did you get from your friends and family while overcoming this? 
        We continued the conversations with these questions as a starting point to find out additional information that helped with establishing our functional and nonfunctional requirements.
        </h5>
      </div>
      <div class = "overview" style= "margin:2%; padding:5%" >
        <h2 style= "margin:1%; padding: 2%;">Results and Analysis of Requirement Elicitation</h2>
        <h5>  
        <h4>Results from Interviews:</h4>
            Interviews: Main motivation to quit netflix was procrastination due to which they were not able to send 
            Users complained of sleep Sleep Cycle messing up.
            Procrastination was one of the main factors we found from our user responses.
            Time management was another factor users complained of them having an issue with.
            Loss of Concentration/Excitement/Interest was related to Sleep cycle messed up and body not generating right amount of dopamine to provide motivation
            Academic performance was also being hampered as per the users complaints. This included exam failures and feelings of loneliness.
        <h4>Analysis from observations</h4>
              The results of the interviews were instrumental in leading us to identifying the functional requirements for the problem statement. Most of our interviewees cited wastage of time as the primary reason for getting the motivation to quit watching Netflix while some of them rephrased it to not being productive during their screen time. They further stated that lower grades and lower efficiencies while working due to procrastination caused them to think about the impact of binge watching. As a first step to overcoming their addiction, most of them set customized screen limits for themselves. This is one of our primary functional requirements as we help users fixate their screen time limit by offering multiple options. 
              Interviewees also mentioned that advertisements and Netflix notifications about new shows/movies triggered them to binge watch again. We help them by delaying notifications for the same. 
              Some of them mentioned that friends talking about shows made them lose control again. The proposed solution offers a functionality wherein users can compare and check screen times with their peers and plan to watch a show accordingly instead of binging it all at once.
              A set of users complained that idle time caused them to binge Netflix and to counter this issue, we display a set of alternate activities that the user could do instead of continuing to binge. These suggestions are displayed between the 5 second interval Netflix gives before the next episode on the auto play runs. 
              Interviewees mentioned that friends and family supported them in gaining control over their addiction by not talking about new shows and using the App when they were around.
          <h4>Refinement to Project Scope</h4>
              We came up with the following refinements to our project Scope after conducting the Interviews:
              Integrating the User’s Calendar Application to suggest alternative Activities which can either be Individual-specific or as a collaboration between their Peers.
              Paid plans with in-depth insights and PRO features
              Aggregating data from multiple services

        </h5>
      </div>
    </div>
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
  margin: 5%;
  h5 {
    font-family: 'Lato', sans-serif;
    color: #141414;
  }
  img {
    width: 30%;
    height: 30%;
    margin: 1px;
    padding: 2px;
  }
}
</style>
