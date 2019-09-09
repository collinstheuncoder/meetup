<template>
  <div class="how-it-works">
    <h2 class="heading-two">How Meetup Works</h2>
    <div class="row">
      <div class="column">
        <span class="column--icon"><i class="fas fa-search"></i></span>
        <div class="column--detail">
          <h3 class="heading-three">Discover Group</h3>
          <p>Discover local Meetups for all the things you love.</p>
          <router-link
            v-show="!isAuthenticated"
            class="link"
            to="/accounts/signup"
            >Sign up <span><i class="fas fa-arrow-right"></i></span
          ></router-link>
        </div>
      </div>
      <div class="column">
        <span class="column--icon"><i class="fas fa-plus"></i></span>
        <div class="column--detail">
          <h3 class="heading-three">Start Group</h3>
          <p>
            Create your own Meetup, and draw from a community of millions.
          </p>
          <router-link class="link" to="/create"
            >Create a Meetup <span><i class="fas fa-arrow-right"></i></span
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "how-it-works",
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.how-it-works {
  color: $white-color;
  background-color: $body-color;
  padding: 1.5rem;

  @include mediumDevices {
    padding: 1.5rem 3.5rem;
  }

  @include largeDevices {
    padding: 2.5rem 5rem;
  }
}

.heading-two {
  margin-top: 0;
}

.row {
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-direction: column;

  @include mediumDevices {
    flex-direction: row;
  }
}

.column {
  flex-basis: 100%;
  text-align: center;

  @include mediumDevices {
    flex-basis: 50%;
  }

  &--icon {
    padding: 0.5rem;
    text-align: center;
    display: block;

    @include mediumDevices {
      padding: 1rem;
    }
  }
}

.heading-three {
  margin-top: 0;
}

.svg-inline--fa,
.link {
  color: $link-color;
}

.svg-inline--fa {
  font-size: 2rem;

  @include mediumDevices {
    font-size: 2.75rem;
  }

  @include mediumDevices {
    font-size: 3.5rem;
  }

  &.fa-arrow-right {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
}
</style>
