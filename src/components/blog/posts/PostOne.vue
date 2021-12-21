<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <article>
      <header>
        <div class="post-image-wrapper">
          <img
            :src="'/blog-images/' + post.imageFileName"
            :alt="post.imageAltText"
          />
        </div>
        <span class="category-label">{{ post.category }}</span>
        <h1 class="title">
          {{ post.title }}
        </h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
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
      </header>
      <p class="hook-paragraph">
        <strong>Hook paragraph.</strong> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquid blanditiis dignissimos dolorem error
        exercitationem ipsum laboriosam nobis vero vitae voluptatibus.
      </p>
      <h2>First section</h2>
      <p>
        <strong>Body paragraphs.</strong> Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. A aperiam, blanditiis dolorum eligendi
        excepturi hic obcaecati quibusdam saepe ullam vero!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        adipisci beatae culpa cumque earum enim est et fuga magnam nobis non
        odit optio perferendis, possimus quaerat, soluta totam. Animi, omnis?
      </p>
      <h3>Subsection 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        ducimus illum itaque velit voluptatem? Deserunt doloremque earum ex
        iusto molestiae!
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <h3>Subsection 2</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et
        eum laborum magni molestiae nostrum numquam qui quia quisquam,
        voluptates!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa
        cumque dolor dolorem dolores eaque earum iure, maxime necessitatibus non
        obcaecati odit, quis quisquam quo repellat repudiandae rerum, veritatis.
        Aspernatur.
      </p>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostOne",
  props: ["post"],
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

img {
  display: block;
  width: 100%;
}

.post-image-wrapper {
  @include layout--main-margin-horz-small-inverse;
  margin-bottom: 2rem;
}

.category-label {
  color: $secondary-black;
  font-size: 1rem;
  font-weight: 500;
}

.title {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.subtitle {
  font-size: 1.25rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.metadata {
  color: $secondary-black;
  font-size: 0.875rem;
}

.author-label {
  font-style: unset;
}

header {
  margin-bottom: 4rem;
}

p {
  font-size: 1rem;
}

h2 {
  font-size: 1.75rem;
  font-weight: 500;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
