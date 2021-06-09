import styles from './styles.module.css';

export const Links = ({ links }) => (
  <div className={styles.main}>
    {links.map((l, index) => (
      <a key={index} href={l.url} target="_blank" rel="noreferrer" className={styles.link}>
        {l.name}
      </a>
    ))}
  </div>
);
