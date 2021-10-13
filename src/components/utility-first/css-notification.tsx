import styles from '../../../styles/css-notification.module.css';

const CssNotification = () => {
  return (
    <div className={styles.chatNotification}>
      <div className={styles.chatNotificationlogoWrapper}>
        <img
          className={styles.chatNotificationLogo}
          src="/vercel.svg"
          alt="ChitChat Logo"
        />
      </div>
      <div className={styles.chatNotificationContent}>
        <h4 className={styles.chatNotificationTitle}>ChitChat</h4>
        <p className={styles.chatNotificationMessage}>
          You have a new message!
        </p>
      </div>
    </div>
  );
};

export default CssNotification;
