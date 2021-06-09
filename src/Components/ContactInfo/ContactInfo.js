import styles from './styles.module.css';

export const ContactInfo = ({ user }) => {
  return (
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
  );
};
