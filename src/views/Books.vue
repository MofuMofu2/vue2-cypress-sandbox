<template>
  <div class="books">published book</div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import { BookList } from "@/interfaces/book";

type DataType = {
  booklist: null | BookList;
};

export default Vue.extend({
  name: "Books",
  data(): DataType {
    return {
      booklist: null,
    };
  },
  mounted() {
    fetch("/books")
      .then((response) => response.json())
      .then((data) => (this.booklist = data));
  },
});
</script>
