<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <header>
        <h1>Blog</h1>
        <div class="filter-controls">
          <button
            v-if="!filterOptionsVisible"
            class="filter-button"
            aria-label="Show filter options"
            @click="showFilterOptions"
          >
            <span class="material-icons-sharp">filter_list</span>
            Filter
          </button>
          <div v-else class="filter-options">
            <button
              class="close-filter-options-button"
              aria-label="Hide filter options"
              @click="hideFilterOptions"
            >
              <span class="material-icons-sharp">close</span>
            </button>
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
        </div>
      </header>
      <ul class="post-list">
        <li v-for="post in blogIndex" :key="post.id" class="post-list-item">
          <BlogCatalogCard :post="post"></BlogCatalogCard>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogCatalogCard from "@/components/blog/BlogCatalogCard.vue";
import blogIndex from "../assets/data/blog_index.json";

export default defineComponent({
  name: "BlogCatalog",
  components: { BlogCatalogCard },
  data() {
    return {
      filterOptionsVisible: false,
      blogIndex,
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
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-large;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-normal;
}

h1 {
  @include h1--standard;

  margin-bottom: 1.25rem;
  @include bp--laptop-and-up {
    margin-bottom: 1.875rem;
  }
}

.filter-controls {
  margin-bottom: 1.5rem;
  @include bp--laptop-and-up {
    margin-bottom: 3rem;
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

.close-filter-options-button {
  @include button--outlined-icon-only-16;
}

.filter-option-button {
  @include button--outlined-16;
}

.post-list {
  @include util--reset-list;

  display: grid;
  gap: 2.25rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
}
</style>
