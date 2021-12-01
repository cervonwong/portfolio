<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <NavBar></NavBar>

  <main>
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
          a high school student passionate about developing real-world
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
  </main>

  <Footer></Footer>
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

main {
  flex: 1; /* Allows sticky footer */
}

section {
  @include bp-content-width-normal;
  margin-bottom: 7.5rem; /* 120px */

  @include bp-tablet-and-up {
    margin-bottom: 9.5rem; /* 152px */
  }

  @include bp-laptop-and-up {
    margin-bottom: 11.25rem; /* 180px */
  }
}

.section-cta {
  margin-top: 2.5rem; /* 40px */

  @include bp-tablet-and-up {
    margin-top: 3.75rem; /* 60px */
  }

  @include bp-laptop-and-up {
    margin-top: 5rem; /* 80px */
  }
}

.cta-link:hover {
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
