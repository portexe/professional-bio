import styles from './styles.module.css';

export const List = ({ title, items }) => (
  <div className={styles.main}>
    <h2>{title}</h2>

    {items.map((i, index) => (
      <div key={index} className={styles.item}>
        {i}
      </div>
    ))}
  </div>
);
