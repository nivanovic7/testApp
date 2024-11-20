import styles from "./Map.module.css";
import axios from "axios";
import { useSetUserLocationMutation } from "../../app/api/userApiSlice";
import { getUserLocation } from "../../utils/helpers";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, useMapEvent } from "react-leaflet";

function MapView({ latitude, longitude }) {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], 4);
  }, [latitude, longitude, map]);

  return null;
}

function Map() {
  const [setUserLocation] = useSetUserLocationMutation();
  const [latitude, setLatitude] = useState(48.9);
  const [longitude, setLongitude] = useState(2.4);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const fetchCoordinates = async () => {
    const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
    const query = inputRef.current.value;
    if (!query) return;
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
        {
          params: {
            access_token: MAPBOX_TOKEN,
            limit: 1,
          },
        }
      );

      if (response.data.features.length > 0) {
        const { center } = response.data.features[0];
        setLatitude(center[1]);
        setLongitude(center[0]);
      } else {
        alert("No coordinates found for the entered location.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchCoordinates();
  }

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
      <form onSubmit={handleSubmit} className={styles.form}>
        <button>
          <img src="../../assets/searchIcon.svg" alt="search icon" />
        </button>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search locations...  "
        />
      </form>
      <MapContainer
        className={styles.map}
        center={[latitude, longitude]}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <Marker position={[latitude, longitude]}></Marker> */}
        <MapView longitude={longitude} latitude={latitude} />
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
