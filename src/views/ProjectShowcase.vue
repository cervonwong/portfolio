<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <h1>Projects</h1>
      <ProjectShowcaseMajorArticle></ProjectShowcaseMajorArticle>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectShowcaseMajorArticle from "@/components/project_showcase/ProjectShowcaseMajorArticle.vue";

export default defineComponent({
  name: "ProjectShowcase",
  components: { ProjectShowcaseMajorArticle },
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
  @include h1--standard;
  margin-bottom: 1em;
}

p {
  @include p--18;
}
</style>
