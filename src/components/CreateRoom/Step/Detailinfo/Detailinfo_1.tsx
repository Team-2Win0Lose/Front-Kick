import React from 'react'
import styled from 'styled-components'
import MinMaxCnt from './MinMaxCnt'
import MeetingTime from './MeetingTime'
import DatePickerRange from '../MeetingDate.tsx/DatePickerRange'
import MeetingDate from '../MeetingDate.tsx/MeetingDate'


type Props = {}

function Detailinfo_1({}: Props) {
  return (
    <Form>
        <MinMaxCnt></MinMaxCnt>
        <MeetingDate></MeetingDate>
        <MeetingTime></MeetingTime>
    </Form>
  )
}

export default Detailinfo_1


const Form = styled.div`
margin: 0 auto;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;