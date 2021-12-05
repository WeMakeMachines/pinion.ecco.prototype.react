import WeatherIcon from "../WeatherIcon";
import { WeatherIcons } from "../WeatherIcon/types";

type WeatherUvWarningIconType = {
  uv: number;
};

export default function WeatherUvWarningIcon({ uv }: WeatherUvWarningIconType) {
  uv = Math.round(uv);

  // @ts-ignore
  return <WeatherIcon type={WeatherIcons[`UV_INDEX_${uv}`]} />;
}
