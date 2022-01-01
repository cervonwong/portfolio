/*
 * Copyright (C) 2021–2022 Cervon Wong.
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const AboutMe = () =>
  import(/* webpackChunkName: "about_me" */ "@/views/AboutMe.vue");
const ProjectShowcase = () =>
  import(
    /* webpackChunkName: "project_showcase" */ "@/views/ProjectShowcase.vue"
  );
const ProjectStoryMint = () =>
  import(
    /* webpackChunkName: "project_story_mint" */ "@/views/ProjectStoryMint.vue"
  );
const ProjectStoryCervonwongCom = () =>
  import(
    /* webpackChunkName: "project_story_cervonwong_com" */ "@/views/ProjectStoryCervonwongCom.vue"
  );
const Gallery = () =>
  import(/* webpackChunkName: "gallery" */ "@/views/Gallery.vue");
const BlogCatalog = () =>
  import(/* webpackChunkName: "blog_catalog" */ "@/views/BlogCatalog.vue");
const BlogPost = () =>
  import(/* webpackChunkName: "blog_post" */ "@/views/BlogPost.vue");
const Resume = () =>
  import(/* webpackChunkName: "resume" */ "@/views/Resume.vue");
const Contact = () =>
  import(/* webpackChunkName: "contact" */ "@/views/Contact.vue");
const AboutSite = () =>
  import(/* webpackChunkName: "about_site" */ "@/views/AboutSite.vue");
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
    path: "/projects/mint",
    name: "Project story Mint",
    component: ProjectStoryMint,
  },
  {
    path: "/projects/cervonwong-com",
    name: "Project story cervonwong.com",
    component: ProjectStoryCervonwongCom,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/blog",
    name: "Blog catalog",
    component: BlogCatalog,
  },
  {
    path: "/blog/:category/:slug",
    name: "Blog post",
    component: BlogPost,
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
    path: "/about-site",
    name: "About site",
    component: AboutSite,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
