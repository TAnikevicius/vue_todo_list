<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>
<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");

    this.$store.subscribe((mutation, state) => {
      const issues = state.issues;
      localStorage.setItem("issues", JSON.stringify(issues));
    });
  }
};
</script>
<style>
</style>
