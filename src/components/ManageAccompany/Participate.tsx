import React from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
type Props = {};

const Participate = (props: Props) => {
  return (
    <Container>
      <Header>
        <Personnel>
          <Text>동행 신청 인원</Text>
          <Person>1/4</Person>
        </Personnel>
        <Apply>
          <Text>예약대기</Text>
          <Person>3명</Person>
        </Apply>
      </Header>
      <Body>
        <Box>
          <Profile>
            <ProfileImg>
              <BsFillPersonFill size='29' />
            </ProfileImg>
            <Name>다오짱짱1234</Name>
          </Profile>
          <Btn>
            <Agree>수락</Agree>
            <Disagree>거절</Disagree>
          </Btn>
        </Box>
        <Box>
          <Profile>
            <ProfileImg>
              <BsFillPersonFill size='29' />
            </ProfileImg>
            <Name>다오짱짱1234</Name>
          </Profile>
          <Btn>
            <Agree>수락</Agree>
            <Disagree>거절</Disagree>
          </Btn>
        </Box>
        <Box>
          <Profile>
            <ProfileImg>
              <BsFillPersonFill size='29' />
            </ProfileImg>
            <Name>다오짱짱1234</Name>
          </Profile>
          <Btn>
            <Agree>수락</Agree>
            <Disagree>거절</Disagree>
          </Btn>
        </Box>
      </Body>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 12px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 13px;
`;
const Personnel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
const Apply = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
const Text = styled.p`
  font-size: 12px;
`;
const Person = styled.p`
  font-size: 12px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const ProfileImg = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 100%;
  background-color: #898989;
`;
const Name = styled.div`
  max-width: 110px;
  max-height: 34px;
  padding: 8px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border: 1px solid black;
  border-radius: 12px;
  font-size: 12px;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Agree = styled.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`;
const Disagree = styled.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`;
export default Participate;
