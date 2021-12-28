<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <header>
    <div class="post-image-wrapper">
      <img
        :src="'/blog-images/' + post.imageFileName"
        :alt="post.imageAltText"
      />
    </div>
    <div class="line-length-limit-wrapper">
      <span class="category-label">{{ post.category }}</span>
      <h1 class="title">
        {{ post.title }}
      </h1>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <div class="metadata">
        <span class="author-label">By Cervon Wong</span>
        <br />
        <span class="posted-date-label"
          >Posted
          <time :datetime="post.postedIso"> {{ post.posted }}</time></span
        >
        <br />
        <span
          v-if="post.postedIso !== post.lastUpdatedIso"
          class="last-updated-date-label"
          >(Updated
          <time :datetime="post.lastUpdatedIso"> {{ post.lastUpdated }}</time
          >)</span
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostHeader",
  props: ["post"],
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/global";

header {
  margin-bottom: 4rem;
  @include bp--laptop-and-up {
    margin-bottom: 5rem;
  }
}

.line-length-limit-wrapper {
  @include p--post;
  @include layout--limit-chars-per-line($line-char-limit--post);
}

img {
  display: block;
  width: 100%;
}

.post-image-wrapper {
  margin-bottom: 2rem;

  @include bp--small-tablet-and-down {
    @include layout--main-margin-horz-small-inverse;
  }

  @include bp--tablet-and-up {
    margin-top: 2rem;
  }
  @include bp--large-laptop-and-up {
    margin-top: 3.5rem;
  }
}

.category-label {
  color: $secondary-black;
  font-weight: 500;

  font-size: 1rem;
  @include bp--tablet-and-up {
    font-size: 1.125rem;
  }
  @include bp--laptop-and-up {
    font-size: 1.25rem;
  }
}

.title {
  font-weight: 500;
  margin-top: 0.25rem;

  margin-bottom: 0.75rem;
  @include bp--tablet-and-up {
    margin-bottom: 1rem;
  }

  font-size: 2rem;
  line-height: 1.2;
  @include bp--small-tablet-and-up {
    font-size: 2.25rem;
  }
  @include bp--tablet-and-up {
    font-size: 2.5rem;
  }
  @include bp--laptop-and-up {
    font-size: 3rem;
    line-height: 1.1;
  }
}

.subtitle {
  margin-top: 0.75rem;

  margin-bottom: 0.75rem;
  @include bp--tablet-and-up {
    margin-bottom: 1rem;
  }

  font-size: 1.25rem;
  @include bp--tablet-and-up {
    font-size: 1.375rem;
  }
  @include bp--laptop-and-up {
    font-size: 1.5rem;
  }
}

.metadata {
  color: $secondary-black;
  font-size: 0.875rem;
  @include bp--tablet-and-up {
    font-size: 0.9375rem;
  }
  @include bp--laptop-and-up {
    font-size: 1rem;
  }
}

.author-label {
  font-style: unset;
}
</style>
