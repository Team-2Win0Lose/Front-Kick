import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventContentArg } from "@fullcalendar/core/index.js";

const TeamDateCalendar = () => {
  const events = [
    { title: 'Meeting1', start: new Date('2023-03-29') },
    { title: 'Meeting2', start: new Date('2023-03-30') }
  ];

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default TeamDateCalendar;
