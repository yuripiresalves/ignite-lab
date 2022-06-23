import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qczmid3n2j01xkdxv62arq/master',
  cache: new InMemoryCache(),
});
