import { gql } from "@apollo/client";

export const GET_ALL_ABOUT = gql`
  query getAbout {
    about {
      document
    }
  }
`;
