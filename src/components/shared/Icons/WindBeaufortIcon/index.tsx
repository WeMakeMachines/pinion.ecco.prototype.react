import WeatherIcon from "../WeatherIcon";
import { WeatherIcons } from "../WeatherIcon/types";

type WindBeaufortIcon = {
  scale: number;
};

export default function WindBeaufortIcon({ scale }: WindBeaufortIcon) {
  // @ts-ignore
  return <WeatherIcon type={WeatherIcons[`WIND_BEAUFORT_${scale}`]} />;
}
