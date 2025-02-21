import styles from "../FriendList/FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import friends from "../../friends.json";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.friendListItem}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
