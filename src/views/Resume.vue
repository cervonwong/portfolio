<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>Résumé</h1>
        <p>My résumé for Computer Science as of 9 July 2023.</p>
        <a
          :href="'/resume/Cervon Wong - Resume (2023-07-09 CS Public).pdf'"
          target="_blank"
          rel="noopener"
          >Download PDF.</a
        >
      </div>
      <a
        :href="'/resume/Cervon Wong - Resume (2023-07-09 CS Public).pdf'"
        target="_blank"
        rel="noopener"
      >
        <img
          :src="'/resume/Cervon Wong - Resume (2023-12-05 CS Public TwoCol).svg'"
          alt="Cervon Wong's Computer Science Résumé"
          width="595"
          height="842"
      /></a>
    </div>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
  name: "Resume",
  components: { Footer },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

iframe {
  width: 100%;
  aspect-ratio: 1/1.4;
}

img {
  margin-top: 4rem;
  border: $border-width solid $border-silver;
  box-shadow: 0 6px 12px 0 $shadow-black;
}

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-small;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-normal;
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
