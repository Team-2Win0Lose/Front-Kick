import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


type Props = {}

const ContentInput = (props: Props) => {
  let [contents, setContents] = useState<string>('');
  return (
      <StyledInput>
         <StyledTextarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        placeholder="내용을 입력해주세요."
        />
      </StyledInput>
  )
}

export default ContentInput


const StyledTextarea = styled.textarea`
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: vertical;
  font-size: 16px;
  /* border: none;
  outline: none; */
`;

const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;





