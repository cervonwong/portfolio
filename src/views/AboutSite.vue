<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>About this site</h1>
        <p>
          I decided to build this site in 2021 during the holidays. This site
          allows me to fully express myself and showcase my work with a more
          <em>personal</em> touch. (LinkedIn doesn't allow me to do that).
        </p>
        <p>
          I had a lot of fun designing and coding this site. I hope you find it
          interesting!
        </p>
        <p>
          This page will share more technical details about this site below.
        </p>
        <h2>People</h2>
        <p>
          <b>Cervon Wong</b> — I am the sole webmaster, coder and designer of
          this site.
          <router-link :to="{ name: 'Contact' }">Contact me</router-link> to
          discuss anything about this site.
        </p>
        <h2>Tech stack</h2>
        <p>A list of key technologies:</p>
        <dl>
          <dt>Web development framework</dt>
          <dd>Vue.js (Vue 3, Vue Router 4)</dd>
          <dt>Languages</dt>
          <dd>HTML, Sass, TypeScript</dd>
          <dt>Web hosting</dt>
          <dd>Firebase Hosting</dd>
          <dt>Domain registrar</dt>
          <dd>Google Domains</dd>
        </dl>
        <h2>Compatibility & testing</h2>
        <p>
          I write HTML and CSS compatible with the major browsers according to
          <a
            href="https://github.com/mdn/browser-compat-data"
            target="_blank"
            rel="noopener"
            >MDN's compatibility data</a
          >.
        </p>
        <p>
          <strong>Note:</strong> This site will not support Internet Explorer.
          (It's too much trouble).
        </p>
        <p>I test and verify that this site is functional on these browsers:</p>
        <ul>
          <li>Chrome</li>
          <li>Edge</li>
          <li>Firefox</li>
          <li>Chrome for Android</li>
          <li>Safari for iOS/iPadOS</li>
        </ul>
        <p>
          I test and verify that this site is functional on these operating
          systems:
        </p>
        <ul>
          <li>Android 10</li>
          <li>iOS 15</li>
          <li>iPadOS</li>
          <li>Windows 10, 11</li>
        </ul>
        <p>
          I test and verify that this site is functional on these devices (form
          factors and input methods):
        </p>
        <ul>
          <li>Laptop (Mouse + Keyboard)</li>
          <li>Laptop (Touchscreen)</li>
          <li>Laptop (Keyboard only)</li>
          <li>Tablet (Touchscreen only)</li>
          <li>Tablet (with Keyboard)</li>
          <li>Phone</li>
        </ul>
        <p>
          I <strong>have not tested</strong> that this site is functional with:
        </p>
        <ul>
          <li>Safari for macOS</li>
          <li>
            Screen readers (though I have ensured that this site is compliant
            with screen reader requirements)
          </li>
        </ul>
        <h2>Accessibility</h2>
        <p>
          This site passes all accessibility audits by
          <a
            href="https://web.dev/lighthouse-accessibility/"
            target="_blank"
            rel="noopener"
            >Google Chrome Lighthouse</a
          >.
        </p>
        <p>
          As this site is in its early stages, I have not verified that it is
          fully compliant with WCAG.
        </p>
        <h2>Licensing</h2>
        <p>
          The
          <a
            href="https://github.com/cervonwong/portfolio"
            target="_blank"
            rel="noopener"
            >source code in my GitHub repository</a
          >
          for this site is <strong>not open-sourced</strong>. You may view and
          fork the code, but you may not use or modify the code for any purpose.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutSite",
  components: {},
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-normal;
}

.line-length-limit-wrapper {
  @include p--16;
  @include layout--limit-chars-per-line($line-char-limit--regular);
}

dd {
  font-weight: bold;
}
</style>
