import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

export const Idk = () => {
  return (
    <div className="grid sm:grid-cols-[auto_1fr] grid-rows-1 sm:grid-rows-2 bg-[#e3ede6] row-start-2 row-end-3 gap-2 sm:gap-8 h-[calc(100vh-120px)] items-center px-2 sm:px-16">
      <div className="col-start-1 col-end-2 w-[175px] sm:w-[500px] h-[175px] sm:h-[500px] self-center rounded-[50%] bg-[url('../../../images/undraw_nature_m5ll.png')] bg-cover bg-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]"></div>
      <div className="flex flex-col gap-6 self-start sm:mt-[64px]">
        <h2 className="font-[#031206] text-xl sm:text-5xl opacity-75 font-IBMSerifMedium">
          More wildfires are ravaging the world — and they are getting worse
        </h2>
        <h4 className="font-[#031206] text-lg leading-8 opacity-50">
          With average global temperatures on the rise, local and seasonal
          variations mean that droughts and heatwaves are causing more severe
          and more frequent wildfires. But you can help to ease the problem. We
          work with people across the world to oppose the wrecking damages of
          wildfires. Your generosity will help us bring a{" "}
          <span className="text-[#00851f] font-bold opacity-90">greener</span>{" "}
          future for everyone.
        </h4>
        <Link to="/donate" onClick={scrollToTop}>
          <button className="text-[#dde9e0] w-[200px] h-auto py-2 bg-[#00851f] rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]">
            JOIN TODAY
          </button>
        </Link>
      </div>
    </div>
  );
};
