<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <div class="categories-wrapper">
    <div v-for="(category, index) in data" :key="index" class="category-group">
      <h3 class="category-label">{{ category.label }}</h3>
      <div class="skill-group">
        <span
          v-for="(skill, index) in category.skills"
          :key="index"
          class="skill"
        >
          {{ skill.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillList",
  data() {
    return {
      data: [
        {
          label: "Front-end",
          skills: [
            { label: "Flutter" },
            { label: "Android dev" },
            { label: "Web dev" },
            { label: "Dart" },
            { label: "Vue.js" },
            { label: "HTML" },
            { label: "JavaScript" },
            { label: "TypeScript" },
            { label: "CSS" },
            { label: "Sass" },
            { label: "JavaFX" },
          ],
        },
        {
          label: "Back-end",
          skills: [
            { label: "Java" },
            { label: "SQL" },
            { label: "SQLite" },
            { label: "Firebase" },
            { label: "Web hosting" },
            { label: "Serverless" },
          ],
        },
        {
          label: "UI/UX design",
          skills: [
            { label: "Figma" },
            { label: "Mobile design" },
            { label: "Web design" },
            { label: "Accessibility" },
            { label: "Responsiveness" },
          ],
        },
        {
          label: "Machine learning",
          skills: [
            { label: "Python" },
            { label: "NumPy" },
            { label: "Pandas" },
            { label: "TensorFlow" },
            { label: "Keras" },
          ],
        },
        {
          label: "Tools & environments",
          skills: [
            { label: "Git" },
            { label: "GitHub" },
            { label: "Windows" },
            { label: "VSCode" },
            { label: "IntelliJ" },
            { label: "Jupyter" },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

.categories-wrapper {
  display: grid;
  row-gap: 2rem;
  column-gap: 1rem;

  @include bp--tablet-and-up {
    grid-template-columns: 1fr 1fr;
  }
}

.category-label {
  font-weight: 500;
  margin: 0.4em 0;

  font-size: 1.5rem;
  @include bp--tablet-and-up {
    font-size: 1.75rem;
  }
}

.category-group {
  display: flex;
  flex-direction: column;
}

.skill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.skill {
  @include p--16;

  border: $border-width solid $border-black;
  padding: 0.2em 1em;
  border-radius: $border-radius-stadium;
}
</style>
