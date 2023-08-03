import React from 'react'
import styled from 'styled-components'

type Props = {}

const TitleName = (props: Props) => {
  return (
    <SettingBox>
      <BoxContainer>
        <Input className="list-item">
          <input type="text"/>
        </Input>
      </BoxContainer>
    </SettingBox>
  )
}

export default TitleName

const SettingBox = styled.div`
  margin-top: 5px;
  width: 100%;
`;


const BoxContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Input = styled.div`
  flex-shrink: 0;
  border-radius: 15.684px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;