<template>
  <div class="menu-bars" @click="showSideNav">
    <span class="bar bar--top"></span> <span class="bar bar--center"></span>
    <span class="bar bar--bottom"></span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "menu-bars",
  methods: {
    ...mapMutations(["openSideNav"]),
    showSideNav() {
      this.openSideNav();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.menu-bars {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  cursor: pointer;

  @include largeDevices {
    display: none;
  }
}

.bar {
  height: 0.175rem;
  width: 1.5rem;
  background-color: $main-color;

  &--center {
    margin: 0.25rem 0;
  }
}
</style>
