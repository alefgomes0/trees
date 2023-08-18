import { useEffect, useState } from "react";
import { ArticlesContainer } from "../../components/ArticlesContainer/ArticlesContainer";
import { Idk } from "../../components/Idk/Idk";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { OurMission } from "../../components/OurMission/OurMission";
import { WildfireCTA } from "../../components/WildfireCTA/WildfireCTA";

export const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <Idk isDesktop={isDesktop}/>
      <OurMission isDesktop={isDesktop}/>
      <WildfireCTA />
      <ArticlesContainer />
      <Newsletter />
    </main>
  );
};
