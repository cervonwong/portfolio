<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <NavBar></NavBar>

  <main>
    <h1>Uh-oh, where did the page go?! (404)</h1>
    <p>
      I'm sorry, it looks like the page is gone for good. Anyway, let's
      <router-link :to="{ name: 'Home' }">head back to the homepage</router-link
      >. <br /><br />You can also explore each section of the site via the
      navigation bar at the top of the page.
    </p>
  </main>

  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/shared/NavBar.vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
  name: "NotFound",
  components: { Footer, NavBar },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include bp-content-width-normal;
  flex: 1; /* Allows sticky footer */

  margin-top: 2.5rem; /* 40px */
  margin-bottom: 15rem;

  @include bp-tablet-and-up {
    margin-top: 3.75rem; /* 60px */
  }

  @include bp-laptop-and-up {
    margin-top: 5rem; /* 80px */
  }
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1em;

  @include bp-small-tablet-and-up {
    font-size: 2.375rem; /* 38px */
  }

  @include bp-tablet-and-up {
    font-size: 2.75rem; /* 44px */
  }

  @include bp-laptop-and-up {
    font-size: 3.5rem; /* 56px */
  }
}

p,
a {
  font-size: 1.125rem; /* 18px */

  @include bp-laptop-and-up {
    font-size: 1.375rem; /* 22px */
  }
}
</style>
