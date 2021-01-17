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
          <div data-testid="footer-title" className={style.title}>
            Currently playing
          </div>
          <div data-testid="selected-station">{selectedStation.title}</div>
        </>
      )}
    </div>
  );
}

export default WidgetFooter;
