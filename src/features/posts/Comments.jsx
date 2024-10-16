import styles from "./Comments.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "./postActions";
import { getComments } from "./postSlice";

function Comments({ postId }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const postComments = useSelector((state) => getComments(state, postId));

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment) return;
    setComment("");
    dispatch(createComment({ postId, comment }));
  }

  return (
    <>
      {postComments && (
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          Comments({postComments.length})
        </button>
      )}
      {isOpen && (
        <>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Write comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
          <ul className={styles.comments}>
            {postComments.map((comment) => (
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
