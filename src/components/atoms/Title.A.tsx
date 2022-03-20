import React, { useMemo } from 'react';
import styled from 'styled-components';

export type TitleProps = {
  text: string;
  type: 'h1' | 'h2' | 'h3';
};

export default function Title({ text, type }: TitleProps) {
  const Text = useMemo(() => {
    if (type === 'h1') return <StH1>{text}</StH1>;
    else if (type === 'h2') return <StH2>{text}</StH2>;
    else if (type === 'h3') return <StH3>{text}</StH3>;
    else return <StH3>{text}</StH3>;
  }, [text, type]);

  return <StTitle>{Text}</StTitle>;
}

const StTitle = styled.div``;

const StH1 = styled.h1`
  padding: 20px;
  color: white;
  font-size: 70px;
`;

const StH2 = styled.h2`
  padding: 20px;
  color: white;
  font-size: 50px;
`;

const StH3 = styled.h3`
  padding: 20px;
  color: white;
  font-size: 25px;
`;
