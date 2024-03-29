<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }" class="logo">Cervon Wong</router-link>
      <div
        :class="
          mobileNavOpen
            ? 'mobile-nav-layout-wrapper mobile-nav-open'
            : 'mobile-nav-layout-wrapper'
        "
      >
        <ul class="link-list">
          <li>
            <button class="close-mobile-nav-button" @click="closeMobileNav">
              <span class="material-icons-sharp close-mobile-nav-icon"
                >close</span
              >
            </button>
          </li>
          <li>
            <router-link
              :to="{ name: 'Home' }"
              class="link link--home"
              @click="closeMobileNav"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'About me' }"
              class="link link--about-me"
              @click="closeMobileNav"
              >About me</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Project showcase' }"
              class="link link--projects"
              @click="closeMobileNav"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Gallery' }"
              class="link link--gallery"
              @click="closeMobileNav"
              >Gallery</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Blog catalog' }"
              class="link link--blog"
              @click="closeMobileNav"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Resume' }"
              class="link link--resume"
              @click="closeMobileNav"
              >Résumé</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Contact' }"
              class="link link--contact"
              @click="closeMobileNav"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
      <button class="open-mobile-nav-button" @click="openMobileNav">
        <span class="material-icons-sharp">menu</span>
      </button>
    </nav>
    <div class="bottom-divider"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return { mobileNavOpen: false };
  },
  methods: {
    openMobileNav() {
      this.mobileNavOpen = true;
      this.$emit("mobile-nav-opened");
    },
    closeMobileNav() {
      this.mobileNavOpen = false;
      this.$emit("mobile-nav-closed");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

nav {
  @include layout--main-margin-horz-nav-bar;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem; /* 64px */
}

.logo {
  text-decoration: none;
  font-size: 1.375rem; /* 22px */
  font-weight: bold;

  &:hover {
    font-style: normal;
  }
}

.mobile-nav-layout-wrapper {
  @include bp--tablet-and-down {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    overflow: auto;
    background-color: $primary-black;
    padding-top: 4rem;
    padding-bottom: 4rem;

    transform: translateY(-100%);
    transition: transform 0.7s cubic-bezier(0.32, 0, 0.67, 0); // Ease in cubic
  }
}

.mobile-nav-open {
  transform: translateY(0%);
  transition: transform 0.7s cubic-bezier(0.33, 1, 0.68, 1); // Ease out cubic
}

.link-list {
  @include util--reset-list;
  align-items: center;

  @include bp--tablet-and-down() {
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    row-gap: 0.5rem; /* 8px */
    font-size: 2.635rem; /* 42px */

    @include bp--small-tablet-and-up {
      font-size: 3rem; /* 48px */
    }

    @include bp--tablet-and-up {
      font-size: 3.375rem; /* 54px */
    }
  }

  @include bp--laptop-and-up {
    font-size: 1.125rem; /* 18px */
  }
}

.link {
  text-decoration: none;
  font-weight: 500;

  @include bp--tablet-and-down() {
    @include layout--main-margin-horz-nav-bar;
    color: $primary-white;

    &:hover {
      text-decoration-line: underline;
      text-decoration-color: $primary-white;
    }

    &:focus-visible {
      outline-color: $primary-white;
    }
  }

  @include bp--laptop-and-up {
    &:hover {
      text-decoration-line: underline;
      text-decoration-color: $primary-black;
    }

    &--home {
      display: none;
    }

    &--about-me,
    &--projects,
    &--gallery,
    &--blog,
    &--resume {
      &::after {
        display: inline-block;
        content: "/";
        margin: 0 0.625rem; /* 10px */
      }
    }
  }
}

.close-mobile-nav-button {
  background-color: transparent;
  border: none;

  &:focus-visible {
    outline-color: $primary-white;
  }

  @include bp--laptop-and-up {
    display: none;
  }
}

.close-mobile-nav-icon {
  color: $primary-white;
  font-size: 1.2em; /* 1.2 times larger than links */
}

.open-mobile-nav-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: transparent;
  border: none;

  @include bp--laptop-and-up {
    display: none;
  }
}

.bottom-divider {
  background-color: $primary-black;
  height: 0.0625rem; /* 1px */
}
</style>
