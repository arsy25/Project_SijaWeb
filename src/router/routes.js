const routes = [
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },

  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
  },
];

export default routes;
