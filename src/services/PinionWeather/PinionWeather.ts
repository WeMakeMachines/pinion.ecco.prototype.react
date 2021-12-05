import axios from "axios";
import { Units } from "../../types";

import { PinionWeatherType } from "./types";

export type PinionWeatherParamsType = {
  speed?: Units;
  temperature?: Units;
};

export default class PinionWeather {
  public static readonly url = process.env["REACT_APP_PINION_WEATHER_URL"];

  static parseParameters(options: PinionWeatherParamsType): string {
    let parameters = "";

    if (options.speed) {
      parameters += `&speed=${options.speed}`;
    }

    if (options.temperature) {
      parameters += `&temp=${options.temperature}`;
    }

    return parameters;
  }

  static async getWeather(
    options?: PinionWeatherParamsType
  ): Promise<PinionWeatherType> {
    let parameters = "";

    if (options) {
      parameters = PinionWeather.parseParameters(options);
    }

    try {
      const response = await axios.get(`${PinionWeather.url}${parameters}`);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
