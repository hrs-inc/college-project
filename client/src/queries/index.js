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

export const GET_ALL_CAR = gql`
  query {
    getAllCars {
      id
      brand
      price
      description
      category
      model
      isAvailable
      seat
      age
      ac
    }
  }
`;

export const ADD_CAR = gql`
  mutation(
    $objectId: String!
    $brand: String!
    $category: String!
    $model: String!
    $isAvailable: Boolean!
    $seat: Int!
    $description: String!
    $age: Int
    $ac: Boolean
    $price: Int
  ) {
    addCar(
      carInput: {
        objectId: $objectId
        brand: $brand
        category: $category
        model: $model
        isAvailable: $isAvailable
        seat: $seat
        description: $description
        age: $age
        ac: $ac
        price: $price
      }
    ) {
      id
      objectId
      brand
      category
      model
      isAvailable
      seat
      age
      ac
      description
      price
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
      role
    }
  }
`;
