<template>
  <div id="all-tasks">
    <p>りまりま団について紹介するページです。</p>
    <todo-list />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "@/components/TodoList.vue";

export default Vue.extend({
  components: { TodoList },
  name: "AllTasks",
});
</script>
