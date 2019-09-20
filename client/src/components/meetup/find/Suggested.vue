<template>
  <section class="suggested-meetups">
    <div class="sort-by">
      <span class="sort-by-label">Sort by</span>
      <div class="sort-by-list">
        <v-select v-model="sortBy" :options="sortOptions" />
      </div>
    </div>
    <div class="meetups">
      <div
        v-for="meetup in meetups"
        :key="meetup"
        class="meetup"
        :style="{ background }"
      > 
        <router-link to="/group/groupname">
          <p class="meetup-info">
            <span class="meetup-name">Learn Data Science</span>
            <br />
            <span class="meetup-members">14321 members</span>
          </p>
          <i @click="openModal" class="fas fa-plus meetup-icon"></i>
        </router-link>
      </div>
    </div>
    <modal v-show="isModalOpen" @close="closeModal" />
  </section>
</template>

<script>
import Modal from "../../shared/Modal";

export default {
  name: "suggested-meetups",
  components: {
    Modal
  },
  data() {
    return {
      meetups: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isModalOpen: false,
      sortBy: "Best match",
      sortOptions: ["Best match", "Newest", "Most members", "Closest"]
    };
  },
  computed: {
    background() {
      return `linear-gradient(rgba(13, 41, 60, 0.1), rgba(13, 41, 60, 0.2)),
      url(${"https://code.fb.com/wp-content/uploads/2018/11/ReactConfx1125.png"})`;
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/style";

.suggested-meetups {
  margin: 1rem;

  @include largeDevices {
    margin: 2rem 10rem;
  }
}

.sort-by {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.75rem;

  &-label {
    color: lighten(#000000, 50%);
    font-size: 0.85rem;
    font-weight: 700;
  }

  &-list {
    margin-left: 0.75rem;
    width: 10.75rem;
  }
}

.meetups {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @include mediumDevices {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mediumDevices {
    grid-template-columns: repeat(3, 1fr);
  }
}

.meetup {
  position: relative;
  background-position: center center !important;
  background-size: cover !important;
  height: 12.5rem;
  padding: 1rem;
  color: #ffffff;

  @include largeDevices {
    height: 10rem;
  }

  &-info {
    position: absolute;
    bottom: 1rem;
    margin: 0;
  }

  &-name {
    font-weight: 700;
  }

  &-members {
    font-weight: 400;
    font-size: 0.85rem;
  }

  .svg-inline--fa {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    border: 0.125rem solid #ffffff;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
  }
}
</style>
