import React, { useState } from 'react';
import { useQuery, useApolloClient } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage } from '..';
import { useTranslation } from 'react-i18next';
import { RATINGS_QUERY, AVERAGE_LOAN_AMOUNT } from '../../resolvers';
import { Select, SpinningButton } from '../common';
import { AverageInfo } from './styles';

const Marketplace = () => {
  const { t } = useTranslation();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { data, error, loading } = useQuery(RATINGS_QUERY, { fetchPolicy: 'cache-and-network' });
  const [selectedRating, setSelectedRating] = useState(0);
  const [loan, setLoan] = useState({});
  const mapToRating = index => {
    if (!error && !loading) {
      return data.ratings[index];
    }
  };

  const client = useApolloClient();

  const handleSelectOnClose = async index => {
    setIsSelectOpen(false);
    setSelectedRating(index);
    try {
      setLoan({ loading: true });
      const res = await client.query({ query: AVERAGE_LOAN_AMOUNT, variables: { rating: mapToRating(index) } });
      setLoan({ loading: false, data: res.data.averageLoanAmount });
    } catch (e) {
      setLoan({ error: e });
    }
  };

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
        <ErrorMessage error={error || loan.error} />
      </Page>
    );
  }
  return (
    <Page>
      <SpinningButton disabled={loading || error} spin={loading} type="button" onClick={() => setIsSelectOpen(true)}>
        {t('Select Rating')}
      </SpinningButton>
      <Select isOpen={isSelectOpen} onClose={handleSelectOnClose} options={data.ratings} selected={selectedRating} />
      <AverageInfo>{loan.loading ? t('Loading') : loan.data && loan.data.toFixed(3)}</AverageInfo>
    </Page>
  );
};

export default Marketplace;
