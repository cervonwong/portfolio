<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <article>
      <div class="article-inner-wrapper">
        <PostHeader :post="post"></PostHeader>
      </div>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostHeader from "@/components/blog/post_elements/PostHeader.vue";

export default defineComponent({
  name: "PostTwo",
  props: ["post"],
  components: { PostHeader },
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/global";

main {
  @include layout--push-footer;
}

article {
  @include layout--main-margin-horz-small;
  @include layout--main-margin-bottom-normal;
}

.article-inner-wrapper {
  @include bp--laptop-and-up {
    max-width: 42.5rem;
  }
}
</style>
