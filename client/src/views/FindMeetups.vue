<template>
  <div class="find-meetups">
    <find-meetups-header :meetup-type="meetupType" />
    <search-meetups />
    <suggested-meetups />
    <not-found :meetup-type="meetupType" />
  </div>
</template>

<script>
import FindMeetupsHeader from "@/components/meetup/find/Header";
import SearchMeetups from "@/components/meetup/find/SearchMeetups";
import SuggestedMeetups from "@/components/meetup/find/Suggested";
import NotFound from "@/components/meetup/find/NotFound";

export default {
  components: {
    FindMeetupsHeader,
    SearchMeetups,
    SuggestedMeetups,
    NotFound
  },
  data() {
    return {
      meetups: [],
      newLocation: {},
      meetupType: this.$route.params.type,
      loading: 0
    };
  },
  watch: {
    "$route.params.type"(meetupType) {
      this.meetupType = meetupType;
    }
  }
};
</script>

<style lang="scss" scoped>
$body-color: #353e48;

.find-meetups {
  background-color: lighten($body-color, 70%);
  flex: 1;
}
</style>
