import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

export const UnderHeaderCTA = () => {
  return (
    <div className="flex flex-col gap-4 w-max self-end justify-self-center h-max items-center text-white py-2 px-4 bg-gradient-to-b from-[rgba(0,0,0,0.15)] to-[rgba(0,0,0,0.25)]">
      <h3 className="text-4xl font-IBMSerifMedium">SOME THINGS CANNOT WAIT</h3>
      <h4 className="w-[50%] opacity-90 text-xs">
        There is a rapidly closing window of opportunity to secure a liveable
        and sustainable future for all.{" "}
      </h4>
      <Link to="/donate" onClick={scrollToTop}>
        <button className="w-18  border-2 bg-[#00851f] border-none rounded-3xl py-1 px-12 shadow-[0_3px_3px_0_rgba(0,0,0,0.5)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.5)_inset]">
          MAKE A CHANGE
        </button>
      </Link>
    </div>
  );
};
