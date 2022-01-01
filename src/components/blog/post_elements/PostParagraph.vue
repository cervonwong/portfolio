<!--
  - Copyright (C) 2021–2022 Cervon Wong.
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
  @include p--post;
}
</style>
