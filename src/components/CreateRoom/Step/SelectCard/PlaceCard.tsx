import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { TiDeleteOutline } from 'react-icons/ti';
import { removeSelectedItem } from '@/feature/SelectedItemsSlice';
type ContainerProps = {
  index: number;
};

type Props = {
  index: number;
};

const PlaceCard = (props: Props) => {
  const dispatch = useDispatch();
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
  const handleDeleteItem = (itemName: string) => {
    if (props.index === 0) {
      dispatch(
        removeSelectedItem({
          category: 'house',
          itemToRemove: { IMG: '', name: itemName },
        }),
      );
    }
    if (props.index === 1) {
      dispatch(
        removeSelectedItem({
          category: 'food',
          itemToRemove: { IMG: '', name: itemName },
        }),
      );
    }
    if (props.index === 2) {
      dispatch(
        removeSelectedItem({
          category: 'attraction',
          itemToRemove: { IMG: '', name: itemName },
        }),
      );
    }
  };
  return (
    <Wrap>
      {List.map((item, idx) =>
        item.name === '' ? (
          <div key={idx}></div>
        ) : (
          <Container index={props.index} key={idx}>
            <CardIMG src={item.IMG} />
            <CardName>{item.name}</CardName>
            <DeleteBtn onClick={() => handleDeleteItem(item.name)}>
              <TiDeleteOutline size='30' />
            </DeleteBtn>
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
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-size: cover;
`;

const CardName = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${(props) => {
    switch (props.index) {
      case 0:
        return '#F0B86E'; // 첫 번째 카드 배경색
      case 1:
        return '#9F91CC'; // 두 번째 카드 배경색
      case 2:
        return '#D4E2D4'; // 세 번째 카드 배경색
    }
  }};
  gap: 15px;
  margin-bottom: 20px;

  ${CardIMG} {
    background-color: #ffffff;
    border-radius: 100%;
    background-size: cover;
  }

  ${CardName} {
    font-size: 10px;
    font-weight: bold;
    color: black;
  }
`;
const DeleteBtn = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  border: 0;
  outline: 0;
`;
