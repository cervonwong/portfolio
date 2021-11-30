<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <footer>
    <div class="content-wrapper">
      <div class="line-length-limit-wrapper">
        <h2 class="footer-heading">Cervon Wong</h2>
        <p>
          Thanks for dropping by my personal portfolio site. I built this site
          from scratch without templates or CMS. Check out the
          <a href="https://github.com/cervonwong/website-vue" target="_blank"
            >source code on GitHub</a
          >.
        </p>
        <p>
          Looking for something fun? Visit
          <a href="https://play.cervonwong.com" target="_blank"
            >my online playground</a
          >.
        </p>
        <a href="mailto:hello@cervonwong.com">hello@cervonwong.com</a>
        <p>
          Copyright (C) 2021 Cervon Wong.<br />Last updated {{ lastUpdated }}.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return { lastUpdated: "29 November 2021" };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

footer {
  background-color: black;
}

.content-wrapper {
  @include bp-content-width-normal;
  padding-top: 3rem; /* 48px */
  padding-bottom: 3rem; /* 48 px */
}

.line-length-limit-wrapper {
  max-width: 25rem; /* 400px */
}

h2,
p,
a {
  color: $primary-white;
}

h2 {
  font-size: 2rem; /* 32px */
  font-weight: bold;

  @include bp-laptop-and-up() {
    font-size: 2.625rem; /* 42px */
  }
}

p,
a {
  font-size: 0.875rem; /* 14px */

  @include bp-laptop-and-up() {
    font-size: 1rem;
  }
}
</style>
