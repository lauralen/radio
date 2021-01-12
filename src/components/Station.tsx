import React from "react";
import style from "./Station.module.scss";

type Props = {
  title: string;
  frequency: string;
  isSelected: boolean;
};

function Station({ title, frequency }: Props): JSX.Element {
  return (
    <div className={style.station}>
      <span>{title}</span>
      <span className={style.bold}>{frequency}</span>
    </div>
  );
}

export default Station;
