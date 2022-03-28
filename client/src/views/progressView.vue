<template>
  <div class="progress">
    <Progress />
    <BarChart
      :dataGraphKeys="graphKeys"
      :dataGraph="data2graph"
      directionAxis="vertical"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Progress from "@/components/Progress.vue";
import BarChart from "@/components/BarChart.vue";

export default {
  name: "progressView",
  components: {
    Progress,
    BarChart,
  },
  data() {
    return {
      data2graph: [
        { name: "Monday", hours: 5, hoursleft: 19 },
        { name: "Tuesday", hours: 9, hoursleft: 15 },
        { name: "Wednesday", hours: 15, hoursleft: 9 },
        { name: "Friday", hours: 7, hoursleft: 17 },
        { name: "Saturday", hours: 2, hoursleft: 22 },
        { name: "Sunday", hours: 10, hoursleft: 14 },
      ],
      graphKeys: ["name", "hours"],
    };
  },
};
</script>
