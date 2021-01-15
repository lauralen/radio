import React from "react";
import style from "./WidgetFooter.module.scss";
import { StationInterface } from "utils/types";

type Props = {
  selectedStation: StationInterface | null;
};

function WidgetFooter({ selectedStation }: Props): JSX.Element {
  return (
    <div className={style.footer} data-testid="widget-footer">
      {selectedStation && (
        <>
          <div className={style.title}>Currently playing</div>
          <div>{selectedStation.title}</div>
        </>
      )}
    </div>
  );
}

export default WidgetFooter;
