import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Meetup | Home",
        metaTags: [
          {
            name: "description",
            content: "The home page of the Meetup Website Clone."
          },
          {
            property: "og:description",
            content: "The home page of the Meetup Website Clone."
          }
        ]
      }
    },
    {
      path: "/attend",
      name: "attend-meetup",
      component: () =>
        import(/* webpackChunkName: "attend-meetup" */ "./views/AttendMeetup.vue"),
      meta: {
        title: "Meetup | Attend Meetup",
        metaTags: [
          {
            name: "description",
            content: "The attend meetup page of the Meetup Website Clone."
          },
          {
            property: "og:description",
            content: "The attend page of the Meetup Website Clone."
          }
        ]
      }
    },
    {
      path: "/find/:type",
      name: "find-meetups",
      component: () =>
        import(/* webpackChunkName: "found-meetups" */ "./views/FindMeetups.vue"),
      props: true,
      meta: {
        title: "Meetup | Find Meetups",
        metaTags: [
          {
            name: "description",
            content: "The find meetups page of the Meetup Website Clone."
          },
          {
            property: "og:description",
            content: "The find meetups page of the Meetup Website Clone."
          }
        ]
      }
    },
    {
      path: "/group/:name",
      name: "meetup-group",
      component: () =>
        import(/* webpackChunkName: "meetup-group" */ "./views/MeetupGroup.vue"),
      meta: {
        title: "Meetup | Meetup Group",
        metaTags: [
          {
            name: "description",
            content: "The meetup group page of the Meetup Website Clone."
          },
          {
            property: "og:description",
            content: "The meetup group page of the Meetup Website Clone."
          }
        ]
      }
    },
    {
      path: "/create",
      name: "create-meetup",
      component: () =>
        import(/* webpackChunkName: "create-meetup" */ "./views/CreateMeetup.vue"),
      meta: {
        title: "Meetup | Create Meetup",
        metaTags: [
          {
            name: "description",
            content: "The create meetup page of the Meetup Website Clone."
          },
          {
            property: "og:description",
            content: "The create meetup page of the Meetup Website Clone."
          }
        ]
      }
    },
    {
      path: "/accounts/signup",
      name: "signup",
      component: () =>
        import(/* webpackChunkName: "signup" */ "./views/Signup.vue"),
      meta: {
        title: "Meetup | Create Account",
        metaTags: [
          {
            name: "description",
            content: "The sign up page of the Meetup Website Clone."
          },
          {
            property: "og:description",
            content: "The sign up page of the Meetup Website Clone."
          }
        ]
      }
    },
    {
      path: "/accounts/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue"),
      meta: {
        title: "Meetup | Login to Account",
        metaTags: [
          {
            name: "description",
            content: "The login page of the Meetup Website Clone."
          },
          {
            property: "og:description",
            content: "The login page of the Meetup Website Clone."
          }
        ]
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  // Change page title
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // eslint-disable-next-line
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
