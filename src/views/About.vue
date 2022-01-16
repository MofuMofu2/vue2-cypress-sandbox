<template>
  <div class="about">
    <nested-sample />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import NestedSample from "@/components/NestedSample.vue";
export default Vue.extend({
  name: "About",
  components: { NestedSample },
});
</script>
