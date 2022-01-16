<template>
  <div class="home">
    <router-link :to="{ name: 'About', params: { profile: profile } }">
      About Page
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
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
