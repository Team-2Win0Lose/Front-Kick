import React from 'react'
import styled from 'styled-components'
import SelectBox from '../../SelectBox'
import { peopleNumbering } from '../../../../util/PeopleNumbering'


type Props = {}

const MinMaxCnt = (props: Props) => {
  return (
    <BoxContainer>
          <SettingTxt>최소</SettingTxt>
          <SelectBox id='minimum' options={peopleNumbering}></SelectBox>
          <SettingTxt>~ 최대</SettingTxt>
          <SelectBox id='maximum' options={peopleNumbering}></SelectBox>
    </BoxContainer>
    
  )
}

export default MinMaxCnt

const BoxContainer = styled.div`
  padding: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const SettingTxt = styled.p``;