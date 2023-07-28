import React from 'react'
import styled from 'styled-components'


type Props = {}

const ContentInput = (props: Props) => {
  return (
    <SettingBox>
        <BoxContainer>
        <ContentBox></ContentBox>
        </BoxContainer>
    </SettingBox>
  )
}

export default ContentInput

const Title = styled.p``;

const SettingBox = styled.div`
  margin-top: 30px;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
`;

const BoxContainer = styled.div`
  padding: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ContentBox = styled.textarea`
  width: 326px;
  height: 206px;
  flex-shrink: 0;
  border-radius: 15.684px;
  background: #fff;
  padding: 15px;
`