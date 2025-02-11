import styles from "./CreatePost.module.css";

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

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  console.log(image);
  function handleSubmit(e) {
    e.preventDefault();

    const formData = prepareFormData({
      outfitsDescription: description,
      // outfitsVideos: video,
      outfitsImages: Array.from(image),
      longitude: data.data.userCurrentLocation.longitude,
      latitude: data.data.userCurrentLocation.latitude,
      likeSetting: "true",
      commentSettings: "true",
    });
    console.log(image);
    console.log(formData);
    createOutfit(formData);
    setImage(null);
    setVideo(null);
    setDescription("");
  }

  if (!data) return <p>Loading...</p>;

  return (
    <div className={`${styles.container} p-20 d-flex`}>
      <form
        className={`${styles.form} d-flex gap-10  f-col box-shadow-secondary mx-auto p-20 b-radius-10`}
        onSubmit={handleSubmit}
      >
        {error && <ErrorMessage error={error} />}
        {isSuccess && <p>Post created!</p>}
        <h2>Create post</h2>

        <Input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Post description"
          required
        />

        {/* <Input
          label="Choose Images"
          onChange={(e) => setImage(e.target.files)}
          type="file"
          multiple
          name="file"
          id="outfitsImage"
          required
        /> */}

        <label htmlFor="outfitsImage" className="custom-file-upload">
          Upload Images
        </label>
        <input
          onChange={(e) => setImage(e.target.files)}
          id="outfitsImage"
          type="file"
        />

        <label htmlFor="outfitsVideos" className="custom-video-upload">
          Upload video
        </label>
        <input
          onChange={(e) => setVideo(e.target.files[0])}
          id="outfitsVideos"
          type="file"
        />
        {/* <Input
          label="Choose video"
          onChange={(e) => setVideo(e.target.files[0])}
          type="file"
          name="file"
          id="outfitsVideos"
          required
        /> */}

        <button
          className={`${styles.button} p-10 px-20 border-0 bg-accent-primary clr-neutral-100 b-radius-round `}
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
