<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <section class="section-cta">
      <h1>
        Hi, I am a
        <!--suppress HtmlUnknownAnchorTarget -->
        <a href="#!" class="cta-link">front-end developer</a> and
        <!--suppress HtmlUnknownAnchorTarget -->
        <a href="#!" class="cta-link">UI/UX designer</a>, dabbling in
        <!--suppress HtmlUnknownAnchorTarget -->
        <a href="#!" class="cta-link">back-end development</a> and
        <!--suppress HtmlUnknownAnchorTarget -->
        <a href="#!" class="cta-link">machine learning</a>.
      </h1>
      <button class="cta-button">
        Check out my projects
        <span class="material-icons-sharp">east</span>
      </button>
    </section>

    <section class="section-about-me">
      <div class="line-length-limit-wrapper">
        <h2>I'm Cervon Wong,</h2>
        <p class="p--large">
          a high school student passionate about developing real-world
          applications.
        </p>
        <p>
          In my free time, I like to stare at typography for hours. Currently, I
          am learning how to develop websites with Vue.js.
        </p>
        <!--suppress HtmlUnknownAnchorTarget -->
        <a href="#!"
          >P.S. This website was built from the ground-up in Vue.js.</a
        >
      </div>
    </section>

    <section class="section-skills">
      <h2>Technical Skills</h2>
      <SkillChips></SkillChips>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillChips from "@/components/home/SkillChips.vue";

export default defineComponent({
  name: "Home",
  components: { SkillChips },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout-push-footer;
}

section {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-bottom-normal;
}

.section-cta {
  @include layout--main-margin-top-normal;
}

.cta-link:hover {
  background-color: $primary-black;
  color: $primary-white;
}

.cta-button {
  @include p--18;

  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 0.75em 1.5em;
  background-color: $primary-black;
  color: $primary-white;
  border: $border-width solid $border-black;
  border-radius: $border-radius-stadium;
  margin-top: 0.5rem;
  column-gap: 0.75em;

  &:hover {
    background-color: $primary-white;
    color: $primary-black;
  }
}

.material-icons-sharp {
  font-size: 1.25em;
  font-style: inherit;
}

.line-length-limit-wrapper {
  @include p--16;
  @include layout-limit-chars-per-line(60);
}

h1,
.cta-link {
  @include h1--standard;
}

h2 {
  font-size: 2rem;
  font-weight: bold;

  @include bp-laptop-and-up {
    font-size: 2.625rem; /* 42px */
  }
}

.p--large {
  @include p--22;
}

p,
a {
  @include p--16;
}
</style>
