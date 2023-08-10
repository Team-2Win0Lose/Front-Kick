import React, { Component } from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

type Props = {}

const DatePickerRange = (props: Props) => {

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  
  return (
    <StyledDatePicker
      locale={ko} 
      dateFormat="yyyy년 MM월 dd일 a hh시"
      dateFormatCalendar="yyyy년 MM월"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={10}
      timeCaption="시간"
      shouldCloseOnSelect// 날짜를 선택하면 datepicker가 자동으로 닫힘
      closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false   
      minDate={new Date()} // minDate 이전 날짜 선택 불가
      placeholderText="날짜를 선택해주세요."
      // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        if (update instanceof Date) {
          setDateRange([update, update]);
        } else if (Array.isArray(update)) {
          setDateRange(update);
        }
      }}
      withPortal
    />
  )
}

export default DatePickerRange


const StyledDatePicker = styled(DatePicker)`
  width: 500px; 
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  align-items:center;

`;