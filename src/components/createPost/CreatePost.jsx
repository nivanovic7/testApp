import { useState } from "react";
import { useCreateOutfitMutation } from "../../app/api/postApiSlice";
import { useGetUserSettingsQuery } from "../../app/api/userApiSlice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Input from "../input/Input";
import { prepareFormData } from "../../utils/helpers";

function CreatePost() {
  const [createOutfit, { isLoading, isSuccess, error }] =
    useCreateOutfitMutation();
  const { data } = useGetUserSettingsQuery();

  console.log(data);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !image || !video) return;

    const formData = prepareFormData({
      outfitsDescription: description,
      outfitsVideos: video,
      outfitsImages: Array.from(image),
      longitude: data.data.userCurrentLocation.longitude,
      latitude: data.data.userCurrentLocation.latitude,
      likeSetting: "true",
      commentSettings: "true",
    });

    createOutfit(formData);
    setImage(null);
    setVideo(null);
    setDescription("");
  }

  if (!data) return <p>Loading...</p>;

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