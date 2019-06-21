<template>
  <div class="home">
    <home-header />
<!--
    <home-navigation />
    <suggested /> 
    <explore />
-->
    <!-- <how-it-works /> -->
<!--
    <get-app />
    <home-footer />
-->
  </div>
</template>
 
<script>
import Header from "@/components/home/Header";
//import Navigation from "@/components/home/Navigation";
//import Suggested from "@/components/home/Suggested";
//import Explore from "@/components/home/Explore";
//import HowItWorks from "@/components/home/HowItWorks";
//import GetApp from "@/components/home/GetApp";
//import Footer from "@/components/home/Footer";

export default {
  components: {
    homeHeader: Header,
//    homeNavigation: Navigation,
//    Suggested,
//    Explore,
//    HowItWorks,
//    GetApp,
//    homeFooter: Footer
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
