import { useState } from "react";
import { useCreateOutfitMutation } from "../../api/postApiSlice";
import { useGetUserSettingsQuery } from "../../api/userApiSlice";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Input from "../../../components/input/Input";
import { prepareFormData } from "../../../utils/helpers";

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

    const formData = prepareFormData({
      outfitsDescription: description,
      outfitsVideos: video,
      longitude: data.userCurrentLocation.longitude,
      latitude: data.userCurrentLocation.latitude,
      likeSetting: "true",
      commentSettings: "true",
    });

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
        required
      />

      <Input
        label="Choose Images"
        onChange={(e) => setImage(e.target.files)}
        type="file"
        multiple
        name="file"
        id="outfitsImage"
        required
      />

      <Input
        label="Choose video"
        onChange={(e) => setVideo(e.target.files[0])}
        type="file"
        name="file"
        id="outfitsVideos"
        required
      />

      <button disabled={isLoading} type="submit">
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  );
}

export default CreatePost;
