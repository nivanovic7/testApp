import { useDispatch, useSelector } from "react-redux";
import Input from "../components/ui/Input";
import { createOutfit } from "../features/posts/postActions";
import { useState } from "react";

function CreatePost() {
  const { longitude, latitude } = useSelector(
    (state) => state.user.userSettings.userCurrentLocation
  );
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);

  function handleVideo(e) {
    console.log(e.target.files);
    setVideo(e.target.files[0]);
  }

  function handleImg(e) {
    setImg(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("outfitsDescription", description);
    formData.append("outfitsImages", img);
    formData.append("outfitsVideos", video);
    formData.append("likeSetting", true);
    formData.append("commentSettings", true);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    dispatch(createOutfit(formData));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        label="Post description"
      />
      <Input label="Choose Image" type="file" onChange={handleImg} />

      <Input label="Choose video" type="file" onChange={handleVideo} />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreatePost;
