import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div>
        <img src={image} alt="{name} avatar" className={styles.profileImage} />
        <p className={styles.userName}>{name}</p>
        <p className={styles.details}>@{tag}</p>
        <p className={styles.details}>{location}</p>
      </div>
      <div className={styles.statsList}>
        <ul className={styles.profileList}>
          <li className={styles.listItem}>
            <span>Followers</span>
            <span className={styles.listSpan}>{stats.followers}</span>
          </li>
          <li className={styles.listItem}>
            <span>Views</span>
            <span className={styles.listSpan}>{stats.views}</span>
          </li>
          <li className={styles.listItem}>
            <span>Likes</span>
            <span className={styles.listSpan}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
