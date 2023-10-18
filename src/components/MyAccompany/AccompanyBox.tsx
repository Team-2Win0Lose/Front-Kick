import styled from 'styled-components';
import { AccompanyPost } from '@/lib/interface';
import { useNavigate } from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';
import { sliceTitle, sliceDate, replaceNowStatus } from '@/util/sliceTitle';
import { teamidConvertImg } from '@/util/teamnameConvertImg';
import { convertStringToArray } from '@/util/compareDate';

type Props = {
  post: {
    recruitmentBoardId: number;
    hostId: string;
    TeamId: number;
    scheduleId: string;
    tagList: string;
    now_status: number;
    stars: number;
    thumbnail: string;
    title: string;
    content: string;
    opponentTeamId: number;
    tourCardIdList: {
      attraction: [
        {
          title: string;
          content_id: string;
          firstimage: string;
        },
      ];
      restaurant: [
        {
          title: string;
          content_id: string;
          firstimage: string;
        },
      ];
      accommodation: [
        {
          title: string;
          content_id: string;
          firstimage: string;
        },
      ];
    };
    meetingPlace: string;
    meetingPlaceAddress: string;
    detailMeetingPlace: string;
    term: string;
    minNum: number;
    maxNum: number;
    createdDate: string;
    publishedDate: string | null;
    nowHeadCount: number;
    applingUserIdList: string;
    appliedUserIdList: string;
  };
};

const AccompanyBox = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() =>
        navigate(`/findaccompany/detail/${props.post.recruitmentBoardId}`)
      }
    >
      <Header>
        <Host>
          <HostImg
            src={teamidConvertImg(props.post.TeamId)}
            alt={props.post.title}
          />
        </Host>
        <div>
          <Title>{sliceTitle(props.post.title)}</Title>
          <Tags>
            {convertStringToArray(props.post.tagList).map((item, idx) => (
              <Tag key={idx}>#{item}</Tag>
            ))}
          </Tags>
        </div>
      </Header>
      <Body>
        {props.post.tourCardIdList.attraction ? (
          <Cards>
            <Card>
              <CardImg>
                <Img
                  src={props.post.tourCardIdList?.attraction[0]?.firstimage}
                />
              </CardImg>
              <CardName>
                {props.post.tourCardIdList?.attraction[0]?.title}
              </CardName>
            </Card>
          </Cards>
        ) : (
          <Cards>
            <Card>
              <CardImg>카드 사진</CardImg>
              <CardName>카드 이름</CardName>
            </Card>
          </Cards>
        )}
        {props.post.tourCardIdList.restaurant ? (
          <Cards>
            <Card>
              <CardImg>
                <Img
                  src={props.post.tourCardIdList?.restaurant[0]?.firstimage}
                />
              </CardImg>
              <CardName>
                {props.post.tourCardIdList?.restaurant[0]?.title}
              </CardName>
            </Card>
          </Cards>
        ) : (
          <Cards>
            <Card>
              <CardImg>카드 사진</CardImg>
              <CardName>카드 이름</CardName>
            </Card>
          </Cards>
        )}
        {props.post.tourCardIdList.accommodation ? (
          <Cards>
            <Card>
              <CardImg>
                <Img
                  src={props.post.tourCardIdList?.accommodation[0]?.firstimage}
                />
              </CardImg>
              <CardName>
                {props.post.tourCardIdList?.accommodation[0]?.title}
              </CardName>
            </Card>
          </Cards>
        ) : (
          <Cards>
            <Card>
              <CardImg>카드 사진</CardImg>
              <CardName>카드 이름</CardName>
            </Card>
          </Cards>
        )}
      </Body>
      <Footer>
        <Match>
          <HomeTeam>
            <TeamLogo src={teamidConvertImg(props.post.TeamId)} />
            <Versus>Home</Versus>
          </HomeTeam>
          <Versus>VS</Versus>
          <AwayTeam>
            <TeamLogo src={teamidConvertImg(props.post.opponentTeamId)} />
            <Versus>Away</Versus>
          </AwayTeam>
        </Match>
        <Partition></Partition>

        <Accompany>
          <AccompanyInfo>
            <AccompanyData>{sliceDate(props.post.term)}</AccompanyData>
          </AccompanyInfo>
          <Accompany>
            <AccompanyInfo>
              <AccompanyData>{props.post.meetingPlace}</AccompanyData>
            </AccompanyInfo>
          </Accompany>
        </Accompany>

        <Personnel>
          <People>
            <PeopleImg>
              <BsPeopleFill />
            </PeopleImg>
            <PeopleCount>
              {props.post.nowHeadCount}/{props.post.maxNum}
            </PeopleCount>
          </People>

          <Status>
            <CurrentStatus>
              {replaceNowStatus(props.post.now_status)}
            </CurrentStatus>
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
  margin-top: 20px;
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
  width: 100%;
  display: flex;
  justify-content: flex-start;
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
  width: 50px;
  height: 50px;
  object-fit: fill;
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
  /* background-color: #9b9b9b; */
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
  width: 340px;
  height: 138px;
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
const Img = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
`;
const CardName = styled.p`
  font-size: 10px;
  color: black;
`;
const Tags = styled.ul`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;
const Tag = styled.li`
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
