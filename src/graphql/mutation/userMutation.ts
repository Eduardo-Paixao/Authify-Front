import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        name
      }
      token
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser($name: String!, $email: String!, $roles: String!) {
    update(name: $name, email: $email, roles: $roles) {
      name
      roles {
        name
      }
    }
  }
`;
