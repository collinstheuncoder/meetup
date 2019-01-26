<template>
  <transition name="fade">
    <click-outside :handler="hideSideNav" class="click-outside">
      <div class="side-nav">
        <div class="top"><span @click="hideSideNav">&times;</span></div>
        <div class="links links--user">
          <ul class="nav__menu">
            <li v-if="!isAuthenticated" class="nav__item nav__item--create">
              <router-link to="/create">Create a Meetup</router-link>
            </li>
            <li v-if="isAuthenticated" class="nav__item nav__item--create">
              <router-link :class="{ authNav: isAuthenticated }" to="/create">
                Start a new group
              </router-link>
            </li>
            <li 
              v-if="!isAuthenticated" 
              class="nav__item nav__item--auth" 
              @click="hideSideNav"
            >
              <router-link to="/accounts/login">Log in</router-link>
            </li>
            <li 
              v-if="!isAuthenticated" 
              class="nav__item nav__item--auth" 
              @click="hideSideNav"
            >
              <router-link to="/accounts/signup">Sign up</router-link>
            </li>
            <li 
              v-if="isAuthenticated" 
              class="nav__item nav__item--auth" 
              @click="hideSideNav"
            >
              <router-link
                :class="{ authNav: isAuthenticated }"
                to="/find/explore"
              >
                Explore
              </router-link>
            </li>
            <li 
              v-if="isAuthenticated" 
              class="nav__item nav__item--auth" 
              @click="hideSideNav"
            >
              <router-link :class="{ authNav: isAuthenticated }" to="/messages">
                Messages
              </router-link>
            </li>
            <li
              v-if="isAuthenticated"
              class="nav__item nav__item--auth"
              :class="{ authNav: isAuthenticated }"
              @click="logoutUser"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </click-outside>
  </transition>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ClickOutside from "onclick-outside";

export default {
  name: "side-nav",
  components: {
    ClickOutside
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  },
  methods: {
    ...mapMutations(["closeSideNav"]),
    ...mapActions({ logout: "auth/logout" }),
    hideSideNav() {
      this.closeSideNav();
    },
    logoutUser() {
      this.logout({ router: this.$router });
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #00a2c7;
$main-color: #f13a59;

.side-nav {
  background-color: #ffffff;
  background-color: #f64060;
  height: 100vh;
}

.click-outside {
  position: absolute;
  right: 0;
  width: 50%;
}

.top {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  height: 3.175rem;
  border-bottom: 1px solid lighten($main-color, 30%);

  span {
    color: lighten($main-color, 50%);
    font-size: 2.5rem;
    margin-right: 0.25rem;
    cursor: pointer;
  }
}

.nav__menu {
  margin: 0;
}

.nav__item {
  padding: 1rem;
  color: #ffffff;
  background-color: darken($main-color, 20%);

  a {
    color: #ffffff;
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
</style>
