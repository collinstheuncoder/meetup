import axios from "axios";

// Home nav links
export const links = [
  { label: "Join a Movement", name: "Movements", path: "/movements" },
  { label: "Learn to cook", name: "Food & Drinks", path: "/food" },
  { label: "Train for a marathon", name: "Sports & Fitness", path: "/fitness" },
  { label: "Build an app", name: "Tech", path: "/tech" },
  { label: "Hike a mountain", name: "Outdoors & Adventure", path: "/outdoors" },
  {
    label: "Practice a language",
    name: "Language & Culture",
    path: "/languages"
  }
];

// Meetup categories list
export const categories = [
  {
    name: "Outdoors & Adventure",
    path: "/outdoors",
    imgUrl: "https://imgur.com/9H4mdql.jpg"
  },
  { name: "Arts", path: "/arts", imgUrl: "https://imgur.com/tO2KO2b.jpg" },
  { name: "LGBTQ", path: "/lgbtq", imgUrl: "https://imgur.com/RTV1Zvn.jpg" },
  { name: "Family", path: "/family", imgUrl: "https://imgur.com/MciyzkP.jpg" },
  {
    name: "Photography",
    path: "/photography",
    imgUrl: "https://imgur.com/KVhZHIM.jpg"
  },
  {
    name: "Movements",
    path: "/movements",
    imgUrl: "https://imgur.com/4VRnXqP.jpg"
  },
  { name: "Tech", path: "/tech", imgUrl: "https://imgur.com/bGQKVhD.jpg" },
  {
    name: "Writing",
    path: "/writing",
    imgUrl: "https://imgur.com/6j8WDKV.jpg"
  },
  {
    name: "Food & Drinks",
    path: "/food-drinks",
    imgUrl: "https://imgur.com/B4fOz3K.jpg"
  },
  { name: "Music", path: "/music", imgUrl: "https://imgur.com/58nko8L.jpg" },
  {
    name: "Sci-fi & Games",
    path: "/scifi",
    imgUrl: "https://imgur.com/RRgvdl5.jpg"
  },
  {
    name: "Language & Culture",
    path: "/language-culture",
    imgUrl: "https://imgur.com/wux8FgQ.jpg"
  },
  {
    name: "Sports & Fitness",
    path: "/sports-fitness",
    imgUrl: "https://imgur.com/Og2uiOo.jpg"
  },
  {
    name: "Health & Wellness",
    path: "/health-wellness",
    imgUrl: "https://imgur.com/nvuq6kD.jpg"
  },
  { name: "Films", path: "/films", imgUrl: "https://imgur.com/IneW9Hy.jpg" },
  {
    name: "Learning",
    path: "/learning",
    imgUrl: "https://imgur.com/6RKKMKe.jpg"
  }
];

export const menuItems = [
  {
    name: "Your account",
    links: [
      { name: "Sign up", path: "/accounts/signup" },
      { name: "Log in", path: "/accounts/login" },
      { name: "Help", path: "/help" }
    ]
  },
  {
    name: "Discover",
    links: [
      { name: "Groups", path: "/accounts/signup" },
      { name: "Calendar", path: "/find/events" },
      { name: "Topics", path: "/accounts/login" },
      { name: "Cities", path: "/help" }
    ]
  },
  {
    name: "Meetup",
    links: [
      { name: "About", path: "/about" },
      { name: "Meetup Pro", path: "/pro" },
      { name: "Careers", path: "/jobs" },
      { name: "Apps", path: "/apps" },
      { name: "API", path: "/api" }
    ]
  }
];

// Footer menu links
export const footerLinks = [
  { name: "Help", path: "/help" },
  { name: "About Us", path: "/about" },
  { name: "Meetup Pro", path: "/pro" },
  { name: "Jobs", path: "/jobs" },
  { name: "Apps", path: "/apps" },
  { name: "API", path: "/api" },
  { name: "Topics", path: "/topics" },
  { name: "Browse Cities", path: "/cities" },
  { name: "Blog", path: "/blog" }
];

// Current location promise
export async function getCurrentLocation() {
  const {
    data: { city, region, country, loc }
  } = await axios.get(
    `https://ipinfo.io?token=${process.env.VUE_APP_IPINFO_TOKEN}`
  );

  const currentLocation = {
    name: `${city}, ${region} (${country})`,
    latitude: Number(loc.slice(0, loc.indexOf(","))),
    longitude: Number(loc.slice(loc.indexOf(",") + 1))
  };

  return currentLocation;
}

// Vuex actions success/failure handlers
export function handleActionStatus(commit, error = null) {
  if (error) {
    commit("setError", error.message, { root: true });
    commit("setLoading", false, { root: true });
  } else {
    commit("setLoading", false, { root: true });
    commit("clearError", error, { root: true });
  }
}

export function formatErrors(errors) {
  return errors.map(({ message }) => message);
}
