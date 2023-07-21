import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAction } from '../../feature/TeamSlice';
import { useEffect } from 'react';
import { AiFillSetting }  from 'react-icons/ai'

type Props = {};

const RegisterTeam = (props: Props) => {
  const navigate = useNavigate();

  return (
      <Form>
        <FlexContainer>
          <IMG></IMG>
          <VerticalContainer>
            <NickName>닉네임은이거야 님</NickName>
            <ID>ID : abc@kakao.com</ID>
          </VerticalContainer>
          <AiFillSetting 
            size="30"
            onClick={() => navigate('/selectteam')}>
          </AiFillSetting>
          
          
        </FlexContainer>
      </Form>
   
  );
};



const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 15px;
`;
const NickName = styled.p`
  font-weight: 500;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
`;

const ID = styled.p`
  font-weight: 500;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #585858;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

`;

const VerticalContainer = styled.div`
  align-items: center;
  margin-left:10px;
  margin-right:10px;

`;

const IMG = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-right: 5px;
`;


export default RegisterTeam;
