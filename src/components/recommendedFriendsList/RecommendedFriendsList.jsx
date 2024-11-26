import { useGetRecommendedFriendsQuery } from "../../app/api/userApiSlice";
import styles from "./RecommendedFriendsList.module.css";

const AVATAR_PLACEHOLDER_URL = "../../assets/avatar.png";

function RecommendedFriendsList() {
  const { data, isLoading } = useGetRecommendedFriendsQuery();

  if (isLoading) return <p>Loading...</p>;

  const recommendedFriendShortList = data.data.slice(0, 5);
  return (
    <div className={styles.recommendedFriendsWrap}>
      <h3>Recomended friends</h3>
      <div>
        {recommendedFriendShortList.map((friend) => (
          <div className={styles.friend} key={friend._id}>
            <img
              src={
                friend.userProfileImage
                  ? friend.userProfileImage.imageSmallSource
                  : AVATAR_PLACEHOLDER_URL
              }
              alt="profile img"
            />
            <div>
              <div>
                <span className={styles.fullName}>
                  {friend.userFirstName} {friend.userLastName}
                </span>
                <span className={styles.userName}> @{friend.userName}</span>
              </div>
              <button>Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedFriendsList;
