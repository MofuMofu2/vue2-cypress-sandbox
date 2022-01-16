<template>
  <div id="child-component">
    <ul>
      <li>名前: {{ user.name }}</li>
      <li>
        GitHub: <a :href="githubUrl">{{ user.github }}</a>
      </li>
      <li>
        Twitter: <b-link :href="twitterUrl">{{ user.twitter }}</b-link>
      </li>
    </ul>
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
    githubUrl(): string {
      return "https://github.com/" + this.user.github;
    },
    twitterUrl(): string {
      return "https://twitter.com/" + this.user.twitter;
    },
  },
});
</script>
