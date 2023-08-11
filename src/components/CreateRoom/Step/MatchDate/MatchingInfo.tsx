import React from 'react'
import styled from 'styled-components'

interface MatchingInfoProps {
    event: any; 
    onClose: () => void;
  }
  

interface itemsProps {
    rating: number,
    item: string,
    name: string,
    stadium: string,
  }
  
const items:itemsProps[] = [
  {
    rating: 1,
    item: 'public/assets/teams/강원FC.png',
    name: '강원FC',
    stadium: '강원종합운동장'

    }
]

const MatchingInfo = ({ event, onClose }: MatchingInfoProps) => {
  return (
    <div>
        {items.map((item, index) => (
            <Box key={index}>
            <FlexContainer>
                <FlexContainerLeft>
                    <IMG src={item.item} alt={item.name} />
                    <Text> vs </Text>
                    <IMG src={item.item} alt={item.name} />
                </FlexContainerLeft>
                <FlexContainerRight>
                    <FlexText>
                        <DIV>경기 일정</DIV>
                        <FlexItem>{item.stadium}</FlexItem>
                    </FlexText>
                    <FlexText>
                        <DIV>경기 장소</DIV>
                        <FlexItem>{item.stadium}</FlexItem>
                    </FlexText>
                </FlexContainerRight>
            </FlexContainer>
            <FlexContainer>
                {/* <Btn onClick={onClose}>선택</Btn> */}
                <Btn onClick={onClose}>닫기</Btn>
            </FlexContainer>
            </Box>
            
        ))}
    </div>
  )
}

export default MatchingInfo

const Text = styled.div`
    font-size: 18px;
    font-weight: bold;
    justify-content:center;
    align-items:center;
    margin-left: 5%;
    margin-right: 5%;
`;

const Btn = styled.div`
    font-size: 15px;
    font-weight: bold;
    justify-content:center;
    align-items:center;
    margin-left: 5%;
    margin-right: 5%;
    margin-top:2%;
    margin-bottom: 2%;
`;


const Box = styled.div`
    position: relative; 
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    background: #eeeeee;
    border-radius: 20px;
    margin: 10px auto;
`;

const IMG = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const FlexContainerLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

const FlexContainerRight = styled.div`
    align-items: center;
    margin-left: 10%;
  
`;


const FlexItem = styled.div`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`;

const FlexText = styled.div`
    display: flex;
    align-items: center;
    margin-top:10%;
    margin-bottom: 10%;

`;

const DIV = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    font-size: 5px;
    
`;

