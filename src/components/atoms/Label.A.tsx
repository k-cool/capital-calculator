import React from 'react';
import styled from 'styled-components';

export type LabelProps = {
  htmlFor?: string;
  text: string;
  fontSize: number;
};

export default function Label({ htmlFor, text, fontSize }: LabelProps) {
  return (
    <StLabel fontSize={fontSize}>
      <label htmlFor={htmlFor}>{text}</label>
    </StLabel>
  );
}

type StLabelProps = {
  fontSize: number;
};

const StLabel = styled.div`
  font-size: ${(props: StLabelProps) => props.fontSize + 'px'};
`;
