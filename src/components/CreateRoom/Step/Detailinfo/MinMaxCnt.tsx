import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {};

const MinMaxCnt = (props: Props) => {
  const [minValue, setMinValue] = useState<number | undefined>();
  const [maxValue, setMaxValue] = useState<number | undefined>();

  return (
    <BoxContainer>
      <SettingTxt>최소</SettingTxt>
      <StyledInput>
        <input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
        />
      </StyledInput>
      <SettingTxt>명</SettingTxt>
      <SettingTxt>-</SettingTxt>
      <SettingTxt>최대</SettingTxt>
      <StyledInput>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
        />
      </StyledInput>
      <SettingTxt>명</SettingTxt>
    </BoxContainer>
  );
};

export default MinMaxCnt;

const BoxContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom:10px;
`;

const SettingTxt = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 40px;
    padding: 10px;
    font-size: 16px;
  }
`;
