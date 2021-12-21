<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <p class="post-paragraph"><slot></slot></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostParagraph",
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/global";

.post-paragraph {
  font-size: 1rem;
  @include bp--small-tablet-and-up {
    font-size: 1.125rem;
  }
}
</style>
