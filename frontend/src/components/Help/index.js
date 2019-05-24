import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledHelp from './styles';

const Help = () => {
  const { t } = useTranslation();

  return (
    <StyledHelp>
      <h1>{t('How to Log In')}?</h1>
      <p>{t('To log into the app one user was made')}:</p>

      <table>
        <thead>
          <th>{t('USER')}</th>
          <th>{t('PASSWORD')}</th>
        </thead>
        <tbody>
          <tr>
            <td>zonky@test.com</td>
            <td>abc</td>
          </tr>
        </tbody>
      </table>

      <h1>{t('How to get loans average')}?</h1>
      <p>{t('Log into the app, then click on the button and wait')}.</p>

      <div class="warning">
        <h2>{t('Beware')}</h2>
        <p>
          {t('Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.')}
          <br />
          {t('Please be sure to not use them, otherwise strange behavior may occur.')}
        </p>
      </div>

      <p className="copyright">Copyright 2019 - by Matej Leško.</p>
    </StyledHelp>
  );
};

export default Help;
