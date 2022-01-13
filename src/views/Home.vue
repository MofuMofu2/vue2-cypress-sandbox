<template>
  <div class="home">
    <router-link :to="{ name: 'About', params: { profile: profile } }">
      About Page
    </router-link>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
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
