import Map from "react-map-gl";
import styles from "./Mapbox.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

function Mapbox() {
  mapboxgl.accessToken = "your_access_token";

  const onMapLoad = (event) => {
    const map = event.target; // Access the map instance

    map.on("load", function () {
      // Adjust road layer
      map.setLayoutProperty("road", "visibility", "visible");
      map.setPaintProperty("road", "line-width", [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        1, // Line width at zoom level 5
        12,
        4, // Line width at zoom level 12
      ]);

      // Adjust building layer
      map.setLayoutProperty("building", "visibility", "visible");
      map.setPaintProperty("building", "fill-extrusion-height", 15);
    });
    //   // Change water color on load
    //   map.setPaintProperty("water", "fill-color", "#00ffff"); // Change water to cyan

    //   // Change road color programmatically
    //   map.setPaintProperty("road", "line-color", "black"); // Change roads to red
    //   map.setPaintProperty("traffic", "line-color", "black"); // Change roads to red
  };

  return (
    <div className={styles.container}>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoibml2YW5vdmljNyIsImEiOiJjbTE1YTRvZ2QwNWtwMmpzOGFiOHh5M3l4In0.fdCf-C1uXBwamVawOkqF7g"
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: 17,
          latitude: 47,
          zoom: 6.5,
        }}
        style={{ width: 400, height: 500 }}
        mapStyle="mapbox://styles/nivanovic7/cm28ql01t004501ph59pb5xxi"
        onLoad={onMapLoad}
      />

      <h1>Banjaluka</h1>
    </div>
  );
}

export default Mapbox;
