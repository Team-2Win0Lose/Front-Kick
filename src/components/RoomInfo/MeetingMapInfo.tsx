import React from 'react'
import styled from 'styled-components';

type Props = {}

const MeetingMapInfo = (props: Props) => {
  return (
    <Box>지도</Box>
  )
}

export default MeetingMapInfo


const Box = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  background: #124995;

`;