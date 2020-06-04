import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: [
      {
        id: 1,
        name: "issue 1",
        done: false,
        trashed: false,
      },
      {
        id: 2,
        name: "issue 2",
        done: false,
        trashed: false,
      },
      {
        id: 3,
        name: "issue 3",
        done: false,
        trashed: false,
      },
      {
        id: 4,
        name: "issue 4",
        done: true,
        trashed: false,
      },
      {
        id: 5,
        name: "issue 5",
        done: false,
        trashed: true,
      },
    ],
    testData: "simple string",
  },

  getters: {
    openIssues: (state) =>
      state.issues.filter(
        (issue) => issue.done === false && issue.trashed === false
      ),
    doneIssues: (state) =>
      state.issues.filter(
        (issue) => issue.done === true && issue.trashed === false
      ),
    trashedIssues: (state) =>
      state.issues.filter((issue) => issue.trashed === true),
  },

  mutations: {
    initialiseStore: (state) => {
      const localStorageItem = localStorage.getItem("issues");

      if (localStorageItem) {
        state.issues = JSON.parse(localStorageItem);
      }
    },

    addNewIssue: (state, payload) => {
      state.issues.unshift({
        id: `${payload}-${Math.floor(Math.random() * 100)}`,
        name: payload,
        done: false,
        trashed: false,
      });
    },

    removeIssue: (state, payload) => {
      state.issues.forEach((issue) => {
        if (issue.id === payload) {
          issue.trashed = true;
        }
      });
    },

    restoreIssue: (state, payload) => {
      state.issues.forEach((issue) => {
        if (issue.id === payload) {
          issue.trashed = false;
        }
      });
    },

    editIssue: (state, payload) => {
      state.issues.forEach((issue) => {
        if (issue.id === payload.id) {
          issue.name = payload.name;
        }
      });
    },

    markAsDone: (state, payload) => {
      state.issues.forEach((issue) => {
        if (issue.id === payload) {
          issue.done = true;
          issue.trashed = false;
        }
      });
    },

    markAsUnDone: (state, payload) => {
      state.issues.forEach((issue) => {
        if (issue.id === payload) {
          issue.done = false;
          issue.trashed = false;
        }
      });
    },
  },

  actions: {
    addNewIssue: (context, payload) => context.commit("addNewIssue", payload),
    removeIssue: (context, payload) => context.commit("removeIssue", payload),
    editIssue: (context, payload) => context.commit("editIssue", payload),
    markAsDone: (context, payload) => context.commit("markAsDone", payload),
    markAsUnDone: (context, payload) => context.commit("markAsUnDone", payload),
    restoreIssue: (context, payload) => context.commit("restoreIssue", payload),
  },
});
