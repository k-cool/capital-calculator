import { Title } from 'components/atoms';
import { InputBar } from 'components/molecules';
import React, { useState } from 'react';
import styled from 'styled-components';

export type InputBoardProps = {};

export default function InputBoard() {
  const [totalCost, setTotalCost] = useState(0);
  const [costs, setCosts] = useState({
    housing: undefined,
    living: undefined,
    car: undefined,
    traveling: undefined,
    hobby: undefined,
    emergency: undefined,
    etc: undefined,
  });

  // const handleOnChange = e => {};

  return (
    <StInputBoard>
      <Title text='연간비용' type='h3' />
      <InputBar
        id='housing'
        text='주거비용'
        value={costs.housing}
        fontSize={20}
        placeholder='연간 주거비용'
      />
      <InputBar
        id='living'
        text='생활비'
        value={costs.living}
        fontSize={20}
        placeholder='연간 생활비'
      />
      <InputBar
        id='car'
        text='자동차'
        value={costs.car}
        fontSize={20}
        placeholder='연간 차 할부금'
      />
      <InputBar
        id='traveling'
        text='여행비용'
        value={costs.traveling}
        fontSize={20}
        placeholder='연간 여행비 예산'
      />
      <InputBar
        id='hobby'
        text='취미생활'
        value={costs.hobby}
        fontSize={20}
        placeholder='연간 취미 예산'
      />
      <InputBar
        id='emergency'
        text='비상금'
        value={costs.emergency}
        fontSize={20}
        placeholder='연간 예상 비상금'
      />
      <InputBar
        id='etc'
        text='기타비용'
        value={costs.etc}
        fontSize={20}
        placeholder='연간 기타비용'
      />
    </StInputBoard>
  );
}

const StInputBoard = styled.div`
  width: 30vw;
  min-height: 100vh;
  background-color: #b3e6ff;
  border-right: 1px solid lightgrey;
`;
