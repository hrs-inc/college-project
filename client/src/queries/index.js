import { gql } from '@apollo/client';

/**
 * cars
 */

export const GET_CAR = gql`
  query($category: String!) {
    getArgumentCars(category: $category) {
      id
      objectId
      brand
      category
      model
      isRent
    }
  }
`;

/**
 * users
 */
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

export const GET_CURRENT_USER = gql`
  query {
    authUserProfile {
      username
      email
    }
  }
`;
