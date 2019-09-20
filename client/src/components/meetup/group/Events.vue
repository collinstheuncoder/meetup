<template>
  <div>
    Events
    <nav>
      <ul>
        <li>
          <router-link to="/group/groupname/events" exact>Upcoming</router-link>
        </li>
        <li>
          <router-link to="/group/groupname/events/past">Past</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
