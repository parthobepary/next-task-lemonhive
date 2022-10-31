import React, { useEffect, useState } from "react";
import fakeData from "../../json/schedule2.json";
import style from "../../styles/EventSchedule.module.css";
import TableBody from "./TableBody";
import TableHeading from "./TableHeading";

const EventTable = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  console.log(events);

  const detailsShcedule = (item) => {
    console.log(item);
  };

  return (
    <div className={`mt-10 ${style.scroll}`}>
      <div className={`${style.box_ontainer}`}>
        <TableHeading></TableHeading>
        <div>
          <TableBody allevents={fakeData}></TableBody>
          <TableBody allevents={fakeData}></TableBody>
          <TableBody allevents={fakeData}></TableBody>
        </div>
      </div>
    </div>
  );
};

export default EventTable;
