<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <!--suppress HtmlUnknownAnchorTarget -->
  <a href="#!" class="wrapper">
    <img
      src="../../assets/images/blog/sample/article_image_1.png"
      alt="A sample article image."
    />
    <div class="content">
      <div class="metadata">
        <span class="collection-tag">Project</span>
        <time class="last-updated-date" datetime="2021-12-14"
          >December 14, 2021</time
        >
      </div>
      <h2>This is a short title</h2>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogCatalogCard",
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

.wrapper {
  display: block;
  text-decoration: none;
  border: $border-width solid $primary-black;
  border-radius: $border-radius-16;

  transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1),
    box-shadow 0.3s cubic-bezier(0.65, 0, 0.35, 1);
  &:hover {
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
