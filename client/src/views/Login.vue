<template>
  <div class="page page--login">
    <div class="login-card">
      <h2 class="heading-two">Log in</h2>
      <p>
        <span>Not registered with us yet? </span>
        <router-link to="/accounts/signup">Sign up</router-link>.
      </p>
      <hr class="divider" />
      <login-form />
      <div class="social"><social-login /></div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/accounts/LoginForm";
import SocialLogin from "@/components/shared/SocialLogin";

export default {
  components: {
    LoginForm,
    SocialLogin
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style";

.page--login {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lighten($text-color, 95%);
}

.login-card {
  min-width: 100%;
  background-color: $white-color;

  @include mediumDevices {
    min-width: 20rem;
    margin: 1.5rem;
  }

  @include largeDevices {
    min-width: 25rem;
    margin: 2rem;
  }
}

.heading-two {
  text-align: left;
  color: lighten($text-color, 30%);
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem 1rem 0;

  @include mediumDevices {
    font-size: 1.75rem;
    margin: 1rem;
    padding: 0;
  }

  @include largeDevices {
    font-size: 2rem;
    margin: 1rem;
  }

  ~ p {
    font-size: 0.85rem;
    margin: 0.5rem 1rem;
  }
}

.divider {
  border-top: none;
}

.social {
  background-color: #d8dfea;
  padding: 1rem;
  padding-bottom: 0.25rem;

  @include largeDevices {
    padding: 2rem;
  }
}
</style>
