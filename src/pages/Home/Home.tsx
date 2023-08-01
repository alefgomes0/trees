import { ArticlesContainer } from "../../components/ArticlesContainer/ArticlesContainer";
import { Idk } from "../../components/Idk/Idk";
import { OurMission } from "../../components/OurMission/OurMission";
import { WildfireCTA } from "../../components/WildfireCTA/WildfireCTA";

export const Home = () => {
  return (
    <div>
      <Idk />
      <OurMission />
      <WildfireCTA />
      <ArticlesContainer />
    </div>
  );
};
