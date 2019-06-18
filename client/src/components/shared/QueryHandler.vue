<template>
  <ApolloQuery
    :query="apolloQuery"
    :variables="apolloVariables ? apolloVariables : false"
  >
    <template slot="{ result: { loading, error, data } }">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Oops! Something went wrong</div>

      <div v-else-if="data">
        <slot :data="data"></slot>
      </div>

      <h4 v-else>***Crickets***</h4>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: "query-handler",
  props: {
    apolloQuery: {
      type: Object,
      required: true
    },
    apolloVariables: {
      type: Object
    }
  }
};
</script>
