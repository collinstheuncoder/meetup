import { getCurrentLocation } from "../helpers";

const token = localStorage.getItem("meetup-token");

const cache = new InMemoryCache();

let currentLocation;

(async () => {
  const resp = await getCurrentLocation();

  currentLocation = resp;
})();

const state = {
  currentLocation,
  displayNotification: false,
  displaySideNav: false,
  isLoading: false,
  error: null
};

const getters = {
  currentLocation: state => state.currentLocation,
  displayNotification: state => state.displayNotification,
  displaySideNav: state => state.displaySideNav,
  isLoading: state => state.isLoading,
  error: state => state.error
};

const mutations = {
  changeLocation: (state, payload) =>
    (state.currentLocation = { ...state.currentLocation, ...payload }),
  setNotification: (state, payload) => (state.displayNotification = payload),
  openSideNav: state => (state.displaySideNav = true),
  closeSideNav: state => (state.displaySideNav = false),
  setLoading: (state, payload) => (state.loading = payload),
  setError: (state, payload) => (state.error = payload),
  clearError: state => (state.error = null)
};

export default {
  state,
  getters,
  mutations
};
