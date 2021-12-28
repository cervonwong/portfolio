<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <article>
      <div class="article-inner-wrapper">
        <PostHeader :post="post"></PostHeader>
        <div class="line-length-limit-wrapper">
          <P_P class="hook-paragraph">
            <strong>Hook paragraph.</strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquid blanditiis dignissimos dolorem
            error exercitationem ipsum laboriosam nobis vero vitae voluptatibus.
          </P_P>
          <P_H1>First section</P_H1>
          <P_P>
            <strong>Body paragraphs.</strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. A aperiam, blanditiis dolorum eligendi
            excepturi hic obcaecati quibusdam saepe ullam vero!
          </P_P>
          <P_P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            adipisci beatae culpa cumque earum enim est et fuga magnam nobis non
            odit optio perferendis, possimus quaerat, soluta totam. Animi,
            omnis?
          </P_P>
          <P_H2>Subsection 1</P_H2>
          <P_P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            ducimus illum itaque velit voluptatem? Deserunt doloremque earum ex
            iusto molestiae!
          </P_P>
          <P_P>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</P_P>
          <P_H2>Subsection 2</P_H2>
          <P_P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            et eum laborum magni molestiae nostrum numquam qui quia quisquam,
            voluptates!
          </P_P>
          <P_P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            culpa cumque dolor dolorem dolores eaque earum iure, maxime
            necessitatibus non obcaecati odit, quis quisquam quo repellat
            repudiandae rerum, veritatis. Aspernatur.
          </P_P>
          <P_H1>Conclusion</P_H1>
          <P_P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            dolorum iusto labore natus nihil nobis omnis possimus quis quisquam
            sapiente? Cum dicta dolor fuga ipsam iusto minima nihil placeat ut?
          </P_P>
          <P_P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            qui.
          </P_P>
        </div>
      </div>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostHeader from "@/components/blog/post_elements/PostHeader.vue";
import PostParagraph from "@/components/blog/post_elements/PostParagraph.vue";
import PostHeadingPrimary from "@/components/blog/post_elements/PostHeadingPrimary.vue";
import PostHeadingSecondary from "@/components/blog/post_elements/PostHeadingSecondary.vue";

export default defineComponent({
  name: "PostTwo",
  props: ["post"],
  components: {
    P_P: PostParagraph,
    P_H1: PostHeadingPrimary,
    P_H2: PostHeadingSecondary,
    PostHeader,
  },
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
  @include layout--limit-chars-per-line($line-char-limit--post);

  font-size: 1rem;
  @include bp--small-tablet-and-up {
    font-size: 1.125rem;
  }
}
</style>
