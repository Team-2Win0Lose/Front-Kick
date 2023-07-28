import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../Detailinfo/Thumbnail'
import TitleName from '../Detailinfo/TitleName'

type Props = {}

function Summary({}: Props) {
  return (
    <Form>
        <Thumbnail></Thumbnail>
        <TitleName></TitleName>
        

    </Form>
  )
}

export default Summary


const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;