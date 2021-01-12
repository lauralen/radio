import React from "react";
import "style/main.scss";
import style from "./App.module.scss";

import { stationsList } from "utils/data";

import Widget from "components/Widget/Widget";
import WidgetHeader from "components/Widget/WidgetHeader";
import WidgetBody from "components/Widget/WidgetBody";
import WidgetFooter from "components/Widget/WidgetFooter";

import Station from "components/Station";

function App(): JSX.Element {
  return (
    <Widget>
      <WidgetHeader />
      <WidgetBody>
        <ul className={style.list}>
          {stationsList.map(station => {
            const { title, frequency } = station;

            return (
              <li key={frequency} className={style.listItem}>
                <Station title={title} frequency={frequency} />
              </li>
            );
          })}
        </ul>
      </WidgetBody>
      <WidgetFooter />
    </Widget>
  );
}

export default App;
