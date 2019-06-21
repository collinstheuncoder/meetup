<template>
  <div class="meetup-location">
    <img
      class="image"
      src="../../../assets/images/globe.svg"
      alt="Meetup Location"
    />
    <div class="location">
      <p class="location--step">Step 1 of 4</p>
      <h3 class="location--heading">
        What's your new Meetup Group's hometown?
      </h3>
      <div class="location--input">
        <search-location :location="location" v-if="isInputDisplayed" />
      </div>
      <p class="location--change">
        <span><i class="fas fa-map-marker-alt"></i> </span>
        {{ currentLocation.name }}
        <span @click="changeLocation">(change)</span>
      </p>
      <button class="location--button" @click="saveLocation">Next</button>
    </div>
  </div>
</template>

<script>
import SearchLocation from "../../shared/SearchLocation";

import { currentLocation } from "../../../graphql/queries";

import { mapGetters } from "vuex";

export default {
  name: "meetup-location",
  components: {
    SearchLocation
  },
  props: {
    addMeetupInfo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      location: {},
      isInputDisplayed: false
    };
  },
  computed: {
    ...mapGetters(["currentLocation"])
  },
  methods: {
    changeLocation() {
      this.isInputDisplayed = true;
    },
    saveLocation() {
      this.isInputDisplayed = false;

      this.addMeetupInfo(
        {
          location: this.location
        },
        { two: true }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/style";

.meetup-location {
  display: flex;
}

.image {
  width: 2rem;
  align-self: flex-start;

  @include mediumDevices {
    width: 3rem;
  }
}

.location {
  margin-left: 2rem;

  &--heading,
  &--change {
    font-size: 1.25rem;
    color: lighten($text-color, 30%);
    padding: 0.5rem 0;
    margin: 0;

    @include mediumDevices {
      font-size: 1.5rem;
    }

    @include largeDevices {
      font-size: 1.75rem;
    }
  }

  &--heading {
    @include mediumDevices {
      margin: 1rem 0;
    }
  }

  &--step {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: lighten($text-color, 80%);

    @include mediumDevices {
      font-size: 0.85rem;
    }
  }

  &--input {
    margin-right: 1.5rem;

    @include mediumDevices {
      margin-right: 0;
    }
  }

  &--change {
    span {
      &:last-of-type {
        font-size: 0.85rem;
        color: $link-color;
        cursor: pointer;
      }
    }
  }

  &--button {
    background-color: $main-color;
    padding: 0.5rem 2rem;
    border: none;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0.5rem 0;
    cursor: pointer;

    @include mediumDevices {
      margin: 1rem 0;
      font-size: 1rem;
    }

    &:focus,
    &:hover {
      background-color: darken($main-color, 5%);
      outline: none;
    }
  }
}
</style>
