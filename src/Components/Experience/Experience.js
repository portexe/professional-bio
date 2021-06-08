import styles from './styles.module.css';

export const Experience = ({ experience }) => (
  <div className={styles.main}>
    {experience.map((e, index) => (
      <div className={styles.item} key={index}>
        {e.companyName}
      </div>
    ))}
  </div>
);
