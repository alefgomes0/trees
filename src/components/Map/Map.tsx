import { NavigationControl } from 'react-map-gl';
import Map from "react-map-gl/maplibre";
import 'maplibre-gl/dist/maplibre-gl.css';
import { Markers } from '../Markers/Markers';
import { WildfireDataProps } from '../../types/WilfireDataProps';

type WorldMapProps = {
  wildfireQuantity: number
  wildfireData: WildfireDataProps[] | null
}

export const WorldMap = (props:WorldMapProps) => {
  const API_KEY = import.meta.env.VITE_API_KEY
  
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 2,
      }}
      style={{ width: "100%", height: "50vw" }}
      mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${API_KEY}`}
    >
      <NavigationControl position='top-right'/>
      <Markers wildfireData={props.wildfireData} wildfireQuantity={props.wildfireQuantity}/>
    </Map>
  );
};
