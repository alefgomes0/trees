import { Marker } from "react-map-gl";
import { WildfireDataProps } from "../../types/WilfireDataProps";
import { Fire } from "../svg/Fire";

type MarkersProps = {
  wildfireQuantity: number;
  wildfireData: WildfireDataProps[] | null;
};

export const Markers = (props: MarkersProps) => {
  return (
    <>
      {props.wildfireData &&
        props.wildfireData.map((data) => (
          <Marker
            key={`${data.attributes.latitude}-${data.attributes.longitude}`}
            latitude={data.attributes.latitude}
            longitude={data.attributes.longitude}
          >
            <Fire />
          </Marker>
        ))}
    </>
  );
};
