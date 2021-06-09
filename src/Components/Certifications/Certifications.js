import styles from './styles.module.css';

export const Certifications = ({ certifications }) => {
  return (
    <div className={styles.main}>
      <h2>Certifications</h2>

      {certifications.map((c, index) => (
        <div key={index} className={styles.item}>
          {c}
        </div>
      ))}
    </div>
  );
};
