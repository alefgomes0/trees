import { NavigationControl } from 'react-map-gl';
import Map from "react-map-gl/maplibre";
import 'maplibre-gl/dist/maplibre-gl.css';
import { Markers } from '../Markers/Markers';

type WorldMapProps = {
  wildfireQuantity: number
}

export const WorldMap = (props:WorldMapProps) => {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 2,
      }}
      style={{ width: "100%", height: "50vw" }}
      mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=ZliihbZlV2InCpPBQDa1"
    >
      <NavigationControl position='top-right'/>
      <Markers wildfireQuantity={props.wildfireQuantity}/>
    </Map>
  );
};
