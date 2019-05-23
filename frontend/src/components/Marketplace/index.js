import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { CenteredMain as Page, ErrorMessage } from '..';
import VisuallyHidden from '@reach/visually-hidden';
import { useTranslation } from 'react-i18next';

const Marketplace = () => {
  const { t } = useTranslation();

  // if (loading) {
  //   return (
  //     <Page>
  //       <p>{t('Loading')}</p>
  //     </Page>
  //   );
  // }
  // if (error) {
  //   return (
  //     <Page>
  //       <ErrorMessage error={error} />;
  //     </Page>
  //   );
  // }
  return (
    <Page>
      <p>yep</p>
    </Page>
  );
};

export default Marketplace;
