import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation(
    $email: String!
    $firstName: String!
    $lastName: String!
    $username: String!
    $password: String!
    $phone: String!
  ) {
    registerUser(
      newUser: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        username: $username
        password: $password
        phone: $phone
      }
    ) {
      token
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation($username: String!, $password: String!) {
    authenticateUser(username: $username, password: $password) {
      user {
        id
        email
        username
      }
      token
    }
  }
`;
