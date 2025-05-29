import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers ($page: Int!, $limit: Int!){
    paginatedUsers(page: $page, limit: $limit) {
      users {
        name
        email
        roles {
          name
        }
      }
      hasMore
      totalCount
    }
  }
`;
