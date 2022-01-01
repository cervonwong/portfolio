<!--
  - Copyright (C) 2021–2022 Cervon Wong.
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
  @include h3--writing;
}
</style>
