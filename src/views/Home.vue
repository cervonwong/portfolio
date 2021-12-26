<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <section class="section-intro">
      <h1>Hi! I'm a front-end developer and UI/UX designer from Singapore.</h1>
      <p class="intro-subtitle">Scroll to learn more about what I do!</p>
      <a href="#about" class="intro-scroll-anchor">
        <span class="material-icons-sharp">south</span>
      </a>
    </section>

    <section id="about" class="section-about-me">
      <div class="line-length-limit-wrapper">
        <h2>I'm Cervon Wong,</h2>
        <p class="p--large">
          a high school student with a passion for creating meaningful and
          enjoyable experiences.
        </p>
        <p>
          My journey began when I learnt to build a simple text-based Python
          game when I was twelve. I was intrigued by how fun and fulfilling it
          was to code and design things.
        </p>
        <p>
          Fast forward to today, and I'm still seeking new knowledge in
          front-end and design. I'm always on the lookout for technologies to
          learn! (Currently learning Vue.js).
        </p>
        <router-link :to="{ name: 'About me' }" class="about-me-link">
          Learn more about me
          <span class="material-icons-sharp">east</span>
        </router-link>
      </div>
    </section>

    <section class="section-skills">
      <h2>Technical skills</h2>
      <SkillList></SkillList>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillList from "@/components/home/SkillList.vue";

export default defineComponent({
  name: "Home",
  components: { SkillList },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout--push-footer;
}

section {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-bottom-normal;
}

.section-intro {
  @include layout--main-margin-top-normal;
}

.intro-subtitle {
  @include p--18;
}

.intro-scroll-anchor {
  @include button--filled-icon-only-20;
  text-decoration: none;
}

.line-length-limit-wrapper {
  @include p--16;
  @include layout--limit-chars-per-line(60);
}

.about-me-link {
  @include button--outlined-icon-right-16-18;
  text-decoration: none;
  margin-top: 0.75em;
}

h1 {
  @include h1--standard;
}

h2 {
  font-size: 2rem;
  font-weight: bold;

  @include bp--laptop-and-up {
    font-size: 2.625rem; /* 42px */
  }
}

.p--large {
  @include p--22;
}

p {
  @include p--16;
}
</style>
