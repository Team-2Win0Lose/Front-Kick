import styled from 'styled-components';
import TouristCard from './TouristCard';

const titles = ['숙박', '음식점', '관광지'];

const SelectCard = () => {
  return (
    <DIV>
      {titles.map((title, index) => (
        <TouristCard key={index} title={title} index={index} />
      ))}
    </DIV>
  );
};

export default SelectCard;

const DIV = styled.div`
  width: 390px;
  overflow: scroll;
`;
