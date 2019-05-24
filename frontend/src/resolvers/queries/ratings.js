import gql from 'graphql-tag';

const RATINGS_QUERY = gql`
  query RATINGS_QUERY {
    ratings
  }
`;

export default RATINGS_QUERY;
