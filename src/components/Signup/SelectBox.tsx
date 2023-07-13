import React, { useState } from 'react';

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
    <div>
      <select
        value={selectedYear}
        onChange={(e) => handleSelectChange(e, 'year')}
      >
        {renderYearOptions()}
      </select>
      <select
        value={selectedMonth}
        onChange={(e) => handleSelectChange(e, 'month')}
      >
        {renderMonthOptions()}
      </select>
      <select
        value={selectedDay}
        onChange={(e) => handleSelectChange(e, 'day')}
      >
        {renderDayOptions()}
      </select>
    </div>
  );
};

export default SelectBox;
