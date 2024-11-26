import { useGetRecommendedFriendsQuery } from "../../app/api/userApiSlice";
import RecommendedFriend from "../recommendedFriend/RecommendedFriend";
import styles from "./RecommendedFriendsList.module.css";

function RecommendedFriendsList() {
  const { data, isLoading } = useGetRecommendedFriendsQuery();

  if (isLoading) return <p>Loading...</p>;

  const recommendedFriendShortList = data.data.slice(0, 5);
  return (
    <div
      className={`${styles.recommendedFriendsWrap} p-20 box-shadow-tertiary b-radius-10`}
    >
      <h3 className={`${styles.heading} clr-primary`}>Recomended friends</h3>
      <div>
        {recommendedFriendShortList.map((friend) => (
          <RecommendedFriend key={friend._id} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedFriendsList;
