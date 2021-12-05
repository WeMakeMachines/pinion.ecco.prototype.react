import { useSelector } from "react-redux";

import { selectClockSeconds } from "../../store/selectors/selectSettings";

import { useClock } from "../../hooks/useClock";
import styles from "./index.module.css";

export default function Clock() {
  const showSeconds = useSelector(selectClockSeconds);
  const time = useClock(showSeconds);

  return <div className={styles.face}>{time}</div>;
}
