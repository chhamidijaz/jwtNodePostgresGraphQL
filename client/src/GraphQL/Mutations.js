import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(name: $name, email: $email, password: $password, role: $role) {
      id
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($id: String!, $name: String!) {
    updateUser(id: $id, name: $name)
  }
`;
