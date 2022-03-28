<template>
  <div class="graph">
    <Chart :data="dataGraph" :margin="margin" :direction="directionAxis">
      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Group :stacked="true">
          <Bar :dataKeys="['name', 'hours']" :barStyle="{ fill: '#90e0ef' }" />
          <Bar :dataKeys="['name', 'hoursleft']" :barStyle="{ fill: '#000' }" />
        </Group>
      </template>
    </Chart>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Chart, Grid, Bar, Group } from "vue3-charts";

export default defineComponent({
  name: "Main",
  components: { Chart, Grid, Bar, Group },
  props: {
    dataGraphKeys: { type: Array },
    dataGraph: {
      type: Array,
      default: () => [{ name: "null", hours: 0 }],
    },
    directionAxis: { type: String },
  },
  setup() {
    const margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
    const stacked = true;

    return { margin, stacked };
  },
});
</script>

<style scoped lang="scss">
.info {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
}

.graph {
  margin: 40px 0 0;
  width: 100%;
}
</style>
