<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <NavBar></NavBar>

    <section class="section-cta">
      <h1>
        Hi, I am a
        <a href="#" class="cta-link">front-end developer</a> and
        <a href="#" class="cta-link">UI/UX designer</a>, dabbling in
        <a href="#" class="cta-link">back-end development</a> and
        <a href="#" class="cta-link">machine learning</a>.
      </h1>
      <button class="cta-button">
        <span class="cta-button-content-wrapper"
          ><span>Check out my projects</span
          ><span class="material-icons-sharp">east</span></span
        >
      </button>
    </section>

    <section class="section-about-me">
      <div class="line-length-limit-wrapper">
        <h2>I'm Cervon Wong</h2>
        <p class="p--large">
          a high school student interested in developing real-world
          applications.
        </p>
        <p>
          In my free time, I like to stare at typography for hours. Currently, I
          am learning how to develop websites with Vue.js.
        </p>
        <a href="#"
          >P.S. This website was built from the ground-up in Vue.js.</a
        >
      </div>
    </section>

    <section class="section-skills">
      <h2>Technical Skills</h2>
      <SkillChips></SkillChips>
    </section>

    <Footer></Footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/shared/NavBar.vue";
import Footer from "@/components/shared/Footer.vue";
import SkillChips from "@/components/home/SkillChips.vue";

export default defineComponent({
  name: "Home",
  components: { NavBar, Footer, SkillChips },
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

.cta-link:hover {
  font-style: italic;
  background-color: $primary-black;
  color: $primary-white;
}

.cta-button {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem; /* 12px 24px */
  background-color: $primary-black;
  color: $primary-white;
  border: 0.125rem solid $primary-black; /* 2px */
  border-radius: 99rem;
  margin-top: 0.5rem;

  @include bp-laptop-and-up {
    font-size: 1.25rem; /* 20px */
    padding: 1rem 2rem;
  }

  &:hover {
    background-color: $primary-white;
    color: $primary-black;
  }
}

.cta-button-content-wrapper {
  display: flex;
  align-items: center;
  column-gap: 0.75rem; /* 12px */

  @include bp-laptop-and-up {
    column-gap: 1rem;
  }
}

.material-icons-sharp {
  font-size: 1.25rem; /* 20px */
  font-style: inherit;

  @include bp-laptop-and-up {
    font-size: 1.5rem; /* 24px */
  }
}

.line-length-limit-wrapper {
  max-width: 25rem; /* 400px */
}

h1,
.cta-link {
  font-size: 2rem;
  font-weight: bold;

  @include bp-tablet-and-up {
    font-size: 2.75rem; /* 44px */
  }

  @include bp-laptop-and-up {
    font-size: 3.5rem; /* 56px */
  }
}

h2 {
  font-size: 2rem;
  font-weight: bold;

  @include bp-laptop-and-up {
    font-size: 2.625rem; /* 42px */
  }
}

.p--large {
  font-size: 1.375rem; /* 22px */

  @include bp-laptop-and-up {
    font-size: 1.625rem; /* 26px */
  }
}

p,
a {
  font-size: 1rem;

  @include bp-laptop-and-up {
    font-size: 1.125rem; /* 18px */
  }
}
</style>
