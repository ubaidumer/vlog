import { ApolloClient, InMemoryCache } from '@apollo/client';

const object = new ApolloClient({
  uri: `${process.env.REACT_APP_OBJECT_URL}`,
  headers: {
    authorization: `Bearer ${localStorage.getItem('accessToken')}`
  },
  cache: new InMemoryCache()
});

export default object;
