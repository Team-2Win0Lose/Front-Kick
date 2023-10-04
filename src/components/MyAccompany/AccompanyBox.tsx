import styled from 'styled-components';
import { AccompanyMadeByMe } from '@/lib/interface';
import { useNavigate } from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';
import { Key } from 'react';
import { sliceTitle, sliceDate } from '@/util/sliceTitle';

type Props = {
  boxdata: AccompanyMadeByMe;
};

const AccompanyBox = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(`/findaccompany/detail/${props.boxdata.id}`)}>
      <Header>
        <Host>
          <HostImg src='' alt='' />
        </Host>
        <div>
          <Title>{sliceTitle(props.boxdata.title)}</Title>
          <Tags>
            {props?.boxdata.tag.map(
              (
                tag: string | null | undefined,
                index: Key | null | undefined,
              ) => (
                <Tag key={index}>{tag}</Tag>
              ),
            )}
          </Tags>
        </div>
      </Header>
      <Body>
        <Cards>
          <Card>
            <CardImg>카드 사진</CardImg>
            <CardName>카드 이름</CardName>
          </Card>
        </Cards>
        <Cards>
          <Card>
            <CardImg>카드 사진</CardImg>
            <CardName>카드 이름</CardName>
          </Card>
        </Cards>
        <Cards>
          <Card>
            <CardImg>카드 사진</CardImg>
            <CardName>카드 이름</CardName>
          </Card>
        </Cards>
      </Body>
      <Footer>
        <Match>
          <HomeTeam>
            <TeamLogo src='' />
            <Versus>Home</Versus>
          </HomeTeam>
          <Versus>VS</Versus>
          <AwayTeam>
            <TeamLogo src='' />
            <Versus>Away</Versus>
          </AwayTeam>
        </Match>
        <Partition></Partition>

        <Accompany>
          <AccompanyInfo>
            <AccompanyData>{sliceDate(props.boxdata.date)}</AccompanyData>
          </AccompanyInfo>
          <Accompany>
            <AccompanyInfo>
              <AccompanyData>{props.boxdata.meetingPlace}</AccompanyData>
            </AccompanyInfo>
          </Accompany>
        </Accompany>

        <Personnel>
          <People>
            <PeopleImg>
              <BsPeopleFill />
            </PeopleImg>
            <PeopleCount>
              {props.boxdata.nowHeadCount}/{props.boxdata.maxNum}
            </PeopleCount>
          </People>

          <Status>
            <CurrentStatus>{props.boxdata.nowStatus}</CurrentStatus>
          </Status>
        </Personnel>
      </Footer>
    </Box>
  );
};
const Box = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 15px 10px;
  margin: 15px 0;
  gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #1f1f45;
  color: white;
  font-weight: bold;
`;
const Partition = styled.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`;
// 카드 헤더 부분
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 4px;
`;
const Host = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const HostImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`;
const Match = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const HomeTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AwayTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TeamLogo = styled.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  background-color: #9b9b9b;
`;
const Versus = styled.p`
  font-size: 8px;
  color: black;
`;

const CurrentStatus = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa500;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 8px;
  font-weight: 350;
`;

// 카드 바디 부분
const Body = styled.div`
  display: flex;
  width: 100%;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`;
const Title = styled.p`
  font-size: 16px;
  color: white;
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  width: 108px;
  height: 122px;
`;
const CardImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  font-size: 6px;
  background-color: #9b9b9b;
`;
const CardName = styled.p`
  font-size: 10px;
  color: black;
`;
const Tags = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;
const Tag = styled.p`
  font-size: 11px;
  font-weight: 350;
  color: #d8d7d7;
`;

// 카드 푸터 부분
const Footer = styled.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  background-color: white;
  border-radius: 180px;
`;
const Personnel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3px; */
`;
const PeopleImg = styled.div``;
const PeopleCount = styled.p`
  font-size: 12px;
`;

const Accompany = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`;
const AccompanyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;
const People = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const AccompanyData = styled.p`
  font-size: 12px;
`;

export default AccompanyBox;
