<template>
  <div class="meetup-topic">
    <img
      class="image"
      src="../../assets/images/text-bubbles.svg"
      alt="People"
    />
    <div class="topic">
      <p class="topic--step">Step 2 of 4</p>
      <h3 class="topic--heading">What will your Meetup be about?</h3>
      <div class="topic--input">
        <input
          class="topic--name"
          v-model="topicName"
          placeholder="Search for topic"
        />
      </div>
      <div class="topic--list">
        <template v-for="(topic, index) in filteredTopics">
          <topic-button :topic-names="topicNames" :topic="topic" :key="index" />
        </template>
      </div>
      <button class="topic--button" @click="saveTopics">Next</button>
    </div>
  </div>
</template>

<script>
import { categories } from "@/helpers";
import TopicButton from "./topic/Button";

export default {
  name: "meetup-topic",
  components: {
    TopicButton
  },
  props: {
    addMeetupInfo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      topicName: "",
      topicNames: [],
      topicsList: categories,
      areTopicsDisplayed: false,
      isTopicSelected: false
    };
  },
  computed: {
    filteredTopics() {
      return this.topicsList.filter(topic => {
        const query = this.topicName.trim().toLowerCase();
        return topic.name.toLowerCase().startsWith(query);
      });
    }
  },
  methods: {
    displayTopics() {
      return (this.areTopicsDisplayed = true);
    },
    saveTopics() {
      this.addMeetupInfo(
        {
          type: this.topicNames
        },
        { three: true }
      );
    }
  },
  mounted() {
    this.$eventBus.$on("add-topic", payload => {
      this.topicNames = this.topicNames.concat(payload);
    });
    this.$eventBus.$on("remove-topic", payload => {
      const topics = this.topicNames.filter(topic => topic !== payload);

      this.topicNames = [];
      this.topicNames = this.topicNames.concat(topics);
    });
  },
  beforeDestroy() {
    this.$eventBus.$off(["add-topic", "remove-topic"]);
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.meetup-topic {
  display: flex;
}

.image {
  width: 2rem;
  align-self: flex-start;

  @include mediumDevices {
    width: 3rem;
  }
}

.topic {
  margin-left: 2rem;

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

  &--heading {
    color: lighten($text-color, 30%);
    padding: 0.5rem 0;
    margin: 0;

    @include mediumDevices {
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    @include largeDevices {
      font-size: 1.75rem;
    }
  }

  &--input {
    margin-right: 1.5rem;

    @include mediumDevices {
      margin-right: 0;
    }
  }

  &--name {
    width: 100%;
    height: 2rem;
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

  &--list {
    display: flex;
    flex-flow: row wrap;
    margin-top: 1rem;
  }

  &--button {
    background-color: $main-color;
    padding: 0.5rem 2rem;
    border: none;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0.85rem 0;
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
