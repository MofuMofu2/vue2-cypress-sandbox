<template>
  <div id="todo-list">
    <table>
      <thead>
        <tr>
          <td>
            <input
              type="checkbox"
              name="toggle-all"
              id="toggle-all"
              @click="toggleAll"
            />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in filterdTasks" :key="task.index">
          <td>
            <input
              type="checkbox"
              name="check"
              id="check"
              v-model="task.completed"
            />
          </td>
          <td>
            <input
              type="text"
              name="form"
              id="form"
              v-model="task.task"
              @keyup.enter="doneEdit"
            />
          </td>
          <td><div @click="deleteTask(task.index)">delete</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Tasks } from "@/interfaces/todolist";
export default Vue.extend({
  name: "TodoList",
  props: {
    type: String,
  },
  data: function () {
    return {
      tasks: [{ completed: false, task: "" }] as Tasks,
    };
  },
  computed: {
    filterdTasks() {
      switch (this.type) {
        case "active":
          return this.tasks.filter((task) => task.completed === false);
        case "completed":
          return this.tasks.filter((task) => task.completed === true);
        default:
          return this.tasks;
      }
    },
  },
  methods: {
    doneEdit() {
      this.tasks.push({ completed: false, task: "" });
    },
    deleteTask(index: number) {
      this.tasks.splice(index, 1);
    },
    toggleAll() {
      for (const param of this.tasks) {
        param.completed = !param.completed;
      }
    },
  },
});
</script>
