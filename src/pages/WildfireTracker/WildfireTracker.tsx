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
            href="https://data-nifc.opendata.arcgis.com/datasets/nifc::current-wildland-fire-incident-locations/explore?showTable=true"
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
            Select the number of number of wildfires you want to show:{" "}
          </label>
          <div className="flex items-center gap-8 mt-2">
            <div className="flex flex-col items-center">
              <input
                type="radio"
                value={5}
                name="quantity"
                onClick={() => setWildireQuantity(5)}
                className="w-[15px] h-[15px]"
              />
              <label className="text-sm">5</label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="radio"
                value={10}
                name="quantity"
                onClick={() => setWildireQuantity(10)}
                className="w-[15px] h-[15px]"
              />
              <label className="text-sm">10</label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="radio"
                value={25}
                name="quantity"
                onClick={() => setWildireQuantity(25)}
                className="w-[15px] h-[15px]"
              />
              <label className="text-sm">25</label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="radio"
                value={50}
                name="quantity"
                onClick={() => setWildireQuantity(50)}
                className="w-[15px] h-[15px]"
              />
              <label className="text-sm">50</label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="radio"
                value={100}
                name="quantity"
                onClick={() => setWildireQuantity(100)}
                className="w-[15px] h-[15px]"
              />
              <label className="text-sm">100</label>
            </div>
          </div>
        </form>
      </div>
      <WorldMap wildfireQuantity={wildfireQuantity} />
    </div>
  );
};
