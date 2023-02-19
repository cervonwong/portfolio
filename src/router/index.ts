/*
 * Copyright (C) 2021–2022 Cervon Wong.
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { nextTick } from "vue";

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
    meta: {
      title: "Cervon Wong - Front-end, UI/UX",
      description:
        "Hi! I'm a high school student, front-end developer and UI/UX designer. Come and explore my portfolio, projects, blog, and more!",
    },
  },
  {
    path: "/about",
    name: "About me",
    component: AboutMe,
    meta: {
      title: "About me - Cervon Wong",
      description:
        "Learn more about how I got into design and coding, what I do, my philosophy, interests and more!",
    },
  },
  {
    path: "/projects",
    name: "Project showcase",
    component: ProjectShowcase,
    meta: {
      title: "Projects - Cervon Wong",
      description:
        "Explore what software and design projects I have been up to in the past few years.",
    },
  },
  {
    path: "/projects/mint",
    name: "Project story Mint",
    component: ProjectStoryMint,
    meta: {
      title: "Mint's story - Cervon Wong",
      description:
        "Mint is a web app that enables trainees with mild intellectual disability to learn work skills independently.",
    },
  },
  {
    path: "/projects/cervonwong-com",
    name: "Project story cervonwong.com",
    component: ProjectStoryCervonwongCom,
    meta: {
      title: "cervonwong.com's story - Cervon Wong",
      description:
        "cervonwong.com is a Single Page Application (SPA) for visitors to view my portfolio and read my blog posts on guides, stories and research.",
    },
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
    meta: {
      title: "Gallery - Cervon Wong",
      description:
        "Feast your eyes on all the cool and aesthetic images of my projects.",
    },
  },
  {
    path: "/blog",
    name: "Blog catalog",
    component: BlogCatalog,
    meta: {
      title: "Blog - Cervon Wong",
      description:
        "Guides, stories, opinions, updates. I write all things related to software and design. Check it out!",
    },
  },
  {
    path: "/blog/:category/:slug",
    name: "Blog post",
    component: BlogPost,
    meta: {
      title: "Blog post - Cervon Wong",
      description: "A blog post.",
    },
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
    meta: {
      title: "Résumé - Cervon Wong",
      description:
        "Download a condensed, brief account of my education, qualifications, and so on.",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact - Cervon Wong",
      description:
        "Want to talk about my projects or found any errors on my site? If so, please contact me!",
    },
  },
  {
    path: "/about-site",
    name: "About site",
    component: AboutSite,
    meta: {
      title: "About this site - Cervon Wong",
      description:
        "Understand the technical details of this site: tech stack, compatibility, accessibility, licensing, and so on.",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not found",
    component: NotFound,
    meta: {
      title: "404 NOT FOUND - Cervon Wong",
      description: "I'm sorry, it looks like the page is gone for good.",
    },
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

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    description: string;
  }
}

const DEFAULT_TITLE = "Cervon Wong - Front-end, UI/UX";
const DEFAULT_DESCRIPTION =
  "Hi! I'm a high school student pursuing computer science and engineering. Come and explore my portfolio, projects, blog, and more!";
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", to.meta.description || DEFAULT_DESCRIPTION);
  });
});

export default router;
