<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <article>
    <div class="image-group">
      <img
        :src="'/project-images/' + project.images.primary.fileName"
        :alt="project.images.primary.altText"
        class="primary-image"
        width="3"
        height="2"
      />
      <img
        :src="'/project-images/' + project.images.secondary.fileName"
        :alt="project.images.secondary.altText"
        class="secondary-image"
        width="3"
        height="2"
      />
      <img
        :src="'/project-images/' + project.images.tertiary.fileName"
        :alt="project.images.tertiary.altText"
        class="tertiary-image"
        width="3"
        height="2"
      />
    </div>
    <h2 class="name-title">{{ project.name }}</h2>
    <div class="content">
      <p class="description">{{ project.description }}</p>
      <div class="quick-details">
        <h3 class="quick-details-title">Quick details:</h3>
        <div class="chips">
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">date_range</span
            >{{ project.dateRange }}</span
          >
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">{{
              project.creatorsMultiple ? "groups" : "person"
            }}</span
            >{{ project.creators }}</span
          >
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">lightbulb</span
            >{{ project.idea }}</span
          >
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">flag</span
            >{{ project.status }}</span
          >
          <span
            v-for="skill in project.skills"
            :key="skill"
            class="chip skill-chip"
            >{{ skill }}</span
          >
        </div>
      </div>
      <div class="button-group">
        <router-link :to="{ name: project.storyRouteName }" class="story-button"
          >View {{ project.name }}'s story<span class="material-icons-sharp"
            >east</span
          ></router-link
        >
        <router-link :to="{ name: 'Gallery' }" class="gallery-button"
          >View gallery<span class="material-icons-sharp"
            >east</span
          ></router-link
        >
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectShowcaseMajorProjectArticle",
  props: ["project"],
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

.image-group {
  @include bp--tablet-and-up {
    display: grid;
    grid-template-areas:
      "primary secondary"
      "primary tertiary";
    grid-template-columns: auto calc((200% - 5rem) / 6);
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
}

.primary-image {
  @include bp--tablet-and-up {
    grid-area: primary;
  }
}

.secondary-image,
.tertiary-image {
  display: none;

  @include bp--tablet-and-up {
    display: unset;
  }
}

.secondary-image {
  @include bp--tablet-and-up {
    grid-area: secondary;
  }
}

.tertiary-image {
  @include bp--tablet-and-up {
    grid-area: tertiary;
  }
}

.content {
  display: grid;

  @include bp--tablet-and-up {
    grid-template-areas:
      "description quick-details"
      "button-group quick-details";
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
  }
}

.name-title {
  margin-bottom: 0.5em;
}

.description {
  margin: 0;

  @include bp--tablet-and-up {
    grid-area: description;
  }
}

.quick-details {
  @include bp--tablet-and-up {
    grid-area: quick-details;
  }
}

.quick-details-title {
  display: none;

  @include bp--tablet-and-up {
    display: unset;
    @include p--16;
    font-weight: 500;
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;

  margin-top: 1rem;
  @include bp--tablet-and-up {
    margin-top: 0.75rem;
  }
}

.chip {
  @include p--16;
  padding: 0.28em 1em;
  border-radius: 0.5em;
  border: $border-width solid $border-gray;
}

.attribute-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5em;
  padding: 0.28em 1em 0.28em 0.83em;
}

.chip-icon {
  @include p--18;
}

.button-group {
  @include bp--tablet-and-up {
    grid-area: button-group;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.story-button {
  @include button--outlined-icon-right-16;
}

.gallery-button {
  @include button--outlined-icon-right-16;
}
</style>
