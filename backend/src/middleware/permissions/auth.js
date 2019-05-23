import { rule } from 'graphql-shield';

const isAuthenticatedUser = rule({ cache: 'contextual' })((parent, args, ctx) => {
  const id = ctx.request.userID;
  return !!id;
});

export { isAuthenticatedUser };
