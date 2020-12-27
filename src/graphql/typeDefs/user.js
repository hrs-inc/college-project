import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    authUserProfile: User!
  }
  extend type Mutation {
    authenticateUser(username: String!, password: String!): AuthUser!
    registerUser(newUser: UserInput!): AuthUser!
  }

  input UserInput {
    avatarImage: String
    email: String!
    firstName: String!
    lastName: String!
    username: String!
    password: String!
    phone: String!
  }

  type User {
    id: ID!
    phone: String
    email: String!
    username: String!
    firstName: String!
    lastName: String!
    avatarImage: String
    createdAt: String
    updatedAt: String
  }

  type AuthUser {
    user: User!
    token: String!
  }
`;
