import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

import Basic from "@/views/basic/Index.vue";
import BasicLess1 from "@/views/basic/Less1.vue";
import BasicLess2 from "@/views/basic/Less2.vue";
import BasicLess3 from "@/views/basic/Less3.vue";

import CrudBasic from "@/views/crud-basic/Index.vue";
import CrudBasic1 from "@/views/crud-basic/CrudBasic1.vue";
import CrudBasic2 from "@/views/crud-basic/CrudBasic2.vue";

import PublicApi from "@/views/public-api/Index.vue";
import Jp from "@/views/public-api/jp/Index.vue";

import CrudApi from "@/views/crud-api/Index.vue";
import CrudApi1 from "@/views/crud-api/CrudApi1.vue";
import CrudApi1Det from "@/views/crud-api/CrudApi1Det.vue";

import NotFound from "@/views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/basic",
    name: "basic",
    children: [
      { path: "", name: "basic home", component: Basic },
      { path: "/basic/less1", name: "basic less1", component: BasicLess1 },
      { path: "/basic/less2", name: "basic less2", component: BasicLess2 },
      { path: "/basic/less3", name: "basic less3", component: BasicLess3 },
    ],
  },
  {
    path: "/public-api",
    name: "public api",
    children: [
      { path: "", name: "public api home", component: PublicApi },
      { path: "/public-api/jp", name: "public api jp", component: Jp },
    ],
  },
  {
    path: "/crud-basic",
    name: "crud basic",
    children: [
      { path: "", name: "crud basic home", component: CrudBasic },
      { path: "/crud-basic/crud-basic-1", name: "crud basic 1", component: CrudBasic1 },
    ],
  },
  {
    path: "/crud-api",
    name: "crud api",
    children: [
      { path: "", name: "crud api home", component: CrudApi },
      { path: "/crud-api/less1", name: "crud api less1", component: CrudApi1 },
      { path: "/crud-api/less1/:id", name: "crud api less1 id", component: CrudApi1Det },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "not found",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
