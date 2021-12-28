<template>
  <div class="home">
    <Navigation />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>
