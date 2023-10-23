<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <div class="home-wrapper">
    <div class="rods">
      <div class="rod"></div>
      <div class="rod"></div>
    </div>
    <h1>Cervon Wong's Portfolio</h1>
    <p class="p1">
      Hi! I’m Cervon Wong. I’m graduating from NUS High School this year and I
      plan to pursue Computer Science in university.
    </p>
    <p class="p2">
      I’ll update this portfolio site in Winter 2023. Till then, you can visit
      my LinkedIn and other sites to learn more about what I do.
    </p>
    <div class="button-row">
      <a
        class="button-link"
        :href="'/resume/Cervon Wong - Resume (2023-07-09 CS Public).pdf'"
        target="_blank"
        rel="noopener"
        >Download résumé</a
      >
      <a
        class="button-link"
        href="https://links.cervonwong.com"
        target="_blank"
        rel="noopener"
        >Visit my other sites</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewHome",
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

.home-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe01b;
}

.rods {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: min(60%, 30rem);
}

.rod {
  background-color: #d9d9d9;
  width: 1.3rem;
  height: 5rem;
  border: black 0.2rem solid;
  border-bottom: none;
  border-top: none;
}

h1 {
  font-family: Fraunces, serif;
  font-weight: 600;
  font-variation-settings: "SOFT" 50, "WONK" 0;
  text-align: center;
  line-height: 1.2;

  border: black 0.2rem solid;
  background-color: white;
  margin: 0 1rem;
  border-radius: 100rem;

  box-shadow: 0.3rem 0.3rem 0 0 #000;

  font-size: 2rem;
  @include bp--small-tablet-and-up {
    font-size: 2.4rem;
  }
  @include bp--tablet-and-up {
    font-size: 2.8rem;
  }
  @include bp--laptop-and-up {
    font-size: 3.3rem;
  }

  padding: 1rem 1rem;
  @include bp--small-tablet-and-up {
    padding: 1.3rem 2rem;
  }
  @include bp--tablet-and-up {
    padding: 1.4rem 3.1rem;
  }
  @include bp--laptop-and-up {
    padding: 1.5rem 3.5rem;
  }
}

p {
  display: block;
  font-family: Commissioner, sans-serif;
  font-weight: 550;
  line-height: 1.5;
  text-align: center;

  margin: 2rem 0;

  padding: 1rem 10%;
  @include bp--small-tablet-and-up {
    padding: 2rem 15%;
  }
  @include bp--tablet-and-up {
    padding: 2rem 25%;
  }
  @include bp--laptop-and-up {
    padding: 2rem 30%;
  }

  font-size: 1rem;
  @include bp--small-tablet-and-up {
    font-size: 1.2rem;
  }
  @include bp--tablet-and-up {
    font-size: 1.3rem;
  }
  @include bp--laptop-and-up {
    font-size: 1.3rem;
  }
}

.p1 {
  margin-bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
}

.p2 {
  margin-top: 0;
}

.button-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 1rem;
}

.button-link {
  font-family: Commissioner, sans-serif;
  font-weight: 600;
  text-decoration: none;

  background-color: white;
  border: black 0.15rem solid;
  border-radius: 100rem;

  padding: 0.6rem 1.5rem;
  @include bp--laptop-and-up {
    padding: 0.8rem 1.8rem;
  }

  font-size: 1rem;
  @include bp--small-tablet-and-up {
    font-size: 1.2rem;
  }
  @include bp--tablet-and-up {
    font-size: 1.3rem;
  }
  @include bp--laptop-and-up {
    font-size: 1.3rem;
  }

  transition: box-shadow 0.4s, transform 0.4s;
  box-shadow: 0 0 0 0 #000;
  &:hover {
    transition: box-shadow 0.2s, transform 0.4s;
    box-shadow: 0.3rem 0.3rem 0 0 #000;
    transform: translate(-0.3rem, -0.3rem);
  }
  &:active {
    transition: box-shadow 0.1s, transform 0.1s;
    box-shadow: 0.1rem 0.1rem 0 0 #000;
    transform: translate(0, 0);
  }
}
</style>
