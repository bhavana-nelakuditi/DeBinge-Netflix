<!--<template>
  <div class="progress">
    <h1>This is a progress page</h1>
  </div>
</template>-->

<template>
  <div class="progress">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Progress />
    <BarChart />
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
};
</script>
