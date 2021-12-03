<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="line-length-limit-wrapper">
      <h1>Uh-oh, where did the page go?! (404)</h1>
      <p>
        I'm sorry, it looks like the page is gone for good. Anyway, let's
        <router-link :to="{ name: 'Home' }"
          >head back to the homepage</router-link
        >. <br /><br />You can also explore each section of the site via the
        navigation bar at the top of the page.
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  components: {},
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include bp-content-width-normal;
  @include layout-push-footer;

  margin-top: 2.5rem; /* 40px */
  margin-bottom: 15rem;

  @include bp-tablet-and-up {
    margin-top: 3.75rem; /* 60px */
  }

  @include bp-laptop-and-up {
    margin-top: 5rem; /* 80px */
  }
}

.line-length-limit-wrapper {
  @include p--18;
  @include layout-limit-chars-per-line(60);
}

h1 {
  @include h1--standard;
  margin-bottom: 1em;
}

p,
a {
  @include p--18;
}
</style>
