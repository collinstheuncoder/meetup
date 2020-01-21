import { onError } from "apollo-link-error";

// Error handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => message);

  if (networkError) {
    return networkError;
  }
});

export default errorLink;
