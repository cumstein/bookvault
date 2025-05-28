import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    booksCollection {
      edges {
        node {
          id
          title
          author
          description
          created_at
          cover
        }
      }
    }
  }
`;
