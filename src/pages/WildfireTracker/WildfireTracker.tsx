import { useState, useEffect } from "react";
import axios from "axios";
import { WorldMap } from "../../components/Map/Map";
import { WildfireDataProps } from "../../types/WilfireDataProps";
import { BadRequest } from "../../types/BadRequestType";

export const WildfireTracker = () => {
  const [wildfireQuantity, setWildireQuantity] = useState<number>(10);
  const [errorMessage, setErrorMessage] = useState<BadRequest | null>(null);
  const [wildfireData, setWildfireData] = useState<WildfireDataProps[] | null>(
    null
  );

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
            resultRecordCount: wildfireQuantity,
          },
          signal: AbortSignal.timeout(15000),
        }
      )
      .then((res) => {
        if (!ignore) {
          setWildfireData(res.data.features);
          setErrorMessage(null);
        }
      })
      .catch((err) => {
        if (ignore) return;
        setWildfireData(null);
        setErrorMessage({
          name: err.name,
          message: err.message,
          code: err.code,
        });
      });

    return () => {
      ignore = true;
    };
  }, [wildfireQuantity]);

  return (
    <div>
      <div className="py-8 mx-16 text-xl">
        <h3 className="mb-4">
          Our{" "}
          <span className="font-[IBMSansSemibold] opacity-80">
            Wildfire Tracker
          </span>{" "}
          uses real data from the{" "}
          <a
            href="https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer"
            target="_blank"
            className="underline decoration-cyan-700 underline-offset-4"
          >
            National Interagency Fire Center
          </a>{" "}
          and{" "}
          <a
            href="https://www.maptiler.com/"
            className="underline decoration-cyan-700 underline-offset-4"
          >
            Maptiler
          </a>{" "}
          to show the location of the newest wildfires recorded.
        </h3>
        <form method="" action="">
          <label>
            Select the number of recent wildfires that you want to see:{" "}
          </label>
          <div className="flex items-center gap-8 mt-2">
            {[5, 10, 25, 50, 100].map((quantity) => (
              <div className="grid justify-items-center" key={quantity}>
                <input
                  id="quantity"
                  type="radio"
                  value={quantity}
                  name="quantity"
                  checked={wildfireQuantity === quantity}
                  onChange={() => setWildireQuantity(quantity)}
                  className="cursor-pointer w-[15px] h-[15px] mb-1 shadow-[0_1px_0_0_rgba(0,0,0,0.1)_inset] appearance-none border-2 border-slate-400 rounded-[50%] transition-all relative hover:scale-110 checked-border-2 checked:border-[6px] checked:border-red-400 active:bg-white active:text-black active:outline-2 "
                />
                <label className="text-sm" htmlFor="quantity">
                  {quantity}
                </label>
              </div>
            ))}
          </div>
          {errorMessage && (
            <>
              <h5 className="text-sm text-red-400 mt-4">
                There's was an error while processing your request.
              </h5>
              <h5 className="text-sm text-red-400">{`${errorMessage.name}. ${errorMessage.message}. ${errorMessage.code}`}</h5>
            </>
          )}
        </form>
      </div>
      <WorldMap
        wildfireData={wildfireData}
        wildfireQuantity={wildfireQuantity}
      />
    </div>
  );
};
