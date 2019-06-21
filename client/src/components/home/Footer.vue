<template>
  <div class="home-footer">
    <router-link class="create" to="/create">Create a Meetup</router-link>
    <hr class="divider" />
    <div class="row">
      <div class="column column--menu">
        <template v-for="item in menuItems">
          <div
            :class="`menu menu--${item.name.toLowerCase()}`"
            :key="item.name"
          >
            <p>{{ item.name }}</p>
            <ul>
              <template v-for="link in item.links">
                <router-link
                  class="menu-item"
                  :to="link.path"
                  tag="li"
                  :key="link.name"
                  >{{ link.name }}</router-link
                >
              </template>
            </ul>
          </div>
        </template>
      </div>
      <div class="column column--buttons">
        <div class="row row--btn-grp">
          <span class="icon"><i class="fab fa-facebook"></i></span>
          <span class="icon"><i class="fab fa-twitter"></i></span>
          <span class="icon"><i class="fab fa-youtube"></i></span>
          <span class="icon"><i class="fab fa-instagram"></i></span>
          <span class="icon"><i class="fab fa-medium"></i></span>
        </div>
        <div class="row row--language">
          <select
            class="select-language"
            name="select-language"
            id="select-language"
          >
            <option>Select Language</option>
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
        </div>
        <div class="row row--app-links">
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
    </div>
  </div>
</template>

<script>
import { menuItems } from "@/helpers";

export default {
  name: "home-footer",
  data() {
    return {
      menuItems
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.home-footer {
  background-color: $body-color;
  color: $white-color;
  padding: 1.5rem;

  @include mediumDevices {
    padding: 1.5rem 3.5rem;
  }

  @include largeDevices {
    padding: 2.5rem 5rem;
  }
}

.create {
  color: $white-color;
  text-decoration: underline;
}

.divider {
  margin-top: 2rem;
  border-bottom: none;
}

.row {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  @include largeDevices {
    flex-direction: row;
  }
}

.column {
  flex-basis: 100%;
  
  @include mediumDevices {
    flex-basis: 30%;
  }
  
  &--menu {
    display: flex;
    justify-content: space-between;
  }

  &--buttons {
    .row {
      flex-direction: row;
      
      &--btn-grp {
        display: flex;
        justify-content: flex-end;
        padding: 1rem 0;
      }

      &--language {
        position: relative;
        display: block;
        height: 3rem;
        line-height: 3;
        background-color: $select-color;
        overflow: hidden;
        border: 1px solid darken($text-color, 35%);
        border-radius: 0.25rem;

        &::after {
          content: "\25BC";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          padding: 0 1rem;
          background-color: #34495e;
          pointer-events: none;
          transition: 250ms all ease;
        }
      }
      
      &--app-links {
        margin-top: 1.25rem;
      }
    }
  }
}

.menu-item {
  padding-bottom: 1rem;
  color: darken($white-color, 35%);
  cursor: pointer;
}
  
.icon {
  padding: 0 0 0 4rem;
  
  &:first-of-type {
    padding: 0;
    margin-right: -0.35rem;
  }
}

.select-language {
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0;
  background-color: $select-color;
  width: 100%;
  height: 100%;
  margin: 0;
  padding-left: 1rem;
  color: $text-color;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 1px;

  &::-ms-expand {
    display: none;
  }
}
  
.app-link {
  max-width: 10rem;

  &--apple {
    padding-right: 0.5rem;
  }

  &--google {
    padding-left: 0.5rem;
  }
}
  
.svg-inline--fa {
  font-size: 1.5rem;
  color: darken($white-color, 35%);
}
</style>
