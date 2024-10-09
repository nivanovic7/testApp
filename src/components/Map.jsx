import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import { useDispatch } from "react-redux";
import { updateUserLocation } from "../features/user/userActions";

function Map() {
  const dispatch = useDispatch();

  const [latitude, setLatitude] = useState(48.9);
  const [longitude, setLongitude] = useState(2.4);

  function handleMapLocation() {
    dispatch(updateUserLocation({ latitude, longitude }));
  }
  return (
    <>
      <MapContainer
        className="map"
        center={[latitude, longitude]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}></Marker>
        <ClickEvent setLatitude={setLatitude} setLongitude={setLongitude} />
      </MapContainer>
      <button onClick={handleMapLocation}>Use map location</button>
    </>
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
