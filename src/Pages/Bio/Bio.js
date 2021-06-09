import { useBio } from 'Hooks';
import styles from './styles.module.css';
import { Tile, List, Intro, Links, Experience, ContactInfo } from 'Components';
export const Bio = () => {
  const { user, skills, experience, certifications } = useBio();

  return (
    <div className={styles.main}>
      <div className={styles.contentColumn}>
        {user ? (
          <Tile>
            <div className={styles.intro}>
              <Intro user={user} />
            </div>
          </Tile>
        ) : (
          <>Loading...</>
        )}

        {user ? (
          <Tile>
            <div className={styles.links}>
              <Links links={user.links} />
            </div>
          </Tile>
        ) : (
          <>Loading</>
        )}

        {experience ? (
          <div className={styles.experience}>
            <Experience experience={experience} />
          </div>
        ) : (
          <>Loading...</>
        )}
      </div>

      <div className={styles.detailsColumn}>
        {user ? (
          <Tile>
            <div className={styles.contactInfo}>
              <ContactInfo user={user} />
            </div>
          </Tile>
        ) : (
          <>Loading...</>
        )}

        <div className={styles.skills}>
          {skills ? (
            <Tile>
              <List items={skills} title="Languages, Platforms, and Frameworks" />
            </Tile>
          ) : (
            <>Loading...</>
          )}
        </div>

        <div className={[styles.certifications, styles.tile].join(' ')}>
          {certifications ? (
            <Tile>
              <List items={certifications} title="Certifications" />
            </Tile>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};
