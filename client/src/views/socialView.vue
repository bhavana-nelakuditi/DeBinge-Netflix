<template>
  <div>
    <Navsection />
    <SocialBubble />
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";
import SocialBubble from "@/components/SocialBubble.vue";
export default {
  name: "socialView",
  components: {
    SocialBubble,
    Navsection,
  },
};
</script>

<style lang="scss" scoped>
// .social {
//   margin-top: 200px;
// }
</style>
