import { Label, TextInput } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';

export type InputBarProps = {
  id: string;
  text: string;
  fontSize: number;
  value: any;
  placeholder?: string;
};

export default function InputBar({
  id,
  text,
  fontSize,
  value,
  placeholder,
}: InputBarProps) {
  return (
    <StInputBar>
      <Label htmlFor={id} text={text} fontSize={fontSize} />
      <TextInput name={id} value={value} placeholder={placeholder} />
    </StInputBar>
  );
}

const StInputBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  color: white;
`;
