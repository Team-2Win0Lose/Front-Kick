import React from 'react'
import CourseCard from '../components/RoomInfo/CourseCard/CourseCard'
import CurrentInfo from '../components/RoomInfo/CurrentInfo/CurrentInfo'
import MeetingMapInfo from '../components/RoomInfo/MeetingMapInfo'
import PostInfo from '../components/RoomInfo/PostInfo'

type Props = {}

const RoomInfo = (props: Props) => {
  return (
    <div>
        <CurrentInfo></CurrentInfo>
        <MeetingMapInfo></MeetingMapInfo>
        <PostInfo></PostInfo>
        <CourseCard></CourseCard>

    </div>
    
  )
}

export default RoomInfo