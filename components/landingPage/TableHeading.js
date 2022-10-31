import React from "react";
import style from "../../styles/TableHeading.module.css";

function TableHeading() {
  const day = ["", "Thu", "fri", "Tue", "Mon", "wed", "sun", "Sat"];
  return (
    <div className={`flex justify-between ${style.flex_box}`}>
      {day.map((d, i) => {
        return (
          <div
            className={`w-full flex justify-center items-center ${style.first_child}`}
            key={i}
          >
            <div className={`flex justify-center`}> {d}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TableHeading;
