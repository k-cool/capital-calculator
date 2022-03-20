import styled from 'styled-components';
import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <StHeader>
      <StTitle>{children}</StTitle>
    </StHeader>
  );
}

const StHeader = styled.div``;

const StTitle = styled.h1`
  align-self: center;
  padding: 20px;
  color: white;
  font-size: 70px;
`;
