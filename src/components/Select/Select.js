import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

// My solution before watching the video

// const Select = ({ label, value, onChange, children }) => {
//   const displayedValue = getDisplayedValue(value, children);

//   return (
//     <SelectWrapper>
//       <SelectInvisible value={value} onChange={onChange}>
//         {children}
//       </SelectInvisible>
//       <SelectVisible>
//         {displayedValue}
//         <Icon id="chevron-down" size={24} strokeWidth={1} />
//       </SelectVisible>
//     </SelectWrapper>
//   );
// };

// const SelectWrapper = styled.div`
//   position: relative;
//   width: 100%;
// `;

// const SelectInvisible = styled.select`
//   opacity: 0;
// `;

// const SelectVisible = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   pointer-events: none;
//   background-color: ${COLORS.transparentGray15};
//   border-radius: .4rem;
//   padding: 0.5rem .5rem 0.5rem 1rem;
//   color: ${COLORS.gray700};

//   &:hover {
//     background-color: ${COLORS.blackA15};
//   }
// `;

// Josh solution

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange} >
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
color: ${COLORS.gray700};
background-color: ${COLORS.transparentGray15};
font-size: ${16 / 16}rem;
padding: 12px 16px;
padding-right: 52px;
border-radius: 8px;

${NativeSelect}:focus + & {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}

${NativeSelect}:hover + & {
  color: ${COLORS.black};
}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;


export default Select;
