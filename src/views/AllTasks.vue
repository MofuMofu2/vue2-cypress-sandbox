<template>
  <div id="all-tasks">
    <p>りまりま団について紹介するページです。</p>
    <todo-list :type="'all'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "@/components/TodoList.vue";

export default Vue.extend({
  name: "AllTasks",
  components: { TodoList },
});
</script>
