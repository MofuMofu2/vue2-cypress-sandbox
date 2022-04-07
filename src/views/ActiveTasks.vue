<template>
  <div class="about">
    <nested-sample />
    <todo-list />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import NestedSample from "@/components/NestedSample.vue";
import TodoList from "@/components/TodoList.vue";

export default Vue.extend({
  name: "About",
  components: { NestedSample, TodoList },
});
</script>
