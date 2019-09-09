<template>
  <div class="header">
    <div v-if="meetupType">
      <h2 class="heading-two">{{ meetupName }} Meetups</h2>
      <p class="paragraph">
        <span>Find out what's happening in {{ meetupName }} Meetup</span>
        <br />
        <span>groups around the world and start meeting up</span>
        <br />
        <span>with the ones near you.</span>
      </p>
    </div>
    <div v-else>
      <h2 class="heading-two">Meetups are</h2>
      <p class="paragraph">
        <span>neighbors getting together to learn something,</span>
        <br />
        <span>do something, share something…</span>
      </p>
    </div>
    <router-link class="button" to="/accounts/signup" v-show="!isAuthenticated"
      >Sign me up!</router-link
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "find-meetup-header",
  props: {
    meetupType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      meetupName: this.$route.params.name
    };
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
    formattedMeetupType() {
      return this.meetupType
        .toLowerCase()
        .replace(/(^| )(\w)/g, firstLetter => firstLetter.toUpperCase());
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/style";

.header {
  background-color: $body-color;
  color: $white-color;
  padding: 2rem;
  height: 10rem;
  text-align: center;

  @include mediumDevices {
    padding: 2rem 6.5rem;
    height: 12.5rem;
  }

  @include largeDevices {
    padding: 2rem 10rem;
    text-align: left;
    height: 15rem;
  }
}

.heading-two {
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;

  @include mediumDevices {
    font-size: 2rem;
  }

  @include largeDevices {
    text-align: left;
    font-size: 2.5rem;
  }
}

.paragraph {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.button {
  display: inline-block;
  background-color: $white-color;
  color: $body-color;
  margin-top: 0.75rem;
  padding: 0.5rem 2rem;
  font-weight: 600;
}
</style>
