import { shield } from 'graphql-shield';
import { isAuthenticatedUser } from './auth';

const rules = {
  isAuthenticatedUser,
};

const permissions = shield({
  Query: {
    averageLoanAmount: rules.isAuthenticatedUser,
  },
});

export { permissions, rules };
