import styles from "./Posts.module.css";
import ReactPlayer from "react-player";
import Comments from "./Comments";
import { useDeleteOutfitMutation, useGetOutfitsQuery } from "./postApiSlice";
import { useState } from "react";

function Posts() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: { data: posts } = {},
    isLoading,
    refetch,
  } = useGetOutfitsQuery();
  const [deletePost] = useDeleteOutfitMutation();

  async function handleDelete(id) {
    try {
      await deletePost(id).unwrap();
      refetch();
      console.log("POST DELETED");
    } catch (err) {
      console.log("DELETION UNSUCCESSFULL");
      console.log(err);
    }
  }

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className={styles.postList}>
      {posts.map((outfit) => {
        return (
          <div className={styles.post} key={outfit._id}>
            <div className={styles.postHeader}>
              <p>{outfit.outfitDescription}</p> <p>by: {outfit.user[0].name}</p>
            </div>

            {outfit.outfitVideos[0] && (
              <ReactPlayer
                url={outfit.outfitVideos[0].imageMediumSource}
                width="100%"
                light={outfit.outfitImages[0].imageMediumSource}
                playing={true}
                // onError={handleError}
                controls={true}
              />
            )}
            <div className={styles.postButtons}>
              <button onClick={() => handleDelete(outfit._id)}>
                Delete Post
              </button>
              <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                Comments({outfit.outfitPostComment.length})
              </button>

              {isOpen && (
                <Comments
                  postId={outfit._id}
                  comments={outfit.outfitPostComment}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
