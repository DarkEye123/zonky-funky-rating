import gql from 'graphql-tag';

const AVERAGE_LOAN_AMOUNT_QUERY = gql`
  query AVERAGE_LOAN_AMOUNT_QUERY($rating: String!) {
    averageLoanAmount(rating: $rating)
  }
`;

export default AVERAGE_LOAN_AMOUNT_QUERY;
