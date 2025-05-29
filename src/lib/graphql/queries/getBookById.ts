import { gql } from '@apollo/client';

export const GET_BOOK_BY_ID = gql`
  query GetBookById($id: uuid!) {
    booksCollection(filter: { id: { eq: $id } }) {
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
