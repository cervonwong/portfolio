<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <div class="wrapper" :style="{ overflow: canScroll ? 'unset' : 'hidden' }">
    <NavBar
      @mobile-nav-opened="disableScroll"
      @mobile-nav-closed="enableScroll"
    ></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/shared/NavBar.vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
  components: { NavBar, Footer },
  data() {
    return { canScroll: true };
  },
  methods: {
    disableScroll() {
      this.canScroll = false;
    },
    enableScroll() {
      this.canScroll = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
