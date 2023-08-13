import React from 'react'
import styled from 'styled-components'
import PlaceInfoCarousel from './PlaceInfoCarousel'
import SearchBar from './Searchbar'


const PlaceRecommandInfo = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <Title>
        ⚽️ 킥킥 추천 장소
      </Title>
      <PlaceInfoCarousel/>
    </div>
  )
}

export default PlaceRecommandInfo

const Title = styled.div`
  border: 1px;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;
