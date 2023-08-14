import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { getWindowSize } from "../context/WindowSizeContext";

export const Idk = () => {
  const { isMobile } = getWindowSize();

  return (
    <div className="h-max grid sm:grid-cols-[auto_1fr] grid-rows-1 bg-[#e3ede6] gap-2 sm:gap-8 items-center pt-4 px-2 sm:px-16">
      <img
        src={`${
          isMobile
            ? "/images/undraw_Walking_outside_re_56xo.png"
            : "/images/undraw_nature_m5ll.png"
        }`}
        alt="some trees"
        className={`col-start-1 col-end-2 w-full sm:w-[500px] h-full sm:h-[500px] sm:mt-[70px] self-start ${
          isMobile ? "rounded aspect-[7/5,2]" : "rounded-[50%]"
        } bg-cover bg-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]`}
      />
      <div className="flex flex-col gap-6 self-start sm:mt-[64px]">
        <h2 className="font-[#031206] text-xl sm:text-5xl opacity-75 font-IBMSerifMedium">
          More wildfires are ravaging the world — and they are getting worse
        </h2>
        <h4 className="font-[#031206] sm:text-lg leading-8 opacity-50">
          With average global temperatures on the rise, local and seasonal
          variations mean that droughts and heatwaves are causing more severe
          and more frequent wildfires. But you can help to ease the problem. We
          work with people across the world to oppose the wrecking damages of
          wildfires. Your generosity will help us bring a{" "}
          <span className="text-[#00851f] font-bold opacity-90">greener</span>{" "}
          future for everyone.
        </h4>
        <Link to="/donate" onClick={scrollToTop}>
          <button className="text-[#dde9e0] w-[200px] h-auto py-2 bg-[#00851f] mb-4 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]">
            JOIN TODAY
          </button>
        </Link>
      </div>
    </div>
  );
};
