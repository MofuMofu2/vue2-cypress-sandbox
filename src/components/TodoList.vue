<template>
  <div id="todo-list">
    <table>
      <tr>
        <td>
          <input type="checkbox" name="check" id="check" v-model="completed" />
        </td>
        <td><input type="text" name="form" id="form" v-model="task" /></td>
        <td>delete</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TodoList",
  data: function () {
    return { completed: false, task: "" };
  },
});
</script>
