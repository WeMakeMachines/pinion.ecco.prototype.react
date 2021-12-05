import { useSelector } from "react-redux";

import { selectForegroundColor } from "../../../store/selectors/selectTheme";
import { TemperatureUnits } from "../../../types";

import Celsius from "../ThemedIcons/Celcius";
import Fahrenheit from "../ThemedIcons/Fahrenheit";

import styles from "./index.module.css";

type TemperatureType = {
  actual: number;
  feelsLike?: number;
  units: string;
};

export default function Temperature({ actual, units }: TemperatureType) {
  const fillColor = useSelector(selectForegroundColor);
  const unitType = units as TemperatureUnits;

  return (
    <div className={styles.container}>
      <div>{Math.round(actual)}</div>
      <div className={styles.icon}>
        {unitType === TemperatureUnits.CELSIUS ? (
          <Celsius fillColor={fillColor} />
        ) : (
          <Fahrenheit fillColor={fillColor} />
        )}
      </div>
    </div>
  );
}
