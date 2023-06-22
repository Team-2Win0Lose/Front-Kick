import React, { useState } from 'react';
import styled from 'styled-components';
import {AiFillPlusCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'; 


const TodoForm = () => {
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 새 항목 생성하기
    setValue('');
  };

  const navigate = useNavigate();


  return (
      <Button onClick={() => { navigate('/createroom'); }}>
      <AiFillPlusCircle
      />
      </Button>

  );
};

export default TodoForm;

const Button = styled.button`
`;

const Input = styled.input`
    display: flex;
    width: 70%;
    height: 34px;
    outline: none;
    padding-left: 10px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
`;