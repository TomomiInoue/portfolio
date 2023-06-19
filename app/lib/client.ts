import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
  }),
});
export default client;

// const GRAPHQL_ENDPOINT =
//   process.env.GRAPHQL_ENDPOINT || "https://3000/api/graphql";

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: GRAPHQL_ENDPOINT,
//     }),
//   });
// });
