import { useRef, useEffect, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";
import "./map.styles.scss";

const Map = ({ storeLocateInfo }) => {
  const [map, setMap] = useState({});
  const { longitude, ladtitude } = storeLocateInfo;

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOMTOMMAP_API_KEY,
      container: "map",
      center: [longitude, ladtitude],
      zoom: 15,
    });
    const marker = new tt.Marker().setLngLat([longitude, ladtitude]).addTo(map);
    const popupOffsets = {
      top: [0, 0],
      bottom: [0, -70],
      "bottom-right": [0, -70],
      "bottom-left": [0, -70],
      left: [25, -35],
      right: [-25, -35],
    };
    const popup = new tt.Popup({ offset: popupOffsets }).setHTML(
      "la Masion de LUNA"
    );

    marker.setPopup(popup).togglePopup();

    console.log(longitude, ladtitude, map);
    setMap(map);
    return () => map.remove();
  }, [longitude, ladtitude]);

  return <div id="map" className="mapDiv"></div>;
};

export default Map;
