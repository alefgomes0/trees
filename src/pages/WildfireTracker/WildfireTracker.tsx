import { useState } from "react";
import { WorldMap } from "../../components/Map/Map";

export const WildfireTracker = () => {
  const [wildfireQuantity, setWildireQuantity] = useState<number>(10);
  return (
    <div>
      <div className="py-8 mx-16 text-xl">
        <h3 className="mb-4">
          Our Wildfire Tracker uses real data from the{" "}
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
              <div className="flex flex-col items-center" key={quantity}>
                <input
                  type="radio"
                  value={quantity}
                  name="quantity"
                  checked={wildfireQuantity === quantity}
                  onChange={() => setWildireQuantity(quantity)}
                  className="w-[15px] h-[15px]"
                />
                <label className="text-sm">{quantity}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
      <WorldMap wildfireQuantity={wildfireQuantity} />
    </div>
  );
};
