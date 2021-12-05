import styles from "./Description.module.css";

type DescriptionType = {
  text: string;
};

export default function Description({ text }: DescriptionType) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
}
