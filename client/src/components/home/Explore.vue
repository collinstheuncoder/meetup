<template>
  <div class="explore">
    <h2 class="heading-two">Explore by category</h2>
    <div class="categories">
      <router-link 
        :to="{path: `find${category.path}`}"
        v-for="category in categories" 
        :key="category.name"
        class="category"
        :style="{ backgroundImage: `url(${category.imgUrl})` }"
      >
        <p class="category-name">{{ category.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { categories } from "@/helpers";

export default {
  name: "explore",
  data() {
    return {
      categories
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.explore {
  padding: 1.5rem;

  @include mediumDevices {
    padding: 1.5rem 3.5rem;
  }

  @include largeDevices {
    padding: 1.5rem 5rem;
  }
}

.heading-two {
  text-align: left;
  font-size: 1.5rem;
  margin-top: 0;
  color: lighten($text-color, 40%);
  
  @include mediumDevices {
    margin-top: 1.25rem;
  }
}

.categories {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @include mediumDevices {
    grid-template-columns: repeat(3, 1fr);
  }

  @include largeDevices {
    grid-template-columns: repeat(4, 1fr);
  }
}

.category {
  position: relative;
  height: 15rem;
  border-radius: 0.35rem;
  background-position: center center;
  background-size: cover;
  
  &-name {
    position: absolute;
    left: 1rem;
    bottom: 0.5rem;
    margin: 0;
    color: lighten($text-color, 100%);
    font-weight: 600;
    margin-top: 0.25rem;
  }

  @include largeDevices {
    height: 12.5rem;
  }
  
  &:hover * {
    color: $link-color;
  }
}
</style>
