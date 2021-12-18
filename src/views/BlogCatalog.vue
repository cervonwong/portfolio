<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <header>
        <h1>Blog</h1>
        <button
          v-if="!filterOptionsVisible"
          class="filter-button"
          @click="showFilterOptions"
        >
          <span class="material-icons-sharp">filter_list</span>
          Filter
        </button>
        <div v-else class="filter-options">
          <button
            class="filter-option-button filter-option-button--project"
            @click="hideFilterOptions"
          >
            Project
          </button>
          <button
            class="filter-option-button filter-option-button--ui"
            @click="hideFilterOptions"
          >
            UI design
          </button>
          <button
            class="filter-option-button filter-option-button--ux"
            @click="hideFilterOptions"
          >
            UX design
          </button>
          <button
            class="filter-option-button filter-option-button--web"
            @click="hideFilterOptions"
          >
            Web dev
          </button>
        </div>
      </header>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Blog Catalog",
  data() {
    return {
      filterOptionsVisible: false,
    };
  },
  methods: {
    showFilterOptions() {
      this.filterOptionsVisible = true;
    },
    hideFilterOptions() {
      this.filterOptionsVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout-push-footer;
}

.margin-wrapper {
  @include bp-content-width-normal;

  margin-top: 2.5rem; /* 40px */
  margin-bottom: 15rem;

  @include bp-tablet-and-up {
    margin-top: 3.75rem; /* 60px */
  }

  @include bp-laptop-and-up {
    margin-top: 5rem; /* 80px */
  }
}

h1 {
  @include h1--standard;

  margin-bottom: 1.25rem;
  @include bp-laptop-and-up {
    margin-bottom: 1.875rem;
  }
}

.filter-button {
  @include button--outlined-icon-left-16;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-option-button {
  @include button--outlined-16;
}
</style>
