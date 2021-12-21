<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <h2 class="post-heading-primary"><slot></slot></h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostHeadingPrimary",
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/global";

.post-heading-primary {
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
</style>
