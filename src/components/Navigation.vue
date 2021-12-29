<template>
  <div class="side-navigation">
    <b-sidebar
      id="sidebar-1"
      title="Sidebar"
      no-close-on-esc
      no-close-on-route-change
      no-header-close
      visible
    >
      <div class="px-3 py-2">
        <p>Category</p>
      </div>
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navigation",
});
</script>
