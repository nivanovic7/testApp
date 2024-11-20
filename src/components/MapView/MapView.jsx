import { useEffect } from "react";
import { useMap } from "react-leaflet";

function MapView({ latitude, longitude }) {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], 4);
  }, [latitude, longitude, map]);
  return null;
}

export default MapView;
