<template>
  <div>
    <b-container>
      <h1>Open issues</h1>
      <div class="inset-item-block">
        <input
          :class="{ issueEmpty: addIssueEmpty }"
          type="text"
          placeholder="Add New Issue..."
          v-model="issueName"
        />
        <b-button @click="addNewIssueButton(issueName)" :disabled="false">Add</b-button>
      </div>
      <div v-for="issue in openIssues" :key="issue.id">
        <Issue v-bind:issue="issue" />
      </div>
      <div v-if="!openIssues.length">
        <h2>There is no open items at this moment...</h2>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Issue from "../../components/Issue.vue";

export default {
  name: "Open",
  components: {
    Issue
  },
  data: () => {
    return {
      issueName: "",
      addIssueEmpty: false
    };
  },
  computed: {
    ...mapGetters(["openIssues"])
  },
  methods: {
    ...mapActions(["addNewIssue"]),
    addNewIssueButton(issueName) {
      if (!issueName) {
        this.addIssueEmpty = true;
        return;
      }
      this.addNewIssue(issueName);
      this.issueName = "";
      this.addIssueEmpty = false;
    },
    test() {
      console.log(this.openIssues.length);

      return true;
    }
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

.inset-item-block {
  display: flex;
  margin-bottom: 25px;
}

.inset-item-block input {
  width: 300px;
  margin-right: 15px;
  padding: 0 15px;
}
.inset-item-block button {
  padding: 5px 30px;
}
.issueEmpty {
  border: 1px solid red;
}
</style>