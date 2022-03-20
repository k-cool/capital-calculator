import React from 'react';
import styled from 'styled-components';

import { Header } from 'components/molecules';
import { SideNav } from 'components/organisms';

export default function Home() {
  return (
    <StHomepage>
      <StHeaderDiv>
        <Header text='SNOW BALL CALCULATOR' emoji='❄' />
      </StHeaderDiv>
      <StMain>
        <SideNav />
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

const StHeaderDiv = styled.div`
  width: 100%;
  background-color: rgb(46, 44, 44);
  text-align: center;
`;

const StMain = styled.main`
  width: 100%;
`;

const StLeftDiv = styled.div``;
const StRightDiv = styled.div``;
