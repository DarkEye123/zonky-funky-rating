import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage } from '..';
import VisuallyHidden from '@reach/visually-hidden';
import { useTranslation } from 'react-i18next';
import { RATINGS_QUERY } from '../../resolvers';
import Select from '../common/Select';

const Marketplace = () => {
  const { t } = useTranslation();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { data, error, loading } = useQuery(RATINGS_QUERY, { fetchPolicy: 'cache-and-network' });
  const [selectedRating, setSelectedRating] = useState(0);

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
      <button type="button" onClick={() => setIsSelectOpen(true)}>
        click
      </button>
      <Select
        isOpen={isSelectOpen}
        onClose={() => setIsSelectOpen(false)}
        options={data.ratings}
        selectHandler={setSelectedRating}
      />
      <p>selected {selectedRating}</p>
    </Page>
  );
};

export default Marketplace;
