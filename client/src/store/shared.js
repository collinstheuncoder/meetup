import { getCurrentLocation } from "../helpers";

const currentLocation = {};

(async () => {
  const { name, latitude, longitude } = await getCurrentLocation();

  currentLocation.name = name;
  currentLocation.latitude = latitude;
  currentLocation.longitude = longitude;
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
