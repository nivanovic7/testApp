import { useDispatch, useSelector } from "react-redux";
import Input from "../components/ui/Input";
import { createOutfit } from "../features/posts/postActions";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

function CreatePost() {
  const { longitude, latitude } = useSelector(
    (state) => state.user.userSettings.userCurrentLocation
  );

  const { loading, error } = useSelector((state) => state.post);

  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  function onSelectImage(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  function handleSubmit(e) {
    // if (!description || !image || !video) {
    //   return;
    // }
    e.preventDefault();
    const formData = new FormData();
    formData.append("outfitsDescription", description);
    formData.append("outfitsImages", image);
    formData.append("outfitsVideos", video);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);

    dispatch(createOutfit(formData));
    setImage(null);
    setVideo(null);
    setDescription("");
  }

  function onSelectVideo(e) {
    const file = e.target.files[0];
    setVideo(file);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage message={error} />}
      <Input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        label="Post description"
      />
      <div>
        <label htmlFor="outfitsImage">Choose image</label>
        <input
          onChange={onSelectImage}
          type="file"
          name="file"
          id="outfitsImage"
        />
      </div>
      <div>
        <label htmlFor="outfitsVideo">Choose video</label>
        <input
          onChange={onSelectVideo}
          type="file"
          name="file"
          id="outfitsVideos"
        />
      </div>

      <button disabled={loading} type="submit">
        {loading ? "Loading..." : "Create"}
      </button>
    </form>
  );
}

export default CreatePost;
