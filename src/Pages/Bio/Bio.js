import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { BioHeader, Experience } from 'Components';
import { userEndpoint, experienceEndpoint } from 'Constants';

export const Bio = () => {
  const [user, setUser] = useState();
  const [experience, setExperience] = useState();

  useEffect(() => {
    fetch(userEndpoint)
      .then(res => res.json())
      .then(u => setUser(u));

    fetch(experienceEndpoint)
      .then(res => res.json())
      .then(e => setExperience(e));
  }, []);

  return (
    <div className={styles.main}>
      {user ? <BioHeader user={user} /> : <>Loading...</>}

      {experience ? <Experience experience={experience} /> : <>Loading...</>}
    </div>
  );
};
