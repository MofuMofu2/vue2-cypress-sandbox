<template>
  <div id="app">
    <Navigation />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "./components/Navigation.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navigation,
  },
});
</script>
