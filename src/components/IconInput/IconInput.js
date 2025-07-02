import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { colors } from '@storybook/node-logger';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size]

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput {...delegated} style={{
        '--width': width + 'px',
        '--height': styles.height / 16 + 'rem',
        '--border-thickness': styles.borderThickness + 'px',
        '--font-size': styles.fontSize / 16 + 'rem',
      }}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.transparentGray15};
  padding-left: var(--height);
  font-weight: 700;
  outline-offset: 2px;
  color: inherit;
  font-size: var(--font-size);

  &:hover {
    color: ${COLORS.black};
    border-color: ${COLORS.black};
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
