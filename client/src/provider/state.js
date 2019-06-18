import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";

import { getCurrentLocation } from "../helpers";

const token = localStorage.getItem("meetup-token");

const cache = new InMemoryCache();

getCurrentLocation()
  .then(res => console.log(res))
  .catch(err => console.error(err));

const stateLink = withClientState({
  cache,
  defaults: {
    currentLocation: {
      __typename: "CurrentLocation",
      name: "",
      latitude: "",
      longitude: ""
    },
    authStatus: {
      __typename: "AuthStatus",
      isAuthenticated: token ? true : false,
      currentUser: null
    }
  },
  resolvers: {
    Mutation: {
      updateCurrentLocation: (
        _,
        { newLocation: { name, latitude, longitude } },
        { cache }
      ) => {
        const data = {
          authStatus: {
            __typename: "CurrentLocation",
            name,
            latitude,
            longitude
          }
        };

        cache.writeData({ data });

        return null;
      },

      updateAuthStatus: (_, { isAuthenticated, currentUser }, { cache }) => {
        const data = {
          authStatus: {
            __typename: "AuthStatus",
            isAuthenticated,
            currentUser
          }
        };

        cache.writeData({ data });

        return null;
      }
    }
  }
});

export default stateLink;
