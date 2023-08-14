import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

export const UnderHeaderCTA = () => {
  return (
    <div className="absolute w-[100%] w-max flex flex-col items-center justify-items-center justify-center gap-3 sm:gap-4 self-end justify-self-center h-min text-white px-2 py-2 bg-gradient-to-b from-[rgba(0,0,0,0.15)] to-[rgba(0,0,0,0.25)]">
      <h3 className="text-[1.5rem] sm:text-4xl font-IBMSerifMedium">SOME THINGS CANNOT WAIT</h3>
      <h4 className="w-[75%] opacity-90 text-xs">
        There is a rapidly closing window of opportunity to secure a liveable
        and sustainable future for all.{" "}
      </h4>
      <Link to="/donate" onClick={scrollToTop}>
        <button className="w-18 border-2 bg-[#00851f] border-none rounded py-1 px-12 shadow-[0_3px_3px_0_rgba(0,0,0,0.5)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.5)_inset]">
          MAKE A CHANGE
        </button>
      </Link>
    </div>
  );
};
