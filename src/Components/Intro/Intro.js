import styles from './styles.module.css';

export const Intro = ({ user }) => (
  <div className={styles.main}>
    <img src={user.imageUrl} alt="userImage" />
    <div className={styles.content}>
      <h1>{user.name}</h1>

      <p>{user.description}</p>
    </div>
  </div>
);
