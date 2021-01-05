import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    info: String!
  }

  extend type Mutation {
    singleUpload(file: Upload!): String!
  }
`;
