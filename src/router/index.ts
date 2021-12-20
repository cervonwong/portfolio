/*
 * Copyright (C) 2021 Cervon Wong.
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const AboutMe = () =>
  import(/* webpackChunkName: "about_me" */ "@/views/AboutMe.vue");
const ProjectShowcase = () =>
  import(
    /* webpackChunkName: "project_showcase" */ "@/views/ProjectShowcase.vue"
  );
const BlogCatalog = () =>
  import(/* webpackChunkName: "blog_catalog" */ "@/views/BlogCatalog.vue");
const Resume = () =>
  import(/* webpackChunkName: "resume" */ "@/views/Resume.vue");
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
    path: "/about-me",
    name: "About me",
    component: AboutMe,
  },
  {
    path: "/projects",
    name: "Project showcase",
    component: ProjectShowcase,
  },
  {
    path: "/blog",
    name: "Blog Catalog",
    component: BlogCatalog,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
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
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
