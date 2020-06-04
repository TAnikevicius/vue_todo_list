<template>
  <div>
    <b-container>
      <h1>Trashed issues</h1>
      <div v-for="issue in trashedIssues" :key="issue.id">
        <Issue v-bind:issue="issue" />
      </div>
      <div v-if="!trashedIssues.length">
        <h2>There is no trashed items at this moment...</h2>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Issue from "../../components/Issue.vue";

export default {
  name: "Trashed",
  components: {
    Issue
  },
  computed: {
    ...mapGetters(["trashedIssues"])
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