<template>
  <div class="books">published book</div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";

export default Vue.extend({
  name: "Books",
  mounted() {
    fetch("/books")
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
});
</script>
