<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <!--suppress HtmlUnknownAnchorTarget -->
  <a href="#!">
    <article>
      <img
        :src="'/blog-images/' + article.imageFileName"
        :alt="article.imageAltText"
      />
      <div class="content">
        <div class="metadata">
          <span class="collection-tag">{{ article.category }}</span>
          <time class="last-updated-date" :datetime="article.lastUpdatedIso"
            >{{ article.lastUpdated }}
          </time>
        </div>
        <h2>{{ article.title }}</h2>
      </div>
    </article>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogCatalogCard",
  props: ["article"],
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

  transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1),
    box-shadow 0.3s cubic-bezier(0.65, 0, 0.35, 1);
  &:hover,
  &:focus-visible {
    transform: translateY(-0.8rem);
    box-shadow: 0 12px 24px 0 $shadow-black;
  }
}

img {
  display: block;
  max-width: 100%;
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

.last-updated-date {
  font-size: 0.8125rem;
}

h2 {
  font-size: 1.375rem;
}
</style>
