<template>
  <div class="books">
    <ul v-if="booklist">
      <li v-for="(value, index) in booklist" :key="index">
        タイトル： {{ value.name }}
        <ul>
          <li>
            <a :href="value.url">{{value.url}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
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
