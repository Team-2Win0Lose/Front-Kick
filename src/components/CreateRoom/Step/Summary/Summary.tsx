import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'

type Props = {}

function Summary({}: Props) {
  const { img, title, stadium, date, homename, awayname, meetingPlace, detailMeetingPlace, term, minNum, maxNum, content } = useSelector((state: RootState) => state.summary);
  
  
  return (
    <Form>
        {/* 이미지 박스 */}
        <ImgBox>
          <IMG src={img} alt="선택한 배경 사진이 없습니다.(No Image)" />
        </ImgBox>

        {/* 제목 */}
        <Title>
          {title}
        </Title>

        {/* 매치 정보 */}
        <TitleText>🔥 매치 정보</TitleText>
        <MatchInfo>
            <FlexContainer>
              <FlexContainerLeft>
                <FlexText>
                  <FlexItem>{date}</FlexItem>
                </FlexText>
                <FlexText>
                  <FlexItem>{stadium}</FlexItem>
                </FlexText>
              </FlexContainerLeft>
              <FlexContainerRight>
                  <Text> {homename} vs {awayname} </Text>
              </FlexContainerRight>
            </FlexContainer>
        </MatchInfo>

        {/* 동행 정보 */}
        <TitleText>🔥 동행 정보</TitleText>
        <JoinInfo>
            <FlexContainer>
              <FlexContainerLeft>
                <FlexText>
                  <Text>희망 인원 </Text>
                  <Text> {minNum} ~ {maxNum} 명</Text>
                </FlexText>
              </FlexContainerLeft>
              <FlexContainerRight>
                <Text> 동행 장소 {meetingPlace} </Text>
                <Text> 동행 기간 {term} </Text>
              </FlexContainerRight>
            </FlexContainer>
        </JoinInfo>

        {/* 카드 정보 */}
        <TitleText>🔥 카드 정보(대표 최대 2개 설정)</TitleText>
        <CardInfo>
          

        </CardInfo>

        {/* 내용 */}
        <Content>
          {content}
        </Content>
    </Form>
  )
}

export default Summary


const Form = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const DIV = styled.div`
  font-size: 5px;
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
  padding-bottom:10px;
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
  padding: 20px; 
`;

const Content = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding : 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`;