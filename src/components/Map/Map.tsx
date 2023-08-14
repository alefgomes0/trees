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
      style={{ width: "90vw", height: "50vh" }}
      mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=ZliihbZlV2InCpPBQDa1"
    >
      <NavigationControl position='top-right'/>
      <Markers wildfireData={props.wildfireData} wildfireQuantity={props.wildfireQuantity}/>
    </Map>
  );
};
