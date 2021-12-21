<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <article>
      <div class="article-inner-wrapper">
        <PostHeader :post="post"></PostHeader>
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
import PostHeader from "@/components/blog/post_elements/PostHeader.vue";

export default defineComponent({
  name: "PostOne",
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

.line-length-limit-wrapper {
  @include layout--limit-chars-per-line(65);

  font-size: 1rem;
  @include bp--small-tablet-and-up {
    font-size: 1.125rem;
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
