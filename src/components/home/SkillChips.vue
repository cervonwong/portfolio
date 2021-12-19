<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <div class="wrapper">
    <span
      v-for="(chipData, index) in data"
      :key="index"
      :class="chipData.type === 'Category' ? 'span--category' : 'span--skill'"
    >
      {{ chipData.label }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillChips",
  data() {
    return {
      data: [
        { label: "Front-end", type: "Category" },
        { label: "Flutter", type: "Skill" },
        { label: "Android dev", type: "Skill" },
        { label: "Web dev", type: "Skill" },
        { label: "Dart", type: "Skill" },
        { label: "Vue.js", type: "Skill" },
        { label: "HTML", type: "Skill" },
        { label: "JavaScript", type: "Skill" },
        { label: "TypeScript", type: "Skill" },
        { label: "CSS", type: "Skill" },
        { label: "Sass", type: "Skill" },
        { label: "JavaFX", type: "Skill" },
        { label: "Back-end", type: "Category" },
        { label: "Java", type: "Skill" },
        { label: "SQL", type: "Skill" },
        { label: "SQLite", type: "Skill" },
        { label: "Firebase", type: "Skill" },
        { label: "Web hosting", type: "Skill" },
        { label: "Serverless", type: "Skill" },
        { label: "UI / UX", type: "Category" },
        { label: "Figma", type: "Skill" },
        { label: "Mobile design", type: "Skill" },
        { label: "Web design", type: "Skill" },
        { label: "Accessibility", type: "Skill" },
        { label: "Responsive", type: "Skill" },
        { label: "AI / ML", type: "Category" },
        { label: "Python", type: "Skill" },
        { label: "NumPy", type: "Skill" },
        { label: "Pandas", type: "Skill" },
        { label: "TensorFlow", type: "Skill" },
        { label: "Keras", type: "Skill" },
        { label: "Tools / Env", type: "Category" },
        { label: "Git", type: "Skill" },
        { label: "GitHub", type: "Skill" },
        { label: "Windows", type: "Skill" },
        { label: "VSCode", type: "Skill" },
        { label: "IntelliJ", type: "Skill" },
        { label: "Jupyter", type: "Skill" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";

div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

span {
  @include p--16;
  border: $border-width solid $border-black; /* 1.5px */
  padding: 0.375em 1em;
  border-radius: $border-radius-stadium;
}

.span--category {
  background-color: $primary-black;
  color: $primary-white;
  font-weight: bold;
}
</style>
