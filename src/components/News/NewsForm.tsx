import React from 'react';
import styled from 'styled-components';

type Props = {
  newsTitle: string;
  newsContent: string;
  newsImg: string;
};

const NewsForm = (props: Props) => {
  return (
    <Form href={props.newsContent}>
      <IMG src={props.newsImg} />
      <TITLE>{props.newsTitle}</TITLE>
    </Form>
  );
};

const Form = styled.a`
  height: 180px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #eeeeee;
  border-radius: 30px;
  padding: 11px 10px;
  gap: 10px;
  text-decoration: none;
`;
const IMG = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;
const TITLE = styled.h1`
  padding: 0 3px;
  font-weight: 500;
  font-size: 11px;
  text-align: left;
  color: black;
`;
export default NewsForm;
