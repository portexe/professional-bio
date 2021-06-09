import { useBio } from 'Hooks';
import styles from './styles.module.css';
import { Intro, Skills, Experience, ContactInfo } from 'Components';

export const Bio = () => {
  const { user, skills, experience } = useBio();

  return (
    <div className={styles.main}>
      <div className={styles.contentColumn}>
        {user ? (
          <div className={styles.intro}>
            <Intro user={user} />
          </div>
        ) : (
          <>Loading...</>
        )}

        {experience ? <Experience experience={experience} /> : <>Loading...</>}
      </div>

      <div className={styles.detailsColumn}>
        {user ? (
          <div className={styles.contactInfo}>
            <ContactInfo user={user} />
          </div>
        ) : (
          <>Loading...</>
        )}

        <div className={styles.skills}>{skills ? <Skills skills={skills} /> : <>Loading...</>}</div>
      </div>
    </div>
  );
};
