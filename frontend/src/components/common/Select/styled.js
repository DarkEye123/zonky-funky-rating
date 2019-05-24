import styled from 'styled-components';
import posed from 'react-pose';

const BaseOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.svg`
  fill: ${({ selected, theme }) => (selected ? theme.color.main : theme.color.darkAccent)};
  margin: auto;
  border-radius: 50%;
`;

const SelectRow = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  padding: 1rem;
  border-bottom: 1px solid #979797;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.lightAccent};
    ${Circle} {
      fill: ${({ theme }) => theme.color.main};
    }
  }
  :active {
    ${Circle} {
      background-color: ${({ theme }) => theme.color.main};
    }
  }
  p {
    margin: auto 0;
  }
`;

const BaseContainer = styled.div`
  width: 21.25rem;
  position: relative;
  display: grid;
  /* height: 20.625rem; */
  background-color: ${({ theme }) => theme.color.lightShades};
  margin: 0.5rem 0.5rem 0;
  border-radius: 0.5rem;
  color: #8b8b8b;
  letter-spacing: 0.3px;
  font-weight: 500;
  @media (max-width: 320px) {
    width: 18.25rem;
    /* height: 17.625rem; */
  }
  ${SelectRow}:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  ${SelectRow}:first-child:hover {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
`;

const Overlay = posed(BaseOverlay)({
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 50 },
  },
  exit: {
    delay: 200,
    opacity: 0,
    transition: { duration: 300 },
  },
});

const Container = posed(BaseContainer)({
  init: {
    opacity: 0,
  },
  enter: {
    delay: 150,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 150,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 300 },
  },
});

export { Overlay, Container, SelectRow, Circle };
