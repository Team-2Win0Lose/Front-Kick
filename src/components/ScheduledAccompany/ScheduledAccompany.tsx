import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAction } from '../../feature/TeamSlice';
import { useEffect } from 'react';
import { AiFillSetting }  from 'react-icons/ai'

type Props = {};

const ScheduledAccompany = (props: Props) => {
  const navigate = useNavigate();

  return (
      <Form>
    
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



export default ScheduledAccompany;
