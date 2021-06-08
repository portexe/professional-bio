import styles from './styles.module.css';

export const BioHeader = ({ user }) => (
  <div className={styles.main}>
    <div className={styles.intro}>
      <h1>{user.name}</h1>

      <p>{user.description}</p>
    </div>
    <div className={styles.address}>
      <div className={styles.lineOne}>{user.address.lineOne}</div>

      <div className={styles.lineTwo}>
        {user.address.city}, {user.address.city} {user.address.zip}
      </div>

      <div className={styles.phone}>
        <b>{user.phone}</b>
      </div>

      <div className={styles.email}>
        <b>{user.email}</b>
      </div>
    </div>
  </div>
);
