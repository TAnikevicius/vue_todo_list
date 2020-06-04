<template>
  <div class="issue-box">
    <div class="actions-block">
      <!-- Trash -->
      <span v-if="!isIssueTrashed()" @click="removeIssue(issue.id)" v-b-tooltip.hover title="Trash">
        <b-icon-trash></b-icon-trash>
      </span>
      <!-- Untrash -->
      <span
        v-if="isIssueTrashed()"
        @click="restoreIssue(issue.id)"
        v-b-tooltip.hover
        title="Untrash"
      >
        <b-icon-backspace></b-icon-backspace>
      </span>
      <!-- Mark As Done -->
      <span
        v-if="!isIssueDone()"
        @click="markAsDone(issue.id)"
        v-b-tooltip.hover
        title="Mark As Done"
      >
        <b-icon-check2-square></b-icon-check2-square>
      </span>
      <!-- Mark as Undone -->
      <span
        v-if="isIssueDone()"
        @click="markAsUnDone(issue.id)"
        v-b-tooltip.hover
        title="Mark as Undone"
      >
        <b-icon-arrow-bar-left></b-icon-arrow-bar-left>
      </span>
      <!-- Open Edit -->
      <span class="edit-button" @click="openEditField()" v-b-tooltip.hover title="Edit">
        <b-icon-pencil></b-icon-pencil>
      </span>
    </div>
    <div class="name-block">
      <span v-if="!editFieldOpened">{{issue.name}}</span>
      <span v-if="editFieldOpened">
        <input class="name-edit-field" type="text" v-model="issue.name" />
        <span class="save-button" @click="saveField({id: issue.id, name: issue.name})">
          <b-icon-check></b-icon-check>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Issue",
  props: ["issue", "issuePosition"],
  data: () => {
    return {
      editFieldOpened: false
    };
  },
  methods: {
    ...mapActions([
      "removeIssue",
      "editIssue",
      "markAsDone",
      "markAsUnDone",
      "restoreIssue"
    ]),
    openEditField() {
      this.editFieldOpened = true;
    },
    saveField(issueUpdatedData) {
      this.editFieldOpened = false;
      this.editIssue(issueUpdatedData);
    },
    isIssueOpen() {
      return !this.issue.done && !this.issue.trashed;
    },
    isIssueDone() {
      return this.issue.done;
    },
    isIssueTrashed() {
      return this.issue.trashed;
    }
  }
};
</script>

<style scoped>
.issue-box {
  border-bottom: 1px solid #ccc;
  display: flex;
  margin-bottom: 10px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}

.name-block {
  flex-grow: 1;
  padding: 10px 15px;
}

.actions-block {
  min-width: 110px;
  padding: 10px;
  background-color: #58b0bc;
  display: flex;
  align-items: center;
}

.name-edit-field {
  width: 90%;
}

svg {
  cursor: pointer;
  font-size: 22px;
  margin: 0 3px;
}
</style>