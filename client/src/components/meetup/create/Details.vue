<template>
  <div class="meetup-description">
    <img class="image" src="../../../assets/images/tag.svg" alt="People" />
    <div class="description">
      <p class="description--step">Step 3 of 4</p>
      <h3 class="description--heading">What will your Meetup's name be?</h3>
      <div class="description--input">
        <input class="description--meetup-name" type="text" v-model="name" />
      </div>
      <h3 class="description--heading">
        Describe who should join, and what your Meetup will do.
      </h3>
      <p class="description--show-examples">
        Want some inspiration?
        <span @click="showExamples"> Check out these examples</span>.
      </p>
      <transition name="fade">
        <div class="description--examples" v-show="areExamplesDisplayed">
          <template v-for="x in [0, 1, 2]">
            <p class="example" :key="x">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi accusantium tenetur, voluptatem asperiores quis iusto
              laboriosam, ab repudiandae numquam soluta doloremque molestiae
              voluptatibus dolore ratione. Dicta tempore, quae aliquid atque!
            </p>
          </template>
        </div>
      </transition>
      <div class="description--input">
        <textarea
          class="description--meetup-desc"
          v-model="description"
          cols="30"
          rows="8"
        >
Meetup description</textarea
        >
      </div>
      <div class="description--meetup-image">
        <label for="">Link to Meetup Image</label>
        <div class="description--input">
          <input type="text" v-model="imageUrl" />
        </div>
      </div>
      <div class="description--meetup-dates">
        <div class="date-grp">
          <label for="">Event Start</label>
          <datetime class="theme-red" type="datetime" v-model="eventStart" />
        </div>
        <div class="date-grp">
          <label for="">Event End</label>
          <datetime class="theme-red" type="datetime" v-model="eventEnd" />
        </div>
      </div>
      <button class="description--button" @click="saveMeetupDetails">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Datetime } from "vue-datetime";

export default {
  name: "meetup-details",
  components: {
    datetime: Datetime
  },
  props: {
    addMeetupInfo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      name: "",
      description: "",
      imageUrl: "",
      eventStart: "",
      eventEnd: "",
      areExamplesDisplayed: false
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "user/currentUser"
    })
  },
  methods: {
    showExamples() {
      return (this.areExamplesDisplayed = !this.areExamplesDisplayed);
    },
    saveMeetupDetails() {
      this.addMeetupInfo(
        {
          details: {
            name: this.name.trim(),
            hostedBy: "5ae1f437474e7116ac30511c",
            description: this.description.trim(),
            imageUrl: this.imageUrl.trim() || "https://i.imgur.com/E5yG11X.jpg",
            eventStart: this.eventStart,
            eventEnd: this.eventEnd
          }
        },
        { four: true }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/style";

.meetup-description {
  display: flex;
}

.image {
  width: 2rem;
  align-self: flex-start;

  @include mediumDevices {
    width: 3rem;
  }
}

.description {
  margin-left: 2rem;
  width: 100%;

  &--step,
  &--list,
  &--show-examples,
  &--examples {
    font-size: 0.85rem;
  }

  &--meetup-name,
  &--meetup-desc,
  &--meetup-image input {
    width: 100%;
    background-color: lighten($text-color, 95%);
    padding: 0.25rem;
    padding-left: 1rem;
    box-shadow: none;
    border: 1px solid lighten($text-color, 90%);

    &:focus,
    &:hover {
      background-color: transparent;
      outline: none;
    }
  }

  &--heading {
    color: lighten($text-color, 30%);
    margin: 0;
    padding: 0.5rem 0;

    @include mediumDevices {
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    @include largeDevices {
      font-size: 1.75rem;
    }
  }

  &--step {
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase;
    color: lighten($text-color, 80%);

    @include mediumDevices {
      font-size: 0.85rem;
    }
  }

  &--meetup-name,
  &--meetup-image input {
    height: 2rem;
  }

  &--input {
    margin-right: 1.5rem;

    @include mediumDevices {
      margin-right: 0;
    }
  }

  &--show-examples {
    span {
      color: $link-color;
      cursor: pointer;
    }
  }

  &--examples {
    background-color: lighten($text-color, 80%);
    display: flex;
    justify-content: space-evenly;
    padding: 0 0.65rem;
    margin-bottom: 1rem;
    width: 100%;

    @at-root .example {
      flex-basis: 30%;
    }
  }

  &--meetup-desc {
    overflow: hidden;
    resize: none;
  }

  &--meetup-image {
    margin-top: 1rem;

    label {
      font-weight: 600;
      color: lighten($text-color, 30%);
    }

    input {
      margin-top: 0.5rem;
    }
  }

  &--meetup-dates {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;

    @include mediumDevices {
      flex-direction: row;
    }

    @at-root .date-grp {
      flex-basis: 100%;
      margin: 0;

      @include mediumDevices {
        flex-basis: 50%;
      }

      &:first-child {
        @include mediumDevices {
          margin-left: 0;
        }
      }

      label {
        font-weight: 600;
        color: lighten($text-color, 30%);
      }
    }
  }

  &--button {
    background-color: $main-color;
    padding: 0.5rem 2rem;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0;
    cursor: pointer;

    &:focus,
    &:hover {
      background-color: darken($main-color, 5%);
      outline: none;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.event-datetime {
  height: 2rem;
  padding: 0.25rem 1rem;
  font-size: 0.75rem;
  background-color: #f2f2f2;
  border: 1px solid #e6e6e6;
  width: 100%;

  @include mediumDevices {
    width: auto;
  }
}

.theme-orange {
  .vdatetime-popup__header,
  .vdatetime-calendar__month__day--selected > span > span,
  .vdatetime-calendar__month__day--selected:hover > span > span {
    background-color: $main-color;
  }

  .vdatetime-year-picker__item--selected,
  .vdatetime-time-picker__item--selected,
  .vdatetime-popup__actions__button {
    color: $main-color;
  }
}
</style>
