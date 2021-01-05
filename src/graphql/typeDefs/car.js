import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getAllCars: [Car]!
    getSingleCar(objectId: String!): Car!
    getArgumentCars(category: String!): [Car]!
  }

  type Car {
    id: ID!
    objectId: String
    brand: String
    imageUrl: String
    category: String
    model: String
    isAvailable: Boolean
    seat: Int
    age: Int
    ac: Boolean
    description: String
    price: Int
  }

  extend type Mutation {
    addCar(carInput: CarInput!): Car!
  }

  input CategoryInput {
    name: String
  }

  type Category {
    id: ID!
    name: String!
  }

  input CarInput {
    objectId: String!
    brand: String!
    category: String!
    model: String!
    isAvailable: Boolean!
    seat: Int!
    description: String!
    age: Int
    ac: Boolean
    price: Int
  }
`;
