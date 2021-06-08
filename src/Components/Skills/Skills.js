import styles from './styles.module.css';

export const Skills = ({ skills }) => {
  return (
    <div className={styles.main}>
      <h2>Languages, Platforms, and Frameworks</h2>

      {skills.map((s, index) => (
        <div className={styles.skill}>{s}</div>
      ))}
    </div>
  );
};
