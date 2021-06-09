import {
  userEndpoint,
  skillsEndpoint,
  experienceEndpoint,
  certificationsEndpoint,
} from 'Constants';
import { useEffect, useState } from 'react';

export const useBio = () => {
  const [user, setUser] = useState();
  const [skills, setSkills] = useState();
  const [experience, setExperience] = useState();
  const [certifications, setCertifications] = useState();

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

    fetch(certificationsEndpoint)
      .then(res => res.json())
      .then(c => setCertifications(c));
  }, []);

  return {
    user,
    skills,
    experience,
    certifications,
  };
};
