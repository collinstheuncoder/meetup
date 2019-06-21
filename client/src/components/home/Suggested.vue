<template>
  <div class="suggested">
    <div class="heading">
      <h2 class="heading-two">Popular Meetups nearby</h2>
      <router-link class="heading-link" to="/find">See all</router-link>
    </div>
    <div class="meetup-thumbnails"><meetup-thumbnail /></div>
  </div>
</template>

<script>
import MeetupThumbnail from "../shared/MeetupThumbnail";

export default {
  name: "suggested",
  components: {
    meetupThumbnail: MeetupThumbnail
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.suggested {
  padding: 1.5rem;

  @include mediumDevices {
    padding: 1.5rem 3.5rem;
  }

  @include largeDevices {
    padding: 1.5rem 5rem;
  }
}

.heading {
  display: flex;
  justify-content: space-between;

  @include mediumDevices {
    align-items: center;
  }

  &-two {
    font-size: 1.35rem;
    color: lighten($text-color, 40%);
    margin-top: 0;

    @include mediumDevices {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }

  &-link {
    color: $link-color;
  }
}

// .meetup-thumbnails {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// }
</style>
