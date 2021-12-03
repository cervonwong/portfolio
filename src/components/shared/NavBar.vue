<!--
  - Copyright (C) 2021 Cervon Wong.
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
            <a href="#" class="link link--non-last" @click="closeMobileNav"
              >About Me</a
            >
          </li>
          <li>
            <a href="#" class="link link--non-last" @click="closeMobileNav"
              >Projects</a
            >
          </li>
          <li>
            <a href="#" class="link link--non-last" @click="closeMobileNav"
              >Blog</a
            >
          </li>
          <li>
            <a href="#" class="link link--non-last" @click="closeMobileNav"
              >Résumé</a
            >
          </li>
          <li>
            <a
              href="https://play.cervonwong.com"
              target="_blank"
              class="link link--non-last"
              @click="closeMobileNav"
              >Playground</a
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Contact' }"
              class="link"
              @click="closeMobileNav"
              >Contact
            </router-link>
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
    },
    closeMobileNav() {
      this.mobileNavOpen = false;
    },
  },
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

  &:hover {
    font-style: normal;
  }
}

.mobile-nav-layout-wrapper {
  @include bp-tablet-and-down {
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
    transition: transform 0.5s ease-in;
  }
}

.mobile-nav-open {
  transform: translateY(0%);
}

.link-list {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding-left: 0;

  @include bp-tablet-and-down() {
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    row-gap: 0.5rem; /* 8px */
  }

  @include bp-laptop-and-up {
  }
}

.link {
  text-decoration: none;
  font-size: 1.125rem; /* 18px */
  font-weight: 500;

  @include bp-tablet-and-down() {
    @include bp-content-width-nav-bar;
    color: $primary-white;
    font-size: 2.635rem; /* 42px */

    @include bp-small-tablet-and-up {
      font-size: 3rem; /* 48px */
    }

    @include bp-tablet-and-up {
      font-size: 3.375rem; /* 54px */
    }
  }

  @include bp-laptop-and-up {
    &:hover {
      text-decoration: underline solid $primary-black 0.0625rem; /* 1px */
    }

    &--home {
      display: none;
    }

    &--non-last {
      &::after {
        display: inline-block;
        content: "/";
        margin: 0 0.625rem; /* 10px */
      }

      &:hover::after {
        font-style: normal;
      }
    }
  }
}

.close-mobile-nav-button {
  background-color: transparent;
  border: none;
}

.close-mobile-nav-icon {
  color: $primary-white;
  font-size: 3.5rem; /* 56px */
}

.open-mobile-nav-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: transparent;
  border: none;

  @include bp-laptop-and-up {
    display: none;
  }
}

.bottom-divider {
  background-color: $primary-black;
  height: 0.0625rem; /* 1px */
}
</style>
