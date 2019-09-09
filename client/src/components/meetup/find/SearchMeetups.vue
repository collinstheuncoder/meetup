<template>
  <div class="search-meetups">
    <div class="search-box">
      <input class="input" type="text" placeholder="All Meetups" />
      <button class="button">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="search-location" v-if="isInputDisplayed">
      <search-location :location="location" />
    </div>
    <p class="coverage" v-else>
      within
      <span title="Click to change coverage" @click="changeCoverage"
        >5 miles</span
      >
      of
      <span title="Click to change location" @click="changeLocation">{{
        currentLocation.name
      }}</span>
    </p>
    <div class="button-grp">
      <button class="button button--full">Groups</button>
      <button class="button button--outline">Calendar</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SearchLocation from "../../shared/SearchLocation";

export default {
  name: "search-meetups",
  components: {
    SearchLocation
  },
  data() {
    return {
      newLocation: {},
      isInputDisplayed: false
    };
  },
  computed: {
    ...mapGetters(["currentLocation"])
  },
  methods: {
    changeCoverage() {
      //...
    },
    changeLocation() {
      this.isInputDisplayed = true;
      //this.changeUserLocation();
    }
  }
};
</script>

<style lang="scss" scoped>
$body-color: #0f1721;
$text-color: #ffffff;

/* Button Mixin */
@mixin buttonStyle($bg-color: $body-color, $color: $text-color) {
  background-color: $bg-color;
  color: $color;
}

.search-meetups {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -2rem 10rem auto;
  padding: 0 1rem;
  height: 5rem;
  background-color: $body-color;

  .search-box {
    flex-basis: 35%;

    .input {
      height: 2.3rem;
      width: 12.5rem;
      padding-left: 0.5rem;
      outline: none;
      border: 1px solid;
      border-right: none;

      &:focus {
        outline: none;
      }
    }

    .button {
      height: 2.32rem;
      width: 2.35rem;
      background: $text-color;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  .coverage {
    color: $text-color;
    margin: 0 0 0 -5rem;
    flex-basis: 30%;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .button-grp {
    border: 1px solid darken($text-color, 70%);

    .button {
      height: 2.3rem;
      width: 7.5rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &--full {
        @include buttonStyle(darken($text-color, 70%));

        &:active {
          @include buttonStyle($body-color, darken($text-color, 70%));
        }
      }

      &--outline {
        @include buttonStyle($body-color, darken($text-color, 70%));

        &:active {
          @include buttonStyle(darken($text-color, 70%));
        }
      }
    }
  }
}

.search-location {
  max-width: 15rem;
}
</style>
