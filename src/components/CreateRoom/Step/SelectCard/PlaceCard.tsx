import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

type Props = {
  index: number;
};

const PlaceCard = (props: Props) => {
  let List;
  if (props.index === 0) {
    const selecteditemlist = useSelector(
      (state: RootState) => state.selecteditem.house,
    );
    List = selecteditemlist;
  }
  if (props.index === 1) {
    const selecteditemlist = useSelector(
      (state: RootState) => state.selecteditem.food,
    );
    List = selecteditemlist;
  }
  if (props.index === 2) {
    const selecteditemlist = useSelector(
      (state: RootState) => state.selecteditem.attraction,
    );
    List = selecteditemlist;
  }
  if (!List) {
    // 전달받은 아이템이 null인 경우, 처리할 내용
    return <div>No selected item</div>;
  }

  return (
    <Wrap>
      {List.map((item, idx) =>
        item.name === '' ? (
          <div key={idx}></div>
        ) : (
          <Container key={idx}>
            <div>
              <CardIMG src={item.IMG} />
              <CardName>{item.name}</CardName>
            </div>
          </Container>
        ),
      )}
    </Wrap>
  );
};

export default PlaceCard;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const CardIMG = styled.img`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-size: cover;
`;

const CardName = styled.div`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #1f1f45;
  gap: 15px;
  margin-bottom: 20px;
  margin-right: 10px;

  & > div {
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }

  ${CardIMG} {
    background-color: #ffffff;
    border-radius: 100%;
    background-size: cover;
  }

  ${CardName} {
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
`;
