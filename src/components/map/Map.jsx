import styles from "./Map.module.css";

import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import { useSetUserLocationMutation } from "../../app/api/userApiSlice";
import { getUserLocation } from "../../utils/helpers";
function Map() {
  const [setUserLocation] = useSetUserLocationMutation();
  const [latitude, setLatitude] = useState(48.9);
  const [longitude, setLongitude] = useState(2.4);
  const [inputValue, setInputValue] = useState("");

  function handleMapLocation() {
    setUserLocation({ latitude, longitude });
  }

  async function handleUserCoords() {
    try {
      const {
        coords: { latitude, longitude },
      } = await getUserLocation();
      setUserLocation({ latitude, longitude });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <button>
          <img src="../../assets/searchIcon.svg" alt="search icon" />
        </button>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search locations...  "
        />
      </form>
      <MapContainer
        className={styles.map}
        center={[latitude, longitude]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}></Marker>
        <ClickEvent setLatitude={setLatitude} setLongitude={setLongitude} />
      </MapContainer>

      <div className={styles.buttons}>
        <button onClick={handleMapLocation}>Use map location</button>
        <button onClick={handleUserCoords}>Use your coordinates</button>
      </div>
    </div>
  );
}

export default Map;

function ClickEvent({ setLatitude, setLongitude }) {
  useMapEvent({
    click: (e) => {
      setLatitude(e.latlng.lat);
      setLongitude(e.latlng.lng);
    },
  });
}
