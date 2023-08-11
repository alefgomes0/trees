import { Marker } from "react-map-gl";
import axios from "axios";
import { useEffect, useState } from "react";

type WildfireDataProps = {
  attributes: {
    latitude: number;
    longitude: number;
    hours_old: number;
  };
};

export const Markers = () => {
  const [wildfireData, setWildfireData] = useState<WildfireDataProps[] | null>(
    null
  );
  const dataset = 20;

  useEffect(() => {
    let ignore = false;

    axios
      .get(
        "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer/0/query",
        {
          params: {
            where: "1=1",
            outFields: "latitude,longitude,hours_old",
            returnGeometry: "false",
            outSR: "4326",
            f: "json",
            resultRecordCount: dataset, // Set the maximum number of records
          },
          signal: AbortSignal.timeout(15000),
        }
      )
      .then((res) => {
        if (!ignore) {
          console.log(res.data.features);
          setWildfireData(res.data.features);
        }
      })
      .catch((err) => {
        setWildfireData(null);
        console.error(err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {wildfireData &&
        wildfireData.map((data) => (
          <Marker
            key={`${data.attributes.latitude}-${data.attributes.longitude}`}
            latitude={data.attributes.latitude}
            longitude={data.attributes.longitude}
            color="red"
          />
        ))}
    </>
  );
};
