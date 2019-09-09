<template>
  <div class="home-header">
    <h1 class="heading-one">What do you love?</h1>
    <p class="paragraph">Do more of it with Meetup</p>
    <router-link v-show="!isAuthenticated" class="button" to="/accounts/signup"
      >Sign up</router-link
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home-header",
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.home-header {
  background-image: url("../../assets/images/party.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $white-color;

  @include mediumDevices {
    min-height: 55vh;
  }

  @include largeDevices {
    min-height: 65vh;
  }
}

.heading-one {
  font-size: 2rem;
  margin-bottom: 0;

  @include mediumDevices {
    font-size: 2.5rem;
  }

  @include largeDevices {
    font-size: 3rem;
  }
}

.paragraph {
  font-size: 1rem;
  margin-top: 1rem;

  @include mediumDevices {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 2rem;
  }

  @include largeDevices {
    font-size: 1.5rem;
  }
}

.button {
  color: $white-color;
  background-color: $main-color;
  padding: 0.5rem 2rem;
  font-size: 0.85rem;

  @include mediumDevices {
    padding: 0.75rem 4.5rem;
    font-size: 1rem;
  }

  @include largeDevices {
    padding: 1rem 6rem;
  }
}
</style>
