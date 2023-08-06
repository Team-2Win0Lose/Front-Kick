import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlusCircle} from 'react-icons/ai'


type Props = {}

const Thumbnail = (props: Props) => {
  return (
    <StyledInput>
        <UploadBox>
          <CustomIcon></CustomIcon>
          <DIV>
            대표 이미지 선택
          </DIV>
        </UploadBox>
    </StyledInput>
  )
}

export default Thumbnail



const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

`;

const UploadBox = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px; 
  /* border: none; 
  outline: none;  */
  font-size: 16px;
  
`;

const CustomIcon = styled(AiOutlinePlusCircle)`
  width: 40px;
  height: 40px;
  color: #ccc;

`;

const DIV = styled.div`
  margin-top: 10px;
  color: #ccc;

  
`;