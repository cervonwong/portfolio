<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <article>
      <header>
        <h1>
          {{ post.title }}
        </h1>
        <address>Written by Cervon Wong</address>
        <time :datetime="post.lastUpdatedIso">{{ post.lastUpdated }}</time>
      </header>
      <h2>Component: PostFour</h2>
      <p>:)</p>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostFour",
  props: ["post"],
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/global";

main {
  @include layout--push-footer;
}

article {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-normal;
}
</style>
