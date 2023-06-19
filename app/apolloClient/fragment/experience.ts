import { gql } from "@apollo/client";

export const GET_ALL_EXPERIENCES = gql`
  query getExperiences {
    experiences {
      id
      company
      position
      period
      body {
        document
      }
      tech
    }
  }
`;

export const GET_EXPERIENCE = gql`
  query GetExperience($id: ID!) {
    experience(where: { id: $id }) {
      id
      company
      position
      period
      body {
        document
      }
      tech
    }
  }
`;
