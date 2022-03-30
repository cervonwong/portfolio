<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>Résumé</h1>
        <p>My résumé for Computer Science as of 30 March 2022.</p>
      </div>
      <iframe
        :src="'/resume/CS_Resume_2022-03.pdf'"
        title="Cervon Wong's Computer Science Resume PDF."
      ></iframe>
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

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-small;
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
