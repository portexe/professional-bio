import { Tile } from 'Components';
import styles from './styles.module.css';

export const Experience = ({ experience }) => (
  <div className={styles.main}>
    <h2>EXPERIENCE</h2>

    <div className={styles.experience}>
      {experience.map((e, index) => (
        <Tile key={index}>
          <h3>{e.companyName},</h3>

          <h4>{e.jobTitle}</h4>

          <h6>
            {e.startDate} - {e.endDate || 'PRESENT'}
          </h6>

          <p>{e.description}</p>
        </Tile>
      ))}
    </div>
  </div>
);
