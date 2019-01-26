<template>
  <div id="app">
    <meetup-header />
    <meetup-sidenav v-if="displaySideNav" />
    <meetup-main />
    <meetup-footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Header from "./components/layout/Header";
import Sidenav from "./components/layout/Sidenav";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

export default {
  name: "meetup",
  components: {
    meetupHeader: Header,
    meetupSidenav: Sidenav,
    meetupMain: Main,
    meetupFooter: Footer
  },
  computed: {
    ...mapGetters(["displaySideNav"])
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: url("/fonts/roboto/Roboto-Light.tff") format("tff"),
    url("/fonts/roboto/Roboto-Regular.tff") format("tff"),
    url("/fonts/roboto/Roboto-Bold.tff") format("tff");
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  line-height: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  text-align: center;
  font-size: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>
