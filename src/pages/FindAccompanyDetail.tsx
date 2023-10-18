import PlaceCard from '@/components/CreateRoom/Step/SelectCard/PlaceCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AccompanyPostReal } from '@/lib/interface';
import { BASE_URL } from '@/config';
import {
  teamidConvertStadium,
  teamidConverttoTeamName,
} from '@/util/teamnameConvertImg';
import { convertStringToArray } from '@/util/compareDate';

const FindAccompanyDetail = () => {
  const [recruitDetailData, setrecruitDetailData] =
    useState<AccompanyPostReal>();
  const { recruitment_board_id } = useParams() as {
    recruitment_board_id: string;
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${BASE_URL}/api/recruitment/?recruitment_board_id=${recruitment_board_id}`,
          {
            method: 'get',
          },
        );
        const data = await res.json();
        setrecruitDetailData(data);
      } catch (Error) {
        console.error('Error:', Error);
      }
    }
    fetchData();
  }, []);
  const tagList = recruitDetailData?.tagList as string;
  console.log(tagList);

  return (
    <Form>
      <ImgBox>
        <IMG
          src={recruitDetailData?.thumbnail}
          alt='선택한 배경 사진이 없습니다.(No Image)'
        />
      </ImgBox>
      <Title>{recruitDetailData?.title}</Title>
      <Box>
        <TitleText>🔥 매치 정보</TitleText>
        <MatchInfo>
          <FlexContainer>
            <FlexContainerLeft>
              <FlexText>
                <FlexItem>{recruitDetailData?.createdDate}</FlexItem>
              </FlexText>
              <FlexText>
                <FlexItem>
                  {teamidConvertStadium(recruitDetailData?.TeamId)}
                </FlexItem>
              </FlexText>
            </FlexContainerLeft>
            <FlexContainerRight>
              <Text>
                {' '}
                {teamidConverttoTeamName(recruitDetailData?.TeamId)} vs{' '}
                {recruitDetailData?.opponentTeamId}{' '}
              </Text>
            </FlexContainerRight>
          </FlexContainer>
        </MatchInfo>
      </Box>
      <Box>
        <TitleText>🔥 동행 정보</TitleText>
        <JoinInfo>
          <FlexContainer>
            <FlexContainerLeft>
              <FlexText>
                <Text>희망 인원 </Text>
                <Text>
                  {' '}
                  {recruitDetailData?.minNum} ~ {recruitDetailData?.maxNum} 명
                </Text>
              </FlexText>
            </FlexContainerLeft>
            <FlexContainerRight>
              <Text>
                {' '}
                동행 장소 {recruitDetailData?.meetingPlace}{' '}
                {recruitDetailData?.detailMeetingPlace}
              </Text>
              <Text> 동행 기간 {recruitDetailData?.term} </Text>
            </FlexContainerRight>
          </FlexContainer>
        </JoinInfo>
      </Box>
      \{' '}
      <Box>
        <TitleText>🔥 태그 정보</TitleText>
        <TagInfo>
          {convertStringToArray(tagList)?.map((tagItem: any, index: number) => (
            <TagWrapper key={index}>{tagItem}</TagWrapper>
          ))}
        </TagInfo>
      </Box>
      <Box>
        <TitleText>🔥 카드 정보</TitleText>
        <CardInfo>
          <ScrollContainer>
            {/* <CardContainer>
              {recruitDetailData?.tourCardIdList.accommodation.map((item) => (
                <PlaceCard
                index={0}
                ischk={false}
                list={accompany.data.data.cardInfo.house}
              />
              ))}
              {accompany.data.data.cardInfo.food.length > 0 && (
                <PlaceCard
                  index={1}
                  ischk={false}
                  list={accompany.data.data.cardInfo.food}
                />
              )}
              {accompany.data.data.cardInfo.attraction.length > 0 && (
                <PlaceCard
                  index={2}
                  ischk={false}
                  list={accompany.data.data.cardInfo.attraction}
                />
              )}
            </CardContainer> */}
          </ScrollContainer>
        </CardInfo>
      </Box>
      <Content>{recruitDetailData?.content}</Content>
    </Form>
  );
};

export default FindAccompanyDetail;

const Form = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  justify-content: left;
  align-items: left;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const IMG = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Title = styled.div`
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  font-size: 25px;
  /* border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc; */
`;

const MatchInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`;

const FlexItem = styled.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`;

const FlexText = styled.div`
  align-items: center;
  gap: 10px;
`;

const TitleText = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexContainerLeft = styled.div`
  justify-content: left;
  align-items: center;
`;

const FlexContainerRight = styled.div`
  gap: 15px;
`;

const JoinInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`;

const TagInfo = styled.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`;

const TagWrapper = styled.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`;

const Content = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`;

const CardInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
`;

const CardContainer = styled.div`
  display: flex;
`;

const ScrollContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  /* Chrome 브라우저 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
`;
