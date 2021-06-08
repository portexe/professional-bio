import { useEffect, useState } from 'react';
import { userEndpoint, skillsEndpoint, experienceEndpoint } from 'Constants';

export const useBio = () => {
  const [user, setUser] = useState();
  const [skills, setSkills] = useState();
  const [experience, setExperience] = useState();

  useEffect(() => {
    fetch(userEndpoint)
      .then(res => res.json())
      .then(u => setUser(u));

    fetch(skillsEndpoint)
      .then(res => res.json())
      .then(s => setSkills(s));

    fetch(experienceEndpoint)
      .then(res => res.json())
      .then(e => setExperience(e));
  }, []);

  return {
    user,
    skills,
    experience,
  };
};
