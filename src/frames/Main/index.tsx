import WeatherOutlook from "../../components/WeatherOutlook";
import Clock from "../../components/Clock";
import Forecast from "../../components/WeatherDailyForecast";

export default function MainFrame() {
  return (
    <>
      <WeatherOutlook />
      <Clock />
      <Forecast days={6} />
    </>
  );
}
