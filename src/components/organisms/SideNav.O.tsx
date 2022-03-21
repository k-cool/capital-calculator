import React from 'react';
import styled from 'styled-components';

import { ListMapper } from 'components/molecules';

import { ListProps } from 'components/atoms/List.A';
import { Title } from 'components/atoms';

const dataSet: ListProps[] = [
  { id: 1, text: 'Fire 계산기', emoji: '🔥' },
  { id: 2, text: '무언가 계산기', emoji: '📈' },
];

export default function SideNav() {
  return (
    <StSideNav>
      <Title text='Circulator List' type='h3' />
      <ListMapper dataSet={dataSet} />
    </StSideNav>
  );
}

const StSideNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  min-height: 100vh;
  background-color: #66ccff;
  border-right: 1px solid lightgrey;
`;
