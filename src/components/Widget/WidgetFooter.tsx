import React from "react";
import style from "./WidgetFooter.module.scss";

type Props = {
  selectedStation: string | null;
};

function WidgetFooter({ selectedStation }: Props): JSX.Element {
  return (
    <div className={style.footer}>
      {selectedStation && (
        <>
          <div className={style.title}>Currently playing</div>
          <div>{selectedStation}</div>
        </>
      )}
    </div>
  );
}

export default WidgetFooter;
