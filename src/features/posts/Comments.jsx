import { useState } from "react";
import styles from "./Comments.module.css";
import CreateComment from "./CreateComment";

function Comments({ comments, postId }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        Comments({comments.length})
      </button>
      {isOpen && (
        <>
          <CreateComment postId={postId} />
          <ul className={styles.comments}>
            {comments.map((comment) => (
              <li className={styles.comment} key={comment._id}>
                <div>
                  <span className={styles.userName}>
                    {comment.user[0].name}:
                  </span>
                  <p> {comment.outfitPostComment}</p>
                  <span className={styles.date}>
                    <i>{comment.createdAt}</i>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Comments;
