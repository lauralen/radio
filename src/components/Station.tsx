import React from "react";
import style from "./Station.module.scss";

import Button from "components/Button";

import minusIcon from "images/minus.png";
import plusIcon from "images/plus.png";

type Props = {
  title: string;
  frequency: string;
  isSelected: boolean;
};

function Station({ title, frequency, isSelected }: Props): JSX.Element {
  return (
    <>
      {isSelected && (
        <div className={style.expanded}>
          <Button>
            <img src={minusIcon} alt="Minus" />
          </Button>

          <img
            className={style.img}
            src="https://upload.wikimedia.org/wikipedia/en/6/67/ELO_Time_expanded_album_cover.jpg"
            alt="Station logo"
          />

          <Button>
            <img src={plusIcon} alt="Plus" />
          </Button>
        </div>
      )}

      <div className={style.station}>
        <span>{title}</span>
        <span className={style.bold}>{frequency}</span>
      </div>
    </>
  );
}

export default Station;
