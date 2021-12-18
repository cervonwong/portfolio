/*
 * Copyright (C) 2021 Cervon Wong.
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const BlogCatalog = () =>
  import(/* webpackChunkName: "blog_catalog" */ "@/views/BlogCatalog.vue");
const Contact = () =>
  import(/* webpackChunkName: "contact" */ "@/views/Contact.vue");
const NotFound = () =>
  import(/* webpackChunkName: "not_found" */ "@/views/NotFound.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog Catalog",
    component: BlogCatalog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
