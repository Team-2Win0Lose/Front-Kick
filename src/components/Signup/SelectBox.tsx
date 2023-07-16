import React, { useState } from 'react';
import styled from 'styled-components';

interface SelectBoxProps {
  year: number;
  month: number;
  day: number;
  onChange: (year: number, month: number, day: number) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  year,
  month,
  day,
  onChange,
}) => {
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedDay, setSelectedDay] = useState(day);

  // 생년월일 선택이 변경될 때 호출되는 함수
  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => {
    const value = parseInt(e.target.value, 10);

    if (type === 'year') {
      setSelectedYear(value);
    } else if (type === 'month') {
      setSelectedMonth(value);
    } else if (type === 'day') {
      setSelectedDay(value);
    }

    onChange(selectedYear, selectedMonth, selectedDay);
  };

  // 연도 옵션 생성
  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear;
    const options = [];

    for (let i = startYear; i <= endYear; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }

    return options;
  };

  // 월 옵션 생성
  const renderMonthOptions = () => {
    const options = [];

    for (let i = 1; i <= 12; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }

    return options;
  };

  // 일 옵션 생성
  const renderDayOptions = () => {
    const options = [];
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }

    return options;
  };

  return (
    <SelectBoxWrapper>
      <Select
        value={selectedYear}
        onChange={(e) => handleSelectChange(e, 'year')}
      >
        {renderYearOptions()}
      </Select>
      <IconSVG
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M10 14L16 6H4L10 14Z'
          fill='#1A1A1A'
        />
      </IconSVG>{' '}
      <Select
        value={selectedMonth}
        onChange={(e) => handleSelectChange(e, 'month')}
      >
        {renderMonthOptions()}
      </Select>
      <IconSVG
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M10 14L16 6H4L10 14Z'
          fill='#1A1A1A'
        />
      </IconSVG>
      <Select
        value={selectedDay}
        onChange={(e) => handleSelectChange(e, 'day')}
      >
        {renderDayOptions()}
      </Select>
      <IconSVG
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M10 14L16 6H4L10 14Z'
          fill='#1A1A1A'
        />
      </IconSVG>{' '}
    </SelectBoxWrapper>
  );
};
const SelectBoxWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;
export default SelectBox;
