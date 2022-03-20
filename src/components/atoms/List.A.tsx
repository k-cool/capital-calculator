import React from 'react';
import styled from 'styled-components';

export type ListProps = {
  id?: number;
  text: string;
  emoji?: string;
  children?: React.ReactNode;
};

export default function List({ text, emoji }: ListProps) {
  return (
    <StList>
      <StEmoji>{emoji}</StEmoji>
      <StText>{text}</StText>
    </StList>
  );
}

const StList = styled.li`
  display: flex;
  width: 100%;
`;

const StText = styled.p`
  margin-left: 10px;
`;

const StEmoji = styled.p``;
