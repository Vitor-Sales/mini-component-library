/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// My solution before watching the video
// const SIZES = {
//   small: {
//     "--height": 8 + "px",
//     "--padding": 0 + "rem",
//     "--borderRadius": 2 + "rem",
//   },
//   medium: {
//     "--height": 12 + "px",
//     "--padding": 0 + "rem",
//     "--borderRadius": 2 + "rem",
//   },
//   large: {
//     "--height": 24 + "px",
//     "--padding": .2 + "rem",
//     "--borderRadius": .2 + "rem",
//   }
// };

// const ProgressBar = ({ value, size }) => {
//   const styles = SIZES[size]

//   return (
//     <ProgressBG style={styles}>
//       <ProgressFill style={styles} value={value}>
//       </ProgressFill>
//     </ProgressBG>
//   )
// };

// const ProgressBG = styled.div`
//   width: 370px;
//   height: var(--height);
//   padding: var(--padding);
//   border-radius: var(--borderRadius);
//   background-color: ${COLORS.gray50};
//   overflow: hidden;
// `;

// const ProgressFill = styled.div`
//   height: 100%;
//   width: ${props => props.value}%;
//   background-color: ${COLORS.primary};
//   border-radius: ${props => {
//     if (props.value >= 99) {
//       return 'var(--borderRadius)';
//     }
//     return `var(--borderRadius) 0 0 var(--borderRadius)`;
//   }}
//   `;

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      ariavaluenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + "px",
        '--radius': styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + "%",
            '--height': styles.height + 'px',
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
