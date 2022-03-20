import React from 'react';
import styled from 'styled-components';
import { Header, TextInput } from '../components/atoms';

export default function Home() {
  return (
    <StHomepage>
      <StHeaderDiv>
        <Header>SNOW BALL CALCULATOR</Header>
      </StHeaderDiv>
      <StNav></StNav>
      <StMain>
        <StLeftDiv></StLeftDiv>
        <StRightDiv></StRightDiv>
      </StMain>
    </StHomepage>
  );
}

const StHomepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const StMain = styled.main``;
const StHeaderDiv = styled.div`
  width: 100%;
  background-color: rgb(46, 44, 44);
  text-align: center;
`;

const StNav = styled.nav``;

const StLeftDiv = styled.div``;
const StRightDiv = styled.div``;
