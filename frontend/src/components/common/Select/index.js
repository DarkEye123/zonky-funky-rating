import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { PoseGroup } from 'react-pose';
import { useEscape, useModalClose } from './hooks';
import { Overlay, Container, SelectRow, Circle } from './styled';
import Portal from '../Portal';

const Select = ({ options = [], selected = 0, selectHandler, onClose, isOpen = false }) => {
  const element = useRef(null);
  useEscape(onClose);
  useModalClose(onClose, element);
  const handleCloseModal = index => {
    selectHandler(index);
    onClose();
  };

  return (
    <Portal selector="modal">
      <PoseGroup>
        {isOpen && (
          <Overlay data-testid="select" key="selectOverlay" ref={element}>
            <Container key="selectContainer">
              {options.map((option, index) => (
                <SelectRow onClick={() => handleCloseModal(index)} key={index}>
                  <Circle
                    selected={selected === index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                    />
                  </Circle>
                  <p>{option}</p>
                </SelectRow>
              ))}
            </Container>
          </Overlay>
        )}
      </PoseGroup>
    </Portal>
  );
};

Select.propTypes = {
  selected: PropTypes.number,
  options: PropTypes.array.isRequired,
  selectHandler: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Select;
