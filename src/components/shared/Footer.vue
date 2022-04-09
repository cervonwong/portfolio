<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <footer>
    <div class="content-wrapper">
      <div class="line-length-limit-wrapper">
        <nav>
          <router-link :to="{ name: 'Home' }" class="logo-anchor"
            ><h2>Cervon Wong</h2></router-link
          >
          <p>
            Thanks for dropping by my personal portfolio site. This site has no
            ads, no third-party cookies, no pop-ups, no auto-playing videos, and
            loads fast!
          </p>
          <p>
            Learn
            <router-link :to="{ name: 'Project story cervonwong.com' }"
              >how I built this site from scratch</router-link
            >
            in my blog post. Check out the
            <a
              href="https://github.com/cervonwong/portfolio"
              target="_blank"
              rel="noopener"
              >source code on GitHub</a
            >.
          </p>
          <p>
            Looking for something more fun and casual? Visit
            <a href="https://play.cervonwong.com" target="_blank" rel="noopener"
              >my online playground</a
            >.
          </p>
          <p>
            I hang out in various parts of the internet:
            <br />
            <a
              href="https://www.linkedin.com/in/cervonwong/"
              target="_blank"
              rel="noopener"
              class="social-anchor"
              ><span class="fab fa-linkedin"></span>LinkedIn</a
            >
            <a
              href="https://github.com/cervonwong"
              target="_blank"
              rel="noopener"
              class="social-anchor"
              ><span class="fab fa-github"></span>GitHub</a
            >
            <a
              href="https://stackoverflow.com/users/13432136/cervonwong"
              target="_blank"
              rel="noopener"
              class="social-anchor"
              ><span class="fab fa-stack-overflow"></span>Stack Overflow</a
            >
          </p>
          <ul>
            <li>
              <router-link
                :to="{ name: 'About me' }"
                class="list-anchor list-anchor--about-me"
                >About me</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Blog catalog' }"
                class="list-anchor list-anchor--blog"
                >Blog</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Contact' }"
                class="list-anchor list-anchor--contact"
                >Contact</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'About site' }"
                class="list-anchor list-anchor--about-site"
                >About this site</router-link
              >
            </li>
          </ul>
        </nav>
        <p>
          © 2021–2022 Cervon Wong.
          <br />
          Last updated <time :datetime="lastUpdatedIso">{{ lastUpdated }}</time
          >.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import siteInfo from "../../assets/data/site_info.json";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      lastUpdated: siteInfo.lastUpdated,
      lastUpdatedIso: siteInfo.lastUpdatedIso,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

footer {
  background-color: $primary-black;
}

.content-wrapper {
  @include layout--main-margin-horz-normal;
  padding-top: 3rem; /* 48px */
  padding-bottom: 3rem; /* 48 px */
}

.line-length-limit-wrapper {
  @include p--14;
  @include layout--limit-chars-per-line($line-char-limit--60);
}

h2,
p,
a {
  color: $primary-white;
}

.logo-anchor {
  text-decoration: none;
}

h2 {
  font-size: 2rem; /* 32px */
  font-weight: bold;

  @include bp--laptop-and-up() {
    font-size: 2.625rem; /* 42px */
  }
}

a:focus-visible {
  outline-color: $primary-white;
}

p,
a {
  font-size: inherit;
}

.fab {
  font-size: 1.5rem;
  margin-right: 0.25rem;
  vertical-align: bottom;
}

.social-anchor {
  margin-right: 1rem;
}

ul {
  @include util--reset-list;
  flex-wrap: wrap;
}

.list-anchor--about-me,
.list-anchor--blog,
.list-anchor--contact {
  &::after {
    display: inline-block;
    content: "/";
    margin: 0 0.625rem; /* 10px */
  }
}
</style>
