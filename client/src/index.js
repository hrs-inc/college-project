import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   ApolloProvider,
//   ApolloClient,
//   InMemoryCache,
//   gql,
// } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
// });

// client
//   .query({
//     query: gql`
//       query AUTHENTICATE_USER($username: String!, $password: String!) {
//         authenticateUser(username: $username, password: $password) {
//           token
//           user {
//             id
//             email
//             username
//             firstName
//             lastName
//             updatedAt
//             createdAt
//             avatarImage
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  // <ApolloProvider client={client}>
  <App />,
  // </ApolloProvider>
  document.getElementById('root'),
);
