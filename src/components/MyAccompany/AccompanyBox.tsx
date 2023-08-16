import styled from 'styled-components';
import { AccompanyMadeByMe, accompanyType, hostType } from '@/lib/interface';
import { calculateDday } from '@/util/calculateDday';
type Props = {
  boxdata: AccompanyMadeByMe;
};

const AccompanyBox = (props: Props) => {
  return (
    <Box>
      <Header>
        <Host>
          <HostImg></HostImg>
          <HostName>{props.boxdata.hostData.hostName}</HostName>
        </Host>
        <Partition></Partition>
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
        <Status>
          <DDay>
            📅 D-{calculateDday(props.boxdata.accompanyData.closedDate)}
          </DDay>
          <CurrentStatus>{props.boxdata.accompanyData.nowStatus}</CurrentStatus>
        </Status>
      </Header>
      <Body>
        <Title>{props.boxdata.accompanyData.title}</Title>
        <Cards>
          <Card>
            <CardImg>카드 사진</CardImg>
            <CardName>카드 이름</CardName>
          </Card>
        </Cards>
        <Tags>
          {props?.boxdata.accompanyData.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </Body>
      <Footer></Footer>
    </Box>
  );
};
const Box = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
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
`;
const Host = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HostImg = styled.div`
  width: 30px;
  height: 30px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`;
const HostName = styled.p`
  font-size: 10px;
`;
const Match = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #9b9b9b;
`;
const DDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
`;
const CurrentStatus = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #898989;
  border-radius: 8px;
  border: none;
`;

// 카드 바디 부분
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 15px;
  gap: 8px;
`;
const Title = styled.p`
  font-size: 12px;
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
  align-items: center;
  background-color: #d9d9d9;
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
`;
const CardName = styled.p`
  font-size: 10px;
`;
const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const Tag = styled.p`
  font-size: 8px;
  font-weight: 350;
  color: #898989;
`;
// 카드 푸터 부분
const Footer = styled.div``;
export default AccompanyBox;
