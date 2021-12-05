import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectIconStyle } from "../../../../store/selectors/selectSettings";
import { WeatherIcons } from "./types";

type WeatherIconType = {
  type: WeatherIcons;
};

export default function WeatherIcon({ type }: WeatherIconType) {
  const [icon, setIcon] = useState("");
  const iconStyle = useSelector(selectIconStyle);

  useEffect(() => {
    void (async () => {
      const importedIcon = await import(
        `assets/weather-icons/${iconStyle}/${type}.svg`
      );

      setIcon(importedIcon.default);
    })();
  }, [iconStyle, type]);

  return <img alt={type} src={icon} />;
}
