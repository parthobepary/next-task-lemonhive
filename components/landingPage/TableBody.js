import Link from "next/link";
import React from "react";
import Draggable from "react-draggable";
import style from "../../styles/TableBody.module.css";

function TableBody({ allevents }) {
  const eventHandler = (e, data) => {
    console.log("Event Type", e.type);
    console.log({ e, data });
  };

  return (
    <div className="flex">
      <div className={`${style.slot_time}`}>
        <div className="flex items-center justify-center h-full">
          <p>{allevents[0].slot}</p>
        </div>
      </div>
      <div className="flex">
        {allevents[1].map((evn, i) => {
          return (
            <div key={i}>
              {evn.event.length ? (
                evn.event.map((ev, index) => {
                  return (
                    <div
                      className={`flex items-center justify-center h-full ${style.slot_time}`}
                      key={index}
                    >
                      <Draggable onStart={eventHandler}>
                        <div className={style.drag_box}>
                          <p className={style.drag_hading}>{ev.time}</p>
                          <div>
                            <p>{ev.name} {index}</p>
                            <p>{ev.distance}</p>
                            <div className="btn btn-xs">
                              <Link href={`/home/${JSON.stringify(ev)}`}>Coference Info</Link>
                            </div>
                          </div>
                        </div>
                      </Draggable>
                    </div>
                  );
                })
              ) : (
                <div className={style.slot_time}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TableBody;
