import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage } from '..';
import VisuallyHidden from '@reach/visually-hidden';
import { useTranslation } from 'react-i18next';
import { RATINGS_QUERY } from '../../resolvers';

const Marketplace = () => {
  const { t } = useTranslation();
  const { data, error, loading } = useQuery(RATINGS_QUERY, { fetchPolicy: 'cache-and-network' });

  if (loading) {
    return (
      <Page>
        <p>{t('Loading')}</p>
      </Page>
    );
  }
  if (error) {
    return (
      <Page>
        <ErrorMessage error={error} />;
      </Page>
    );
  }
  return (
    <Page>
      {data.ratings.map(rating => (
        <p>{rating}</p>
      ))}
    </Page>
  );
};

export default Marketplace;
