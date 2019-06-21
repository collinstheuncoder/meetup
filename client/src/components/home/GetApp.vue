<template>
  <div class="get-app">
    <div class="row">
      <div class="column">
        <h2 class="heading-two">Get the app</h2>
        <router-link class="learn-more" to="/apps"
          >Learn more <span><i class="fas fa-arrow-right"></i></span>
        </router-link>
        <div class="app-links">
          <a href="http://meetu.ps/2ZhShs" rel="noopener noreferrer">
            <img
              class="app-link app-link--apple"
              src="../../assets/images/applestore.png"
              alt="Apple app store link"
            />
          </a>
          <a href="http://meetu.ps/2ZhSyb" rel="noopener noreferrer">
            <img
              class="app-link app-link--google"
              src="../../assets/images/googlestore.png"
              alt="Google play store link"
            />
          </a>
        </div>
      </div>
      <div class="column" style="margin-bottom: -0.45rem">
        <img
          class="app-photo"
          src="../../assets/images/getapp.png"
          alt="Mobile App"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "get-app",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.get-app {
  padding: 1.5rem 1.5rem 0;

  @include mediumDevices {
    padding: 1.5rem 3.5rem 0;
  }

  @include largeDevices {
    padding: 2.5rem 5rem 0;
  }
}

.row {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @include mediumDevices {
    flex-direction: row;
  }
}

.heading-two,
.learn-more {
  text-align: left;
}

.heading-two {
  margin-bottom: 0;
  font-size: 1.5rem;
  color: lighten($text-color, 40%);

  @include mediumDevices {
    font-size: 1.5rem;
  }
}

.learn-more {
  color: $link-color;
  margin-top: 1rem;
  display: block;
}

.app-links {
  padding-top: 1rem;
  text-align: center;

  @include mediumDevices {
    padding-top: 2rem;
    text-align: left;
  }
}

.app-link {
  max-width: 7.5rem;

  @include mediumDevices {
    max-width: 10rem;
  }

  &--apple {
    padding-right: 0.5rem;
  }

  &--google {
    padding-left: 0.5rem;
  }
}

.column {
  text-align: center;

  @include mediumDevices {
    text-align: left;
  }
}

.app-photo {
  max-width: 7.5rem;

  @include mediumDevices {
    max-width: 10rem;
  }

  @include mediumDevices {
    max-width: 15rem;
  }
}
</style>
