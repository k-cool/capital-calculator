import React, { useState } from 'react';
import styled from 'styled-components';

type TextInputProps = {
  name: string;
  value: any;
  placeholder?: string;
};

export default function TextInput({
  name,
  value,
  placeholder,
}: TextInputProps) {
  const [isShrunk, setIsShrunk] = useState(false);

  const handleOnclick = () => {
    setIsShrunk(true);
  };

  return (
    <StTextInput placeholder={placeholder}>
      <input type='text' id={name} value={value} />
      <StPlaceholder isShrunk={isShrunk} onClick={handleOnclick}>
        {placeholder}
      </StPlaceholder>
    </StTextInput>
  );
}

const StTextInput = styled.div`
  position: relative;

  input {
    width: 200px;
    padding: 7px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    text-align: center;
    outline: none;
  }
`;

type StPlaceholderProps = {
  isShrunk: boolean;
};

const StPlaceholder = styled.div`
  position: absolute;
  top: ${(props: StPlaceholderProps) => (props.isShrunk ? '-10%' : '50%')};
  left: ${(props: StPlaceholderProps) => (props.isShrunk ? '20%' : '50%')};
  font-size: ${(props: StPlaceholderProps) =>
    props.isShrunk ? '12px' : '15px'};
  transform: translate(-50%, -50%);
  transition: ease 0.5s all;
`;
