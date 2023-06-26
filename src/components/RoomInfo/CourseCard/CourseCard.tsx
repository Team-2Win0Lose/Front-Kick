import React from 'react'
import styled from "styled-components";
import CourseCardCarousel from './CourseCardCarousel';


const CourseCard = () => {
  




  return (
    <div>
    <Title>
        코스 카드
    </Title>
    <CourseCardCarousel/> 

    </div>
    
  )
}

export default CourseCard



const Title = styled.div`
  font-size: 30px;
  margin-Top: 30px;
  font-weight: bold;
`;
