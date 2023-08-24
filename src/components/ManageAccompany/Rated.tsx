import styled from 'styled-components';
import { useState } from 'react';
import Stars from './Stars';
type Props = {};

const Rated = (props: Props) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => setHoverRating(index);
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = () => setHoverRating(0);
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index: number) => setRating(index);
  // 클릭시, 별 인덱스를 스테이트에 저장.
  return (
    <Container>
      <Title>받은 평가 점수</Title>
      {[1, 2, 3, 4, 5].map((idx) => {
        return (
          <Stars
            index={idx}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
export default Rated;
