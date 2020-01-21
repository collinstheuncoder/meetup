<template>
  <nav class="group-nav">
    <ul class="nav-menu">
      <li class="nav-item">
        <router-link to="/group/groupname" exact class="nav-link nav-link--active">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/group/groupname/events" class="nav-link">Events</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/group/groupname/members" class="nav-link">Members</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/group/groupname/photos" class="nav-link">Photos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/group/groupname/discussions" class="nav-link">Discussions</router-link>
      </li>
    </ul>
    <div class="nav-actions">
      <button class="button button--join">Join this group</button>
      <button class="button button--report">&#8943;</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../../scss/style";

.group-nav {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  flex-direction: column-reverse;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;

  @include largeDevices {
    padding: 0.25rem 27rem 0.25rem 5rem;
    flex-direction: row;
  }
}

.nav {
  &-menu {
    list-style: none;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &-item {
    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &-link {
    color: darken($text-color, 70%);
    font-size: 0.85rem;
    letter-spacing: 1px;

    &--active {
      color: $link-color;
    }
  }

  &-actions {
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
    width: 100%;

    @include largeDevices {
      justify-content: flex-end;
      align-self: center;
      width: 60%;
    }

    @at-root .button {
      border: 1px solid;
      border-radius: 0.125rem;
      padding: 0.75rem 1rem;
      cursor: pointer;

      &--join {
        border-color: $main-color;
        background-color: $main-color;
        color: lighten($text-color, 100%);
        flex-basis: 80%;

        @include largeDevices {
          flex-basis: 40%;
        }
      }

      &--report {
        border-color: lighten($text-color, 70%);
        background-color: lighten($text-color, 100%);
        margin-left: 1rem;
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
