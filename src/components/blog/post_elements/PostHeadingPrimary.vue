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
  @include h2--writing;
}
</style>
