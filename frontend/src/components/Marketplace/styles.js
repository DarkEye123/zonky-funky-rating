import styled from 'styled-components';
import { CenteredDiv } from '../common';

const AverageInfo = styled(CenteredDiv)`
  position: relative;
  width: 15rem;
  height: 15rem;
  border: 1px solid ${({ theme }) => theme.color.lightShades};
  color: ${({ theme }) => theme.color.lightShades};
  font-family: 'Roboto';
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.85);
  letter-spacing: 1px;
  margin-top: 5rem;
`;

export { AverageInfo };
