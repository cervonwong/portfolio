<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>Contact me</h1>
        <address>
          <p>
            Want to talk about my projects or found any errors on my site? If
            so, please
            <a href="mailto:hello@cervonwong.com">drop me an email</a>.
          </p>
        </address>
        <p>Thanks!</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
  components: {},
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout-push-footer;
}

.margin-wrapper {
  @include bp-content-width-normal;

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

address {
  font-style: unset;
}
</style>
