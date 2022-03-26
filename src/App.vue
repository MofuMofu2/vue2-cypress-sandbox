<template>
  <div id="todos">
    <h1>Tasks</h1>
    <todo-list />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "@/components/TodoList.vue";

export default Vue.extend({
  components: { TodoList },
  name: "App",
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
