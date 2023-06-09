import React from 'react';
import styled from 'styled-components';
const Loading = () => {
  return <Loader></Loader>;
};

const Loader = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  &&::after {
    content: ' ';
    display: block;
    width: 30px;
    height: 30px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loader 1.2s linear infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Loading;
