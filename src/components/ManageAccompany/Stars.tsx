import React, { useMemo } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

interface Props {
  index: number;
  rating: number;
  hoverRating: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onSaveRating: (index: number) => void;
}

const Stars = (props: Props) => {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fillColor = useMemo(() => {
    if (hoverRating >= index) {
      return '#ffdb58'; // #ffdb58 === 노란색
    } else if (!hoverRating && rating >= index) {
      return '#ffdb58'; // #ffdb58 === 노란색
    }
    return '#dcdcdc'; // #dcdcdc === 회색
  }, [rating, hoverRating, index]);

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <AiOutlineStar style={{ marginRight: '3px' }} fillColor={fillColor} />
    </div>
  );
};

export default Stars;
