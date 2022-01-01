<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <suspense>
    <template #default>
      <div class="wrapper">
        <PostNotFound v-if="post === undefined"></PostNotFound>
        <component v-else :is="post.componentName" :post="post"></component>
        <Footer></Footer>
      </div>
    </template>
    <template #fallback></template>
  </suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import PostNotFound from "@/components/blog/PostNotFound.vue";
import blogIndex from "../assets/data/blog_index.json";
import Footer from "@/components/shared/Footer.vue";

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
  components: {
    Footer,
    PostNotFound,
    PostOne,
    PostTwo,
    PostThree,
    PostFour,
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.margin-wrapper {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-large;
}
</style>
