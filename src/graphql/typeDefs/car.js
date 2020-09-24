import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getAllCars: [Car]!
    getSingleCar(objectId: String!): Car
  }

  type Car {
    id: ID!
    objectId: String
    brand: String
    category: String
    model: String
    isRent: Boolean
    seat: Int
  }

  extend type Mutation {
    addCar(carInput: CarInput!): Car!
  }

  input CarInput {
    objectId: String!
    brand: String!
    category: String!
    model: String!
    isRent: Boolean!
    seat: Int!
  }
`;
