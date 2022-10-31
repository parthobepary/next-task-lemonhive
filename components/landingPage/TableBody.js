import React from "react";
import Draggable from "react-draggable";
import style from "../../styles/TableBody.module.css";

function TableBody({ allevents }) {
  const details = (item) => {
    console.log(item);
  }
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
                evn.event.map((ev, i) => {
                  return (
                    <div
                      className={`flex items-center justify-center h-full ${style.slot_time}`}
                      key={i}
                    >
                      <Draggable>
                        <div className={style.drag_box}>
                          <p className={style.drag_hading}>{ev.time}</p>
                          <div>
                            <p>{ev.name}</p>
                            <p>{ev.distance}</p>
                            <button onClick={()=>details(ev)} className="btn btn-xs">details</button>
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
