<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <PostNotFound v-if="post === undefined"></PostNotFound>
  <component v-else :is="post.componentName" :post="post"></component>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import PostNotFound from "@/components/blog/PostNotFound.vue";
import blogIndex from "../assets/data/blog_index.json";

const PostOne = defineAsyncComponent(
  () => import("@/components/blog/posts/PostOne.vue")
);
const PostTwo = defineAsyncComponent(
  () => import("@/components/blog/posts/PostTwo.vue")
);
const PostThree = defineAsyncComponent(
  () => import("@/components/blog/posts/PostThree.vue")
);
const PostFour = defineAsyncComponent(
  () => import("@/components/blog/posts/PostFour.vue")
);

export default defineComponent({
  name: "BlogPost",
  computed: {
    post() {
      return blogIndex.find(
        (post) =>
          post.category.toLowerCase() === this.$route.params.category &&
          post.slug === this.$route.params.slug
      );
    },
  },
  components: { PostNotFound, PostOne, PostTwo, PostThree, PostFour },
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

h1 {
  @include h1--standard;
  margin-bottom: 1em;
}

p {
  @include p--18;
}
</style>
