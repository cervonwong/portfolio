<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <article>
    <div class="image-group">
      <img
        :src="'/project-images/' + images.primary.fileName"
        :alt="images.primary.altText"
        class="primary-image"
      />
      <img
        :src="'/project-images/' + images.secondary.fileName"
        :alt="images.secondary.altText"
        class="secondary-image"
      />
      <img
        :src="'/project-images/' + images.tertiary.fileName"
        :alt="images.tertiary.altText"
        class="tertiary-image"
      />
    </div>
    <h2 class="name-title">{{ name }}</h2>
    <div class="content">
      <p class="description">{{ description }}</p>
      <div class="quick-details">
        <h3 class="quick-details-title">Quick details:</h3>
        <div class="chips">
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">date_range</span
            >{{ date_range }}</span
          >
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">groups</span
            >{{ creators }}</span
          >
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">lightbulb</span
            >{{ idea }}</span
          >
          <span class="chip attribute-chip"
            ><span class="chip-icon material-icons-sharp">flag</span
            >{{ status }}</span
          >
          <span v-for="skill in skills" :key="skill" class="chip skill-chip">{{
            skill
          }}</span>
        </div>
      </div>
      <div class="button-group">
        <router-link :to="{ name: 'Project showcase' }" class="story-button"
          >View {{ name }}'s story<span class="material-icons-sharp"
            >east</span
          ></router-link
        >
        <router-link :to="{ name: 'Project showcase' }" class="gallery-button"
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
  name: "ProjectShowcaseMajorArticle",
  data() {
    return {
      name: "Mint",
      description:
        "A Progressive Web App (PWA) empowering café trainees with semi-illiteracy and mild intellectual disability to independently learn recipes",
      date_range: "July 2021–pending",
      creators: "2 co-creators",
      creators_multiple: true,
      idea: "Self-proposed",
      status: "Pending",
      skills: [
        "Accessibility",
        "PWA",
        "Cross-platform",
        "Web hosting",
        "UI design",
        "Version control",
      ],
      images: {
        primary: {
          fileName: "mint--featured-1.jpg",
          altText: "The home screen in Mint on a tablet form factor.",
        },
        secondary: {
          fileName: "mint--featured-2.jpg",
          altText:
            "The recipe step screen and congratulation screen in Mint on a phone form factor.",
        },
        tertiary: {
          fileName: "mint--featured-3.jpg",
          altText:
            "The instructor console screen in Mint on a tablet form factor.",
        },
      },
    };
  },
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
  align-items: start;
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
