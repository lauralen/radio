import React from "react";
import style from "./WidgetHeader.module.scss";

import Button from "components/Button";

import backArrowIcon from "images/back-arrow.png";
import switchIcon from "images/switch.png";

function WidgetHeader(): JSX.Element {
  return (
    <div className={style.header}>
      <Button>
        <img className={style.icon} src={backArrowIcon} alt="Go back" />
      </Button>
      <div className={style.title}>Stations</div>
      <Button>
        <img className={style.icon} src={switchIcon} alt="Switch" />
      </Button>
    </div>
  );
}

export default WidgetHeader;
