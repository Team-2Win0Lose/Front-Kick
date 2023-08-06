import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

type Props = {}

const TitleName = (props: Props) => {
  let [title, setTitle] = useState<string>('')
  return (

      <StyledInput>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해주세요."/>
      </StyledInput>
  
  )
}

export default TitleName


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
    width: 300px; 
    padding: 10px; 
    /* border: none; 
    outline: none;  */
    font-size: 16px; 
  }
`;
