import { useState } from "react";
import styles from "./CreateComment.module.css";
import { useCreateCommentMutation } from "../../../../components/postApiSlice";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

function CreateComment({ postId }) {
  const [createComment, { error }] = useCreateCommentMutation();
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment) return;

    createComment({ comment, postId });
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <ErrorMessage message={error.data.message} />}
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder="Write a comment"
      />
    </form>
  );
}

export default CreateComment;
