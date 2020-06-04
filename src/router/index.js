import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/issues/open",
    name: "Open",
    component: () => import("../views/issues/Open.vue"),
  },
  {
    path: "/issues/done",
    name: "Done",
    component: () => import("../views/issues/Done.vue"),
  },
  {
    path: "/issues/trashed",
    name: "Trashed",
    component: () => import("../views/issues/Trashed.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
