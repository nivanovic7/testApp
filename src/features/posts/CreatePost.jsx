import Input from "../../components/ui/Input";
import { useState } from "react";
import { useGetUserSettingsQuery } from "../user/userApiSlice";
import { useCreateOutfitMutation } from "./postApiSlice";
import { ErrorMessage } from "formik";

function CreatePost() {
  const [createOutfit, { isLoading, isSuccess }] = useCreateOutfitMutation();
  const {
    data: {
      data: { userCurrentLocation },
    },
  } = useGetUserSettingsQuery();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userCurrentLocation);
    const formData = new FormData();
    formData.append("outfitsDescription", description);
    formData.append("outfitsImages", image);
    formData.append("outfitsVideos", video);
    formData.append("longitude", userCurrentLocation.longitude);
    formData.append("latitude", userCurrentLocation.latitude);
    formData.append("likeSetting", "true");
    formData.append("commentSettings", "true");

    createOutfit(formData);
    // dispatch(createOutfit(formData));
    setImage(null);
    setVideo(null);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {isSuccess && <p>Post created!</p>}
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

      <button disabled={isLoading} type="submit">
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  );
}

export default CreatePost;
