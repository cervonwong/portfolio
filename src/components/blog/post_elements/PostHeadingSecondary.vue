<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <h3 class="post-heading-secondary"><slot></slot></h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostHeadingSecondary",
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/global";

.post-heading-secondary {
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
