import React from 'react';
import styled from 'styled-components';

import { List } from 'components/atoms';
import { ListProps } from 'components/atoms/List.A';

export type ListMapperProps = {
  dataSet: ListProps[];
};

export default function ListMapper({ dataSet }: ListMapperProps) {
  return (
    <StListMapper>
      {dataSet.map(data => (
        <List key={data.id} {...data} />
      ))}
    </StListMapper>
  );
}

const StListMapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  li {
    padding: 20px;
    color: #ffffff;
    font-size: 25px;
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      color: #66ccff;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;
