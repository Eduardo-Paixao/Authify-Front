import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      name
      email
      roles {
        name
        id
      }
    }
  }
`;
