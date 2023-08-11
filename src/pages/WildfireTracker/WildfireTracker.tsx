import { WorldMap } from "../../components/Map/Map";

export const WildfireTracker = () => {
  return (
    <div className="py-8">
      <div>
        <h3>
          Our Wildfire Tracker uses real data from the{" "}
          <a href="https://data-nifc.opendata.arcgis.com/datasets/nifc::current-wildland-fire-incident-locations/explore?showTable=true" target="_blank">
            National Interagency Fire Center
          </a>
          and Maptiler to show the location of the newest wildfires recorded.
        </h3>
        
      </div>
      <WorldMap />
    </div>
  );
};
