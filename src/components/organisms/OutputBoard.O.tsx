import React from 'react';
import styled from 'styled-components';

export type OutputBoardProps = {};

export default function OutputBoard() {
  return <StOutputBoard></StOutputBoard>;
}

const StOutputBoard = styled.div`
  width: 50vw;
  min-height: 100vh;
  background-color: #e6f7ff;
  border-right: 1px solid lightgrey;
`;
