import React from "react";
import style from "../../styles/Title.module.css";

const Title = ({ title, pera }) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <p className={style.pera}>{pera}</p>
    </div>
  );
};

export default Title;
