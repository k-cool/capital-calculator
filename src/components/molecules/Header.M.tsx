import styled from 'styled-components';
import React from 'react';

import { Title } from 'components/atoms';

type HeaderProps = {
  text: string;
  emoji?: string;
  children?: React.ReactNode;
};

export default function Header({ text, emoji, children }: HeaderProps) {
  return (
    <StHeader>
      {children}
      <StEmoji>{emoji}</StEmoji>
      <StTitle>
        <Title text={text} type='h1' />
      </StTitle>
      <StEmoji>{emoji}</StEmoji>
    </StHeader>
  );
}

const StHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const StEmoji = styled.div`
  padding: 10px;
  color: white;
  font-size: 90px;
`;

const StTitle = styled.h1``;
