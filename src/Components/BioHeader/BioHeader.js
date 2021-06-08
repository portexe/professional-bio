import styles from './styles.module.css';

export const BioHeader = ({ user }) => <div className={styles.main}>{user.name}</div>;
