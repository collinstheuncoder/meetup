<template>
  <div class="header">
    <h2 class="heading-two">Start a new Meetup</h2>
    <p class="paragraph">
      We'll help you find the right people to make it happen.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../scss/style";

.header {
  background-image: url("../../../assets/images/party-two.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $white-color;
}

.heading-two {
  font-size: 1.75rem;
  margin-bottom: 0;

  @include largeDevices {
    font-size: 2.25rem;
  }
}

.paragraph {
  font-size: 0.75rem;
  margin-top: 1rem;

  @include largeDevices {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>
