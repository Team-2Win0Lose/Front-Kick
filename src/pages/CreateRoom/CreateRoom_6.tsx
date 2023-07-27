import styled from 'styled-components';
import SelectBox from '../../components/CreateRoom/SelectBox';
import { peopleNumbering } from '../../util/PeopleNumbering';
import { useNavigate } from 'react-router-dom';
import SelectSchedule from '../../components/CreateRoom/SelectSchedule';
import StepHeader from '../../components/CreateRoom/Step/Step';

type Props = {};

const CreateRoom = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Form>
    
      <StepHeader></StepHeader>
      <SelectSchedule />
      <SettingBox>
        <TitleContainer>
          <TitleInput placeholder='제목(필수)' />
        </TitleContainer>
        <BoxContainer>
          <SettingTxt>최소</SettingTxt>
          <SelectBox id='minimum' options={peopleNumbering}></SelectBox>
          <SettingTxt>~ 최대</SettingTxt>
          <SelectBox id='maximum' options={peopleNumbering}></SelectBox>
        </BoxContainer>
      </SettingBox>
      <SettingBox>
        <TitleContainer>
          <Title>코스 설정</Title>
        </TitleContainer>
        <BoxContainer>
          <CourseAddBtn onClick={() => navigate('/addcourse')}>
            코스 추가하기
          </CourseAddBtn>
        </BoxContainer>
      </SettingBox>
      <SettingBox>
        <TitleContainer>
          <Title>내용</Title>
        </TitleContainer>
        <BoxContainer>
          <ContentBox></ContentBox>
        </BoxContainer>
      </SettingBox>
      <RegisterBtn>등록</RegisterBtn>
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
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
`;
const TitleInput = styled.input`
  width: 90%;
  font-size: 24px;
  padding: 5px 10px;
`;
const Title = styled.p``;
const BoxContainer = styled.div`
  padding: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const SettingTxt = styled.p``;
const CourseAddBtn = styled.div`
  width: 326px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14.163px;
  border: 0.472px solid #5956ff;
  background: #fff;
  box-shadow: 0px 1.8884425163269043px 1.8884425163269043px 0px
    rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentBox = styled.textarea`
  width: 326px;
  height: 206px;
  flex-shrink: 0;
  border-radius: 15.684px;
  border: 0.523px solid #5956ff;
  background: #fff;
  box-shadow: 0px 2.0911853313446045px 2.0911853313446045px 0px
    rgba(0, 0, 0, 0.25);
  padding: 15px;
`;
const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1F1F45;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  color: #ffffff;

`;
export default CreateRoom;
