import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getAllCars: [Car]!
    getSingleCar(objectId: String!): Car!
    getArgumentCars(category: String!): [Car]!
    getAllCategory: [Category]!
  }

  type Car {
    id: ID!
    brand: String
    price: Int
    description: String
    category: String
    model: String
    isAvailable: Boolean
    seat: Int
    age: Int
    photo: String
    ac: Boolean
  }

  extend type Mutation {
    addCar(carInput: CarInput!): Car!
    addCategory(name: String): Category
  }

  input CategoryInput {
    name: String
  }

  type Category {
    id: ID!
    name: String!
  }

  input CarInput {
    photo: String
    brand: String!
    price: Int!
    category: String!
    model: String!
    isAvailable: Boolean!
    seat: Int!
    ac: Boolean!
    description: String!
    age: Int!
  }
`;
