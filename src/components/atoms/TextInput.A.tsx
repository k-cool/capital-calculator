import React from 'react';
import styled from 'styled-components';

type TextInputProps = {
  name: string;
  value: number;
};

export default function TextInput({ name, value }: TextInputProps) {
  return (
    <StTextInput className='TextInput'>
      <StLabel htmlFor={name}>{name}</StLabel>
      <StInput type='text' id={name} value={value} />
    </StTextInput>
  );
}

const StTextInput = styled.div``;
const StLabel = styled.label``;
const StInput = styled.input``;
