<template>
  <div id="child-component">
    <p>名前: {{ user.name }}</p>
    <p>GitHub: {{ user.github }}</p>
    <p>Twitter: {{ user.twitter }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NestedChild",
  props: {
    user: Object,
  },
});
</script>
