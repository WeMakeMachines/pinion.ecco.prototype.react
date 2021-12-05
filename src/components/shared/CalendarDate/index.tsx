import DateHelpers from "../../../helpers/date";

type CalendarDateType = {
  timestamp: number;
};

export default function CalendarDate({ timestamp }: CalendarDateType) {
  const dateTime = DateHelpers.timestampInMilliseconds(timestamp);
  const isTomorrow = DateHelpers.isTomorrow(dateTime);

  const options: Intl.DateTimeFormatOptions = { weekday: "long" };

  // TODO settings language
  const dateAsString = isTomorrow
    ? "Tomorrow"
    : new Intl.DateTimeFormat("en-GB", options).format(dateTime);

  return <p>{dateAsString}</p>;
}
