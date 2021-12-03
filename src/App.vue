<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <NavBar></NavBar>
  <router-view />
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/shared/NavBar.vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
  components: { NavBar, Footer },
});
</script>
