import React, { useState } from "react";
import "style/main.scss";
import style from "./App.module.scss";

import { stationsList } from "utils/data";

import Widget from "components/Widget/Widget";
import WidgetHeader from "components/Widget/WidgetHeader";
import WidgetBody from "components/Widget/WidgetBody";
import WidgetFooter from "components/Widget/WidgetFooter";

import Station from "components/Station";

function App(): JSX.Element {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  return (
    <Widget>
      <WidgetHeader />
      <WidgetBody>
        <ul className={style.list}>
          {stationsList.map(station => {
            const { title, frequency } = station;
            const isSelected = title === selectedStation;

            return (
              <li
                key={frequency}
                className={style.listItem}
                onClick={() => {
                  setSelectedStation(isSelected ? null : title);
                }}
              >
                <Station
                  title={title}
                  frequency={frequency}
                  isSelected={isSelected}
                />
              </li>
            );
          })}
        </ul>
      </WidgetBody>
      <WidgetFooter selectedStation={selectedStation} />
    </Widget>
  );
}

export default App;
