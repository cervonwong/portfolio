<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>Uh-oh, where did the page go?! (404)</h1>
        <p>
          I'm sorry, it looks like the page is gone for good. If you'd like, we
          could
          <router-link :to="{ name: 'Home' }"
            >head back to the homepage
          </router-link>
          .
        </p>
        <p>
          You can also explore each section of the site via the navigation bar
          at the top of the page.
        </p>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
  name: "NotFound",
  components: { Footer },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-large;
}

.line-length-limit-wrapper {
  @include p--18;
  @include layout--limit-chars-per-line($line-char-limit--60);
}

h1 {
  margin-bottom: 1em;
}

p,
a {
  @include p--18;
}
</style>
