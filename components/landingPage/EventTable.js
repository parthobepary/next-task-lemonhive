import React from "react";
import Draggable from "react-draggable";
import sedule1 from "../../json/schedule.json";
import sedule2 from "../../json/schedule2.json";

const EventTable = () => {

  /*   useEffect(() => {
    fetch("http://localhost:500/todo")
      .then((res) => res.json())
      .then((data) => {
        setTd(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:500/todo")
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
      });
  }, []); */


  return (
    <div className="mt-10 scroll">
      <div className="box-container">
        <table>
          <tr>
            <th></th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
          <tr>
            <td>09.00</td>
            {sedule1.map((t, i) => {
              return (
                <td key={i}>
                  <Draggable>
                    <div className="box-1">
                      <p>{t.time}</p>
                      <div>
                        <p>{t.name}</p>
                        <p>{t.distance}</p>
                      </div>
                      <button
                        className="btn"
                        onClick={() => detailsShcedule(JSON.stringify(t))}
                      >
                        Detail
                      </button>
                    </div>
                  </Draggable>
                </td>
              );
            })}
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10.00</td>
            <td></td>
            <td></td>
            <td></td>
            {sedule2.map((t, i) => {
              return (
                <td key={i}>
                  <Draggable>
                    <div className="box-2">
                      <p>{t.time}</p>
                      <div>
                        <p>{t.name}</p>
                        <p>{t.distance}</p>
                      </div>
                      <button
                        className="btn"
                        onClick={() => detailsShcedule(JSON.stringify(t))}
                      >
                        Detail
                      </button>
                    </div>
                  </Draggable>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>17.00</td>
            <td></td>
            {sedule1.map((t, i) => {
              return (
                <td key={i}>
                  <Draggable>
                    <div className="box-3">
                      <p>{t.time}</p>
                      <div>
                        <p>{t.name}</p>
                        <p>{t.distance}</p>
                      </div>
                      <button
                        className="btn"
                        onClick={() => detailsShcedule(JSON.stringify(t))}
                      >
                        Detail
                      </button>
                    </div>
                  </Draggable>
                </td>
              );
            })}
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default EventTable;
