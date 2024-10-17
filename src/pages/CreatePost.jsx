import { useDispatch, useSelector } from "react-redux";
import Input from "../components/ui/Input";
import { createOutfit } from "../features/posts/postActions";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

function CreatePost() {
  const dispatch = useDispatch();
  const { longitude, latitude } = useSelector(
    (state) => state.user.userSettings.userCurrentLocation
  );
  const { loading, error } = useSelector((state) => state.post);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("outfitsDescription", description);
    formData.append("outfitsImages", image);
    formData.append("outfitsVideos", video);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("likeSetting", "true");
    formData.append("commentSettings", "true");

    dispatch(createOutfit(formData));
    setImage(null);
    setVideo(null);
    setDescription("");
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
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name="file"
          id="outfitsImage"
        />
      </div>
      <div>
        <label htmlFor="outfitsVideo">Choose video</label>
        <input
          onChange={(e) => setVideo(e.target.files[0])}
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
