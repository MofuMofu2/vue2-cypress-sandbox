<template>
  <div id="parent-component">
    <p>りまりま団のメンバー紹介</p>
    <nested-child :user="profile" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import NestedChild from "./NestedChild.vue";
export default Vue.extend({
  components: { NestedChild },
  name: "NestedSample",
  data() {
    return {
      profile: {
        name: "mofumofu",
        github: "MofuMofu2",
        twitter: "froakie0021",
      },
    };
  },
});
</script>
