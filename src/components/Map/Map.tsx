import { NavigationControl } from 'react-map-gl';
import Map from "react-map-gl/maplibre";
import 'maplibre-gl/dist/maplibre-gl.css';
import { Markers } from '../Markers/Markers';

export const WorldMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 2,
      }}
      style={{ width: "100%", height: "80vw" }}
      mapStyle="https://api.maptiler.com/maps/satellite/style.json?key=ZliihbZlV2InCpPBQDa1"
    >
      <NavigationControl position='top-right'/>
      <Markers />
    </Map>
  );
};
