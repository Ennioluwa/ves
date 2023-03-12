import React from "react";
import { events } from "../data/events";
import SingleService from "./SingleService";

const EventServices = () => {
  return (
    <div>
      {events.map((event, index) => {
        return <SingleService key={index} {...event} index={index} />;
      })}
    </div>
  );
};

export default EventServices;
