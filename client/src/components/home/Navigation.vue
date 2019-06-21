<template>
  <div class="home-nav">
    <template v-for="link in links">
      <router-link
        class="meetup-link"
        :to="`find${link.path}`"
        :key="link.name"
        >{{ link.name }}</router-link
      >
    </template>
  </div>
</template>

<script>
import { links } from "@/helpers";

export default {
  name: "home-nav",
  data() {
    return {
      links
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.home-nav {
  display: none;
  padding: 1rem 5rem;
  border-bottom: 1px solid darken($white-color, 10%);

  @include largeDevices {
    display: flex;
    justify-content: space-between;
  }

  .meetup-link {
    background-color: darken($white-color, 15%);
    padding: 0.25rem 1.5rem;
    border-radius: 0.25rem;
    color: darken($white-color, 70%);
    font-size: 0.85rem;
    margin: 0 0.5rem; 

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
