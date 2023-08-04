import React from 'react';
import styled from 'styled-components';
import TouristCard from './TouristCard';

const titles = ['숙박', '음식점', '관광지'];

const SelectCard = () => {
  return (
    <div>
      {titles.map((title, index) => (
        <TouristCard key={index} title={title} />
      ))}
    </div>
  );
};

export default SelectCard;



