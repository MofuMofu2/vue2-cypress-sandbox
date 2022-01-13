<template>
  <div class="about">
    <h1>This is an about page.</h1>
    <p>Name: {{ user.name }}</p>
    <p>GitHub: {{ user.github }}</p>
    <p>Twitter: {{ user.twitter }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About",
  props: {
    user: Object,
  },
});
</script>
