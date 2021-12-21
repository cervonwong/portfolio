<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <article>
      <div class="article-inner-wrapper">
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
                <time :datetime="post.lastUpdatedIso">
                  {{ post.lastUpdated }}</time
                >)</span
              >
            </div>
          </div>
        </header>
        <div class="line-length-limit-wrapper">
          <p class="hook-paragraph">
            <strong>Hook paragraph.</strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquid blanditiis dignissimos dolorem
            error exercitationem ipsum laboriosam nobis vero vitae voluptatibus.
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
            odit optio perferendis, possimus quaerat, soluta totam. Animi,
            omnis?
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            et eum laborum magni molestiae nostrum numquam qui quia quisquam,
            voluptates!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            culpa cumque dolor dolorem dolores eaque earum iure, maxime
            necessitatibus non obcaecati odit, quis quisquam quo repellat
            repudiandae rerum, veritatis. Aspernatur.
          </p>
          <h2>Conclusion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            dolorum iusto labore natus nihil nobis omnis possimus quis quisquam
            sapiente? Cum dicta dolor fuga ipsam iusto minima nihil placeat ut?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            qui.
          </p>
        </div>
      </div>
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

.article-inner-wrapper {
  @include bp--laptop-and-up {
    max-width: 42.5rem;
  }
}

.line-length-limit-wrapper {
  @include layout--limit-chars-per-line(65);

  font-size: 1rem;
  @include bp--small-tablet-and-up {
    font-size: 1.125rem;
  }
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

header {
  margin-bottom: 4rem;
  @include bp--laptop-and-up {
    margin-bottom: 5rem;
  }
}

p {
  font-size: 1rem;
  @include bp--small-tablet-and-up {
    font-size: 1.125rem;
  }
}

h2 {
  font-weight: 500;

  font-size: 1.75rem;
  @include bp--small-tablet-and-up {
    font-size: 2rem;
  }
  @include bp--tablet-and-up {
    font-size: 2.25rem;
  }
  @include bp--laptop-and-up {
    font-size: 2.5rem;
  }
}

h3 {
  font-weight: bold;

  font-size: 1.5rem;
  @include bp--small-tablet-and-up {
    font-size: 1.625rem;
  }
  @include bp--tablet-and-up {
    font-size: 1.75rem;
  }
  @include bp--laptop-and-up {
    font-size: 1.875rem;
  }
}
</style>
