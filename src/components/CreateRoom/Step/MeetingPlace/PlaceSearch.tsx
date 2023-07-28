import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


type Props = {};

const PlaceSearch = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Form>

      <SettingBox>
        <BoxContainer>
          <CourseAddBtn onClick={() => navigate('/addcourse')}>
          여기를 눌러 주소를 검색해주세요
          </CourseAddBtn>
          <CourseAddBtn onClick={() => navigate('/addcourse')}>
          상세 정보를 입력해주세요.(ex 분수대 앞, 편의점 앞)
          </CourseAddBtn>
        </BoxContainer>
      </SettingBox>
    </Form>
  );
};
const Form = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SettingBox = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const BoxContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom:20px;
`;

const CourseAddBtn = styled.div`
  width: 326px;
  height: 50px;
  margin-top:40px;
  margin-bottom:40px;
  flex-shrink: 0;
  border-radius: 14.163px;
  background: #1F1F45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default PlaceSearch;
