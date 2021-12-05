import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SyncWeatherData from "./services/SyncWeatherData";
import DateHelpers from "./helpers/date";
import { selectWeatherNow } from "./store/selectors/selectWeather";
import MainFrame from "./frames/Main";
import Modal from "./components/Modal";

import styles from "./App.module.css";
import {
  selectBackgroundColor,
  selectForegroundColor,
} from "./store/selectors/selectTheme";

function App() {
  //   const weatherNow = useSelector(selectWeatherNow);
  //   const [isDaytime, setIsDaytime] = useState(true);

  const foregroundColor = useSelector(selectForegroundColor);
  const backgroundColor = useSelector(selectBackgroundColor);

  new SyncWeatherData();

  // useEffect(() => {
  //   setIsDaytime(
  //     DateHelpers.isDaytime(weatherNow.sun.sunrise, weatherNow.sun.sunset)
  //   );
  // }, [weatherNow]);

  return (
    <div
      className={styles.container}
      style={{
        background: backgroundColor,
        color: foregroundColor,
      }}
    >
      <Modal>
        <MainFrame />
      </Modal>
    </div>
  );
}

export default App;
