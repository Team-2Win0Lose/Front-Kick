import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

type props = {};
const Calendar = (props: props) => {
  const handleDateClick = (arg: { dateStr: any }) => {
    console.log(arg.dateStr);
  };

  return (
    <FullCalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        firstDay={1}
        dateClick={handleDateClick}
        events={[
          { title: 'event 1', date: '2023-08-01' },
          { title: 'event 2', date: '2023-08-02' },
        ]}
        titleFormat={(date) => {
          let year = date.date.year;
          let month = date.date.month + 1;

          return year + '년 ' + month + '월';
        }}
      />
    </FullCalendarWrapper>
  );
};
const FullCalendarWrapper = styled.div`
  .fc-day-sun a {
    color: red;
  }
  .fc-day-sat a {
    color: blue;
  }
  .fc-toolbar-title {
    font-size: 16px;
    font-weight: bold;
  }
  .fc-button {
    padding: 5px;
    border-radius: 12px;
  }
  .fc-col-header-cell {
    font-size: 12px;
  }
  .fc-scrollgrid-liquid {
    height: 200%;
  }
  display: flex;
  justify-content: center;
  margin-top: -100px;
  width: 100%;
`;
export default Calendar;
