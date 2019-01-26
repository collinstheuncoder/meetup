<template>
  <div class="page page--signup">
    <h2 class="heading-two">Sign Up</h2>
    
    <p class="show-signup" v-show="!isFormRendered" @click="renderForm">
      Or sign up with email
    </p>
    <hr class="divider" v-show="isFormRendered" />

    <hr class="divider" />
    <p class="login">
      Already a member? <router-link to="/accounts/login">Log in</router-link>.
    </p>
  </div>
</template>

<script>
// import SignupForm from "@/components/accounts/SignupForm";
// import SocialLogin from "@/components/shared/SocialLogin";

export default {
  // components: {
  //   SignupForm,
  //   SocialLogin
  // },
  data() {
    return {
      isFormRendered: false
    };
  },
  methods: {
    renderForm() {
      return (this.isFormRendered = true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style";

.page--signup {
  width: 25rem;
  margin: 0 auto 2rem;
  padding: 0 1rem;

  @include mediumDevices {
    padding: 0;
  }
}

.heading-two {
  color: lighten($text-color, 30%);
}

.divider {
  border-top: none;
}

.show-signup {
  color: $link-color;
  cursor: pointer;
  text-align: center;
}

.login {
  font-size: 0.85rem;
  text-align: center;
}
</style>
