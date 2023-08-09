import { ArticlesContainer } from "../../components/ArticlesContainer/ArticlesContainer";
import { Idk } from "../../components/Idk/Idk";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { OurMission } from "../../components/OurMission/OurMission";
import { WildfireCTA } from "../../components/WildfireCTA/WildfireCTA";

export const Home = () => {
  return (
    <main>
      <Idk />
      <OurMission />
      <WildfireCTA />
      <ArticlesContainer />
      <Newsletter />
    </main>
  );
};
