import styled from 'styled-components';
import { CenteredMain } from '../index';

const StyledHelp = styled(CenteredMain)`
  color: ${({ theme }) => theme.color.lightShades};
  align-items: center;
  /* justify-content: flex-start; */
  justify-content: flex-start;
  padding: 3rem 10rem;
  height: 80vh;
  h1,
  h2 {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.85);
  }
  p {
    margin: 0.5rem 0;
  }
  table {
    margin: 2rem 0;
  }
  th,
  td:nth-child(2n) {
    text-align: center;
  }
  .copyright {
    position: absolute;
    align-self: center;
    bottom: 0;
  }
  .warning {
    margin: auto 0;
    align-self: flex-start;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 1rem 1rem;
  }
`;

export default StyledHelp;
