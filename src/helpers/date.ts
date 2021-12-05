export default class DateHelpers {
  static isTomorrow(timestamp: number): boolean {
    const futureDay = new Date(timestamp);
    const now = new Date();
    now.setDate(now.getDate() + 1);

    return futureDay.getDate() === now.getDate();
  }

  static timestampInMilliseconds(timestamp: number): number {
    return timestamp * 1000;
  }

  static isDaytime(sunriseInSeconds: number, sunsetInSeconds: number): boolean {
    const now = Date.now();
    const sunrise = DateHelpers.timestampInMilliseconds(sunriseInSeconds);
    const sunset = DateHelpers.timestampInMilliseconds(sunsetInSeconds);

    return now > sunrise && now < sunset;
  }
}
