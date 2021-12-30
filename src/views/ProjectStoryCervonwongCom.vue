<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>cervonwong.com's story [WIP]</h1>
        <p>This page is currently incomplete.</p>
        <p>
          This page might show the full process of how and why cervonwong.com
          was conceptualised and created, along with the challenges faced, what
          I learnt, and so on.
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
  name: "ProjectStoryCervonwongCom",
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

p {
  @include p--18;
}
</style>
