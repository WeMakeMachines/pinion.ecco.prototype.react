import store from "../store";
import { setWeatherDaily, setWeatherNow } from "../store/reducers/weather";
import { setLoading, setLoaded } from "../store/reducers/app";
import Scheduler from "./Scheduler";

import PinionWeather from "./PinionWeather";

export default class SyncWeatherData {
  private readonly interval = 1000 * 60;

  constructor() {
    this.schedule(this.syncWeather);
  }

  schedule(callback: () => void): void {
    new Scheduler(callback, this.interval, true);
  }

  async syncWeather(): Promise<void> {
    try {
      store.dispatch(setLoading());
      const response = await PinionWeather.getWeather();

      store.dispatch(setWeatherNow(response.now));
      store.dispatch(setWeatherDaily(response.daily));
      store.dispatch(setLoaded());
    } catch (error) {
      console.log(error);
    }
  }
}
