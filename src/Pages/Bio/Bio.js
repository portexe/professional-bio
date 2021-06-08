import { useBio } from 'Hooks';
import styles from './styles.module.css';
import { Skills, BioHeader, Experience } from 'Components';

export const Bio = () => {
  const { user, skills, experience } = useBio();

  return (
    <div className={styles.main}>
      {user ? <BioHeader user={user} /> : <>Loading...</>}

      <div className={styles.content}>
        <div className={styles.experience}>
          {experience ? <Experience experience={experience} /> : <>Loading...</>}
        </div>
        <div className={styles.skills}>{skills ? <Skills skills={skills} /> : <>Loading...</>}</div>
      </div>
    </div>
  );
};
