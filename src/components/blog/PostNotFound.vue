<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>Sorry, I can't find this blog post... (404)</h1>
        <p>Here are some possible reasons for this:</p>
        <ul>
          <li>The blog post has been shifted to a new location.</li>
          <li>The blog post has been deleted.</li>
          <li>You typed the address incorrectly.</li>
        </ul>
        <p>
          Not to worry, you can
          <router-link :to="{ name: 'Blog catalog' }"
            >take a look at some of my other posts</router-link
          >!
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostNotFound",
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-large;
}

.line-length-limit-wrapper {
  @include p--18;
  @include layout--limit-chars-per-line(60);
}

h1 {
  margin-bottom: 1em;
}

p,
a {
  @include p--18;
}
</style>
