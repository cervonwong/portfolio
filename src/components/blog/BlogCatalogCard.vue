<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <router-link
    :to="{
      name: 'Blog post',
      params: { category: post.category.toLowerCase(), slug: post.slug },
    }"
  >
    <article>
      <img
        :src="'/blog-images/' + post.imageFileName"
        :alt="post.imageAltText"
        width="3"
        height="2"
      />
      <div class="content">
        <div class="metadata">
          <span class="collection-tag">{{ post.category }}</span>
          <time class="posted-date" :datetime="post.postedIso"
            >{{ post.posted }}
          </time>
        </div>
        <h2>{{ post.title }}</h2>
      </div>
    </article>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogCatalogCard",
  props: ["post"],
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

a {
  text-decoration: none;
  display: block;
  border: $border-width solid $border-black;
  border-radius: $border-radius-16;
  height: 100%;

  transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1); // Ease in out cubic
  &:hover,
  &:focus-visible {
    transform: translateY(-0.8rem) scale(1.02);
    box-shadow: 0 12px 24px 0 $shadow-black;
  }
}

img {
  aspect-ratio: 3/2;
  border-radius: $border-radius-16 - $border-width $border-radius-16 -
    $border-width 0 0;
  margin-bottom: 1rem;
}

.content {
  padding: 0 1rem;
}

.metadata {
  display: flex;
  justify-content: space-between;
}

.collection-tag {
  background-color: $primary-black;
  color: $primary-white;
  padding: 0.125rem 0.375rem;
  font-size: 0.8125rem;
  font-weight: bold;
  border-radius: 0.25rem;
}

.posted-date {
  font-size: 0.8125rem;
}

h2 {
  font-size: 1.375rem;
}
</style>
