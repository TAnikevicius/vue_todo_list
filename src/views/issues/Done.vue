<template>
  <div>
    <b-container>
      <h1>Done issues</h1>
      <div v-for="issue in doneIssues" :key="issue.id">
        <Issue v-bind:issue="issue" />
      </div>
      <div v-if="!doneIssues.length">
        <h2>There is no completed items at this moment...</h2>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Issue from "../../components/Issue.vue";

export default {
  name: "Done",
  components: {
    Issue
  },
  computed: {
    ...mapGetters(["doneIssues"])
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 25px;
}

h2 {
  text-align: center;
}
</style>