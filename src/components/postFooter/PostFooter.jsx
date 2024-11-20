import styles from "./postFooter.module.css";

import Comments from "../comments/Comments";
import { useState } from "react";

function PostFooter({ id, comments }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.postFooter}>
      <div className={styles.footerButtons}>
        <button
          className={styles.button}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <img src="../../assets/comment.svg" alt="comm" />
          Comments({comments.length})
        </button>
      </div>
      {isOpen && <Comments postId={id} comments={comments} />}
    </div>
  );
}

export default PostFooter;
