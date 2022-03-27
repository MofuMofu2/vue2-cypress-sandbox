<template>
  <div id="todo-list">
    <table>
      <tr v-for="task in tasks" :key="task.index">
        <td>
          <input
            type="checkbox"
            name="check"
            id="check"
            v-model="task.completed"
          />
        </td>
        <td><input type="text" name="form" id="form" v-model="task.task" /></td>
        <td><div>delete</div></td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tasks } from "@/interfaces/todolist";
export default Vue.extend({
  name: "TodoList",
  data: function () {
    return {
      tasks: [{ completed: false, task: "" }] as Tasks,
    };
  },
});
</script>
