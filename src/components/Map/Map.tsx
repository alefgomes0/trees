import { MapLibreGL } from 'maplibre-gl';
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
  return (
    <Map
    mapLib={MapLibreGL}
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 2,
      }}
      style={{ width: "100%", height: "50vh" }}
      mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${import.meta.env.VITE_MAPTILLER_API_KEY}`}
    >
      <NavigationControl position='top-right'/>
      <Markers wildfireData={props.wildfireData} wildfireQuantity={props.wildfireQuantity}/>
    </Map>
  );
};
