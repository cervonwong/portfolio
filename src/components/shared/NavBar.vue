<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <header>
    <nav>
      <a href="#" class="logo">Cervon Wong</a>
      <ul>
        <li><a href="#" class="link link--non-last">About Me</a></li>
        <li><a href="#" class="link link--non-last">Projects</a></li>
        <li><a href="#" class="link link--non-last">Blogs</a></li>
        <li><a href="#" class="link link--non-last">Résumé</a></li>
        <li>
          <a
            href="https://play.cervonwong.com"
            target="_blank"
            class="link link--non-last"
            >Playground</a
          >
        </li>
        <li><a href="#" class="link">Contact</a></li>
      </ul>
      <a href="#" class="hamburger"
        ><span class="material-icons-sharp">menu</span></a
      >
    </nav>
    <div class="divider"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

nav {
  @include bp-content-width-nav-bar;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem; /* 64px */
}

.logo {
  text-decoration: none;
  font-size: 1.375rem; /* 22px */
  font-weight: bold;
}

.logo:hover {
  font-style: normal;
}

ul {
  display: none;
  list-style-type: none;
  padding-left: 0;

  @include bp-laptop-and-up {
    display: unset;
  }
}

li {
  display: inline-block;
}

.link {
  text-decoration: none;
  font-size: 1.125rem; /* 18px */
  font-weight: 500;
}

.link:hover {
  text-decoration: underline solid $primary-black 0.0625rem; /* 1px */
}

.link--non-last::after {
  display: inline-block;
  content: "/";
  margin: 0 0.625rem; /* 10px */
}

.link--non-last:hover::after {
  font-style: normal;
}

.divider {
  background-color: $primary-black;
  height: 0.0625rem; /* 1px */
}

.hamburger {
  display: flex;
  align-items: center;
  text-decoration: none;

  @include bp-laptop-and-up {
    display: none;
  }
}
</style>
