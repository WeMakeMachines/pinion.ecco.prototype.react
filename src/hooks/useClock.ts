import { useEffect, useState } from "react";

export function useClock(showSeconds: boolean): string {
  const options: Intl.DateTimeFormatOptions = showSeconds
    ? {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
    : {
        hour: "2-digit",
        minute: "2-digit",
      };

  const getCurrentTime = () => new Date().toLocaleTimeString([], options);

  const [time, setTime] = useState(getCurrentTime());
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    setTime(getCurrentTime());

    const id = window.setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    setIntervalId(id);

    return window.clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSeconds]);

  return time;
}
