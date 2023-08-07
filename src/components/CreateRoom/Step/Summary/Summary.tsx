import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../Detailinfo/Thumbnail'
import TitleName from '../Detailinfo/TitleName'
import ContentInput from '../Detailinfo/ContentInput'

type Props = {}

function Summary({}: Props) {
  return (
    <Form>
        <Thumbnail></Thumbnail>
        <TitleName></TitleName>
        매치정보
        모임정보
        카드정보
        <ContentInput></ContentInput>

        

    </Form>
  )
}

export default Summary


const Form = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;