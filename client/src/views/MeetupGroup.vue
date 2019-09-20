<template>
  <div class="meetup-group">
    <group-header />
    <hr class="divider" />
    <group-nav />
    <div class="group-main">
      <div class="group-row">
        <div class="group-column group-column--main">
          <router-view />
        </div>
      </div>
      <related-topics />
      <related-meetups />
    </div>
  </div>
</template>

<script>
import GroupHeader from "@/components/meetup/group/Header";
import GroupNav from "@/components/meetup/group/Nav";
import RelatedTopics from "@/components/meetup/group/RelatedTopics";
import RelatedMeetups from "@/components/meetup/group/RelatedMeetups";

export default {
  name: "meetup-group",
  components: {
    GroupHeader,
    GroupNav,
    RelatedTopics,
    RelatedMeetups
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style";

.divider {
  border-bottom: none;
  margin: 0;
}

.group {
  &-main {
    background-color: darken($white-color, 3%);
    padding: 1.5rem;

    @include largeDevices {
      padding: 2.5rem 5rem;
    }
  }

  &-row {
    display: flex;
  }

  &-column {
    &--main {
      flex-basis: 70%;
    }

    &--upcoming {
      flex-basis: 30%;
    }
  }
}
</style>
