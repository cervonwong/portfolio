<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <h1>Projects</h1>
      <section class="major-projects-section">
        <ProjectShowcaseMajorProjectArticle
          v-for="project in projects"
          :key="project.name"
          :project="project"
        ></ProjectShowcaseMajorProjectArticle>
      </section>
      <div class="divider"></div>
      <h2>Minor projects</h2>
      <p>
        I'll add other minor projects down here in the future. Come back later!
      </p>
    </div>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectShowcaseMajorProjectArticle from "@/components/project_showcase/ProjectShowcaseMajorProjectArticle.vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
  name: "ProjectShowcase",
  components: { Footer, ProjectShowcaseMajorProjectArticle },
  data() {
    return {
      projects: [
        {
          name: "Mint",
          description:
            "A Progressive Web App (PWA) empowering café trainees with semi-illiteracy and mild intellectual disability to independently learn recipes",
          storyRouteName: "Project story Mint",
          date_range: "July 2021–pending",
          creators: "2 co-creators",
          creators_multiple: true,
          idea: "Self-proposed",
          status: "Pending",
          skills: [
            "Accessibility",
            "PWA",
            "Cross-platform",
            "Web hosting",
            "UI design",
            "Version control",
          ],
          images: {
            primary: {
              fileName: "mint--featured-1.jpg",
              altText: "The home screen in Mint on a tablet form factor.",
            },
            secondary: {
              fileName: "mint--featured-2.jpg",
              altText:
                "The recipe step screen and congratulation screen in Mint on a phone form factor.",
            },
            tertiary: {
              fileName: "mint--featured-3.jpg",
              altText:
                "The instructor console screen in Mint on a tablet form factor.",
            },
          },
        },
        {
          name: "cervonwong.com",
          description:
            "A Single Page Application (SPA) for visitors to view my portfolio and read my blog posts on guides, stories and research",
          storyRouteName: "Project story cervonwong.com",
          date_range: "Nov 2021–ongoing",
          creators: "Sole creator",
          creators_multiple: false,
          idea: "Self-initiated",
          status: "It’s live!",
          skills: [
            "SPA",
            "Web technologies",
            "Accessibility",
            "Content management",
            "SEO",
            "Web hosting",
            "Analytics",
            "UI design",
          ],
          images: {
            primary: {
              fileName: "image-placeholder.png",
              altText: "Placeholder image.",
            },
            secondary: {
              fileName: "image-placeholder.png",
              altText: "Placeholder image.",
            },
            tertiary: {
              fileName: "image-placeholder.png",
              altText: "Placeholder image.",
            },
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-small;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-normal;
}

h1 {
  margin-bottom: 1em;
}

.major-projects-section {
  display: flex;
  flex-direction: column;

  gap: 6.25rem;
  margin-bottom: 6.25rem;
  @include bp--tablet-and-up {
    gap: 8rem;
    margin-bottom: 8rem;
  }
}

.divider {
  height: $border-width;
  background-color: $border-gray;
}
</style>
