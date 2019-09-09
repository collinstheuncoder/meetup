<template>
  <section class="not-found">
    <p class="not-found-msg">
      Sorry, there aren't any groups matching
      <span class="meetup-name">{{ meetupType }}</span> near you yet
    </p>
    <div class="row">
      <img
        src="../../../assets/images/create-meetup.png"
        alt="Start Meetup"
        class="not-found-img"
      />
      <div>
        <p class="not-found-new">Start something new</p>
        <p>
          Starting a Meetup Group is the perfect way to share your interests and
          spark new friendships.
        </p>
        <router-link class="button" to="/create"
          >Start a Meetup Group</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "no-found-meetup",
  props: {
    meetupType: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/style";

.not-found {
  background-color: #ffffff;
  margin: 1rem;
  padding: 1rem 2rem 1.5rem;
  border: 1px solid #dedede;

  @include largeDevices {
    margin: 2rem 10rem;
  }

  &-msg {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dedede;
  }

  &-img {
    max-width: 10rem;
    margin-right: 2rem;
  }

  &-new {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 1rem 0 0;

    @include mediumDevices {
      margin: 0;
    }

    ~ p {
      margin: 0;
      padding: 1rem 0 2rem;
    }
  }
}

.row {
  display: flex;
  flex-direction: column;

  @include mediumDevices {
    flex-direction: row;
  }
}

.meetup-name {
  text-transform: capitalize;
}

.button {
  color: $white-color;
  background-color: $main-color;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 700;
  display: block;
  text-align: center;

  @include mediumDevices {
    display: inline;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  @include largeDevices {
    padding: 1rem 2rem;
  }
}
</style>
