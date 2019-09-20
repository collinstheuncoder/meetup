import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

function metaTags(pageName) {
  return [
    {
      name: 'description',
      content: `The ${pageName} page of the Meetup App`,
    },
    {
      property: 'og:description',
      content: `The ${pageName} page of the Meetup App`,
    },
  ];
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home - Meetup',
        metaTags: metaTags('home'),
      },
    },
    {
      path: '/attend',
      name: 'attend-meetup',
      component: () =>
        import(
          /* webpackChunkName: "attend-meetup" */ './views/AttendMeetup.vue'
        ),
      meta: {
        title: 'Attend Meetup - Meetup',
        metaTags: metaTags('attend meetup'),
      },
    },
    {
      path: '/find/:type',
      name: 'find-meetups',
      component: () =>
        import(
          /* webpackChunkName: "find-meetups" */ './views/FindMeetups.vue'
        ),
      props: true,
      meta: {
        title: 'Find Meetups - Meetup',
        metaTags: metaTags('find meetups'),
      },
    },
    {
      path: '/group/:name',
      component: () => import('./views/MeetupGroup.vue'),
      children: [
        {
          path: '',
          component: () => import('./components/meetup/group/AboutMeetup.vue'),
          meta: {
            title: '(Group name) About Meetup - Meetup',
            metaTags: metaTags('about meetup section of group name'),
          },
        },
        {
          path: 'events',
          component: () => import('./components/meetup/group/Events.vue'),
          children: [
            {
              path: '',
              component: () =>
                import('./components/meetup/group/events/Upcoming.vue'),
              meta: {
                title: '(Group name) Upcoming Events - Meetup',
                metaTags: metaTags('upcoming events section of group name'),
              },
            },
            {
              path: 'past',
              component: () =>
                import('./components/meetup/group/events/Past.vue'),
              meta: {
                title: '(Group name) Past Events - Meetup',
                metaTags: metaTags('past events section of group name'),
              },
            },
          ],
        },
        {
          path: 'members',
          component: () => import('./components/meetup/group/Members.vue'),
          meta: {
            title: '(Group name) Members - Meetup',
            metaTags: metaTags('members section of group name'),
          },
        },
        {
          path: 'photos',
          component: () => import('./components/meetup/group/Photos.vue'),
          meta: {
            title: '(Group name) Photos - Meetup',
            metaTags: metaTags('photos section of group name'),
          },
        },
        {
          path: 'discussions',
          component: () => import('./components/meetup/group/Discussions.vue'),
          meta: {
            title: '(Group name) Discussions - Meetup',
            metaTags: metaTags('discussions section of group name'),
          },
        },
      ],
    },
    {
      path: '/create',
      name: 'create-meetup',
      component: () =>
        import(
          /* webpackChunkName: "create-meetup" */ './views/CreateMeetup.vue'
        ),
      meta: {
        title: 'Create Meetup - Meetup',
        metaTags: metaTags('create meetup'),
      },
    },
    {
      path: '/accounts/signup',
      name: 'signup',
      component: () =>
        import(/* webpackChunkName: "signup" */ './views/Signup.vue'),
      meta: {
        title: 'Create Account - Meetup',
        metaTags: metaTags('sign up'),
      },
    },
    {
      path: '/accounts/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: {
        title: 'Login to Account - Meetup',
        metaTags: metaTags('log in'),
      },
    },
  ],
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
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
