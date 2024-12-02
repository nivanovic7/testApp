import styles from "./PostFooter.module.css";

import Comments from "../comments/Comments";
import { useState } from "react";

function PostFooter({ id, comments }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.postFooter} p-20 bg-accent-primary`}>
      <div className={styles.footerButtons}>
        <button
          className={`${styles.button} d-flex align-center gap-10 border-0 clr-neutral-100 fw-700`}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <img className="img-25" src="../../assets/comment.svg" alt="comm" />
          Comments({comments.length})
        </button>
      </div>
      {isOpen && <Comments postId={id} comments={comments} />}
    </div>
  );
}

export default PostFooter;
