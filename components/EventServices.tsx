import React, { useState } from "react";
import { events } from "../data/events";
import SingleService from "./SingleService";

const EventServices = () => {
  const [active, setActive] = useState(2);
  return (
    <div>
      {events.map((event, index) => {
        return (
          <SingleService
            key={index}
            {...event}
            index={index}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
};

export default EventServices;
