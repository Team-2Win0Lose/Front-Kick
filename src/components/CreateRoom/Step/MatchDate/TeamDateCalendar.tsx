import React,{useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventContentArg } from "@fullcalendar/core/index.js";
import styled from "styled-components";
import MatchingInfo from "./MatchingInfo";

interface TeamDateCalendarProps {
  teamName: string;
  teamEvents: { title: string; start: string }[];
}

const TeamDateCalendar: React.FC<TeamDateCalendarProps> = ({ teamName, teamEvents }) => {    
  
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  
  const filteredEvents = teamEvents.map(event => ({
    ...event,
    start: new Date(event.start)
  }));

  const renderEventContent = (eventInfo: EventContentArg) => {
    const { title, image, index } = eventInfo.event.extendedProps;
    
    return (
        <EventContainer>
          <EventTitle>{title}</EventTitle>
          {image && <EventImage src={image} alt={title} />}
        </EventContainer>
    );
  };

  const handleEventClick = (eventInfo: any) => {
    setSelectedEvent(eventInfo.event);
  };

  const handleCloseMatchingInfo = () => {
    setSelectedEvent(null);
  };


  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={filteredEvents} 
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />
      {selectedEvent && (
        <MatchingInfoContainer>
        <MatchingInfo
          event={selectedEvent.event}
          onClose={handleCloseMatchingInfo}
        /></MatchingInfoContainer>
      )}
    </CalendarContainer>
  );
};

export default TeamDateCalendar;

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .fc {
      width: 100%;
    }
   // toolbar container
   .fc .fc-toolbar.fc-header-toolbar {
    margin-top: 10px;
    padding: 0 40px;
    background-color: #1F1F45;
    height: 63px;
    font-weight: 600;
    font-size: 12px;
    line-height: 29px;
    color: white;
    border-radius: 20px 20px 0px 0px;
  }

  // toolbar 버튼
  .fc .fc-button-primary {
    background-color: transparent;
    border: none;

    span {
      font-size: 30px;
    }
  }

  // 요일 부분
  .fc-theme-standard th {
    height: 32px;
    padding-top: 3.5px;
    background: #e5edff;
    border: 1px solid #dddee0;
    font-weight: 1000;
    font-size: 26px;
    color: black;
  }

  // 오늘 날짜 배경색
  .fc .fc-daygrid-day.fc-day-today {
    color: #1F1F45;
  }

  // 날짜별 그리드
  .fc .fc-daygrid-day-frame {
    padding: 10px;
    
    
  }
  
  // 날짜  ex) 2일
  .fc .fc-daygrid-day-top {
    flex-direction: row;
    margin-bottom: 10px;
  }

  // 각 이벤트 요소
  .fc-event {
    cursor: pointer;
    margin-bottom: 5px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    /* background-color:#1F1F45; */
  }
    /* 일요일 날짜 빨간색 */
  .fc-day-sun a {
    color: red;
    text-decoration: none;
  }

  /* 토요일 날짜 파란색 */
  .fc-day-sat a {
    color: blue;
    text-decoration: none;
  }
`;

const EventContainer = styled.div`
  justify-content:center;
  align-items: center;
  color: #fff;
  border-radius: 4px;
`;

const EventTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const MatchingInfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const EventImage = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
