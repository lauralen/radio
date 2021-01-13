import React, { useState, useEffect } from "react";
import "style/main.scss";
import style from "./App.module.scss";

import { StationInterface } from "utils/types";
import { stationsList } from "utils/data";

import Widget from "components/Widget/Widget";
import WidgetHeader from "components/Widget/WidgetHeader";
import WidgetBody from "components/Widget/WidgetBody";
import WidgetFooter from "components/Widget/WidgetFooter";
import Station from "components/Station";

const URL = "";

function App(): JSX.Element {
  const [stations, setStations] = useState<StationInterface[]>(stationsList);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: Response = await fetch(URL);
      setStations(await response.json());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(String(error));
    }
  };

  return (
    <Widget>
      <WidgetHeader />
      <WidgetBody>
        {loading && <p className={style.info}>Loading stations from API...</p>}
        {error && (
          <p className={style.info}>
            Failed to load stations from API: {error}
          </p>
        )}
        <ul className={style.list}>
          {stations.map(station => {
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
