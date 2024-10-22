import Input from "../../components/ui/Input";
import { useState } from "react";
import { useGetUserSettingsQuery } from "../user/userApiSlice";
import { useCreateOutfitMutation } from "./postApiSlice";
import ErrorMessage from "../../components/ErrorMessage";

function CreatePost() {
  const [createOutfit, { isLoading, isSuccess, error }] =
    useCreateOutfitMutation();
  const {
    data: { data },
  } = useGetUserSettingsQuery();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !image || !video) return;
    const formData = new FormData();
    formData.append("outfitsDescription", description);
    formData.append("outfitsImages", image);
    formData.append("outfitsVideos", video);
    formData.append("longitude", data.userCurrentLocation.longitude);
    formData.append("latitude", data.userCurrentLocation.latitude);
    formData.append("likeSetting", "true");
    formData.append("commentSettings", "true");

    createOutfit(formData);
    setImage(null);
    setVideo(null);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage error={error} />}
      {isSuccess && <p>Post created!</p>}

      <Input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        label="Post description"
      />

      <Input
        label="Choose Image"
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        name="file"
        id="outfitsImage"
      />

      <Input
        label="Choose video"
        onChange={(e) => setVideo(e.target.files[0])}
        type="file"
        name="file"
        id="outfitsVideos"
      />

      <button disabled={isLoading} type="submit">
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  );
}

export default CreatePost;
