import LoadingIcon from "../shared/ThemedIcons/Loading";

import styles from "./LoadingModal.module.css";
import { useSelector } from "react-redux";
import { selectForegroundColor } from "../../store/selectors/selectTheme";

export default function LoadingModal() {
  const fillColor = useSelector(selectForegroundColor);

  return (
    <div className={styles.container}>
      {<LoadingIcon fillColor={fillColor} />}
    </div>
  );
}
