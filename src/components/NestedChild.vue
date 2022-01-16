<template>
  <div id="child-component">
    <p>名前: {{ user.name }}</p>
    <p>
      GitHub: <a :href="githubUrl">{{ user.github }}</a>
    </p>
    <p>Twitter: {{ user.twitter }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Profile } from "@/interfaces/profile";
export default Vue.extend({
  name: "NestedChild",
  props: {
    user: { type: Object as () => Profile },
  },
  computed: {
    githubUrl() {
      return "https://github.com/" + this.user.github;
    },
    twitterUrl() {
      return "https://twitter.com/" + this.user.twitter;
    },
  },
});
</script>
