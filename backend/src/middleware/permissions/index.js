import { and, shield } from 'graphql-shield';
import { isAuthenticatedUser } from './auth';

const rules = {
  isAuthenticatedUser,
};

const permissions = shield({
  Query: {
    note: and(rules.isAuthenticatedUser, rules.isNoteOwner),
    notes: rules.isAuthenticatedUser,
  },
  Mutation: {
    deleteNote: and(rules.isAuthenticatedUser, rules.isNoteOwner),
    updateNote: and(rules.isAuthenticatedUser, rules.isNoteOwner),
    createNote: rules.isAuthenticatedUser,
  },
});

export { permissions, rules };
