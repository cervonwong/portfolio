<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <section class="section-cta">
      <h1>
        Hi, I am a
        <a href="/" class="section-cta__link">front-end developer</a> and
        <a href="/" class="section-cta__link">UI/UX designer</a>, dabbling in
        <a href="/" class="section-cta__link">back-end development</a> and
        <a href="/" class="section-cta__link">machine learning</a>.
      </h1>
      <div class="section-cta__button-group">
        <button class="section-cta__button section-cta__button--filled">
          View my projects here
        </button>
        <button class="section-cta__button section-cta__button--outlined">
          Download résumé
        </button>
      </div>
    </section>

    <section class="section-about-me">
      <h2>I'm Cervon Wong</h2>
      <p class="p--large">
        a high school student interested in developing real-world applications.
      </p>
      <p>
        In my free time, I like to stare at typography for hours. Currently, I
        am learning how to develop websites with Vue.js.
      </p>
      <a href="/">P.S. This website was built from the ground-up in Vue.js.</a>
    </section>

    <section class="section-skills">
      <h2>Technical Skills</h2>
      <SkillChips></SkillChips>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillChips from "../components/home/SkillChips.vue";

export default defineComponent({
  name: "Home",
  components: { SkillChips },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

section {
  @include bp-content-width-normal;
  margin-bottom: 7.5rem; /* 120px */
}

.section-cta {
  margin-top: 2.5rem; /* 40px */
}

.section-cta__link:hover {
  font-style: italic;
  background-color: $primary-black;
  color: $primary-white;
}

.section-cta__button-group {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-cta__button {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 0.125rem solid $primary-black; /* 2px */
  border-radius: 99rem;
  margin-top: 0.5rem;
}

.section-cta__button--filled {
  background-color: $primary-black;
  color: $primary-white;

  &:hover {
    font-style: italic;
    text-decoration: underline solid $primary-white 0.0625rem; /* 1px */
  }
}

.section-cta__button--outlined {
  background-color: $primary-white;
  color: $primary-black;

  &:hover {
    font-style: italic;
    text-decoration: underline solid $primary-black 0.0625rem; /* 1px */
  }
}

h1,
h2 {
  font-size: 2rem;
  font-weight: bold;
}

.p--large {
  font-size: 1.375rem; /* 22px */
}
</style>
