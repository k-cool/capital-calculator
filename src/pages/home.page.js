import React from 'react';
import styled from 'styled-components';

export default function Home(props) {
  console.log(props);

  return <Test>hello</Test>;
}

const Test = styled.div`
  color: white;
  background-color: black;
`;
