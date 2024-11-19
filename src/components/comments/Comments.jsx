import styles from "./Comments.module.css";
import CreateComment from "../createComment/CreateComment";

function Comments({ comments, postId }) {
  return (
    <div>
      <CreateComment postId={postId} />
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li className={styles.comment} key={comment._id}>
            <div>
              <span className={styles.userName}>{comment.user[0].name}:</span>
              <p> {comment.outfitPostComment}</p>
              <span className={styles.date}>
                <i>{comment.created}</i>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
