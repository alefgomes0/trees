import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { SocialMediaIcons } from "../SocialMediaIcons/SocialMediaIcons";
import { Hamburger } from "../Hamburger/Hamburger";
import { useState, useRef } from "react";
import { SearchIcon } from "../svg/SearchIcon";
import { getWindowSize } from "../context/WindowSizeContext";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile } = getWindowSize();
  const divRef = useRef<HTMLDivElement>(null!);
  const svgRef = useRef<SVGSVGElement>(null!);
  const handleClick = (e: React.MouseEvent | MouseEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex flex-col w-auto md:w-screen">
        <div className="grid grid-rows-[minmax(60px,60px)] grid-cols-1 row-start-1 row-end-2 bg-[#00851f] items-center justify-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] px-2 md:px-16">
          <div className="flex items-center justify-center gap-10 justify-self-start row-start-1 row-end-2 col-start-1 col-end-2">
            <Link to="/donate" onClick={scrollToTop}>
              <button className="text-gwhite rounded-3xl  w-[80px] sm:w-[200px] py-1 bg-purple-800 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]">
                Donate
              </button>
            </Link>
          </div>
          <Link
            to="/"
            className="text-3xl text-white self-center justify-self-center row-start-1 row-end-2 col-start-1 col-end-2 font-IBMSerifMedium"
          >
            <h1>TREES</h1>
          </Link>
          <div
            ref={divRef}
            onClick={(e: React.MouseEvent | MouseEvent) => {
              if (e.target === divRef.current) handleClick(e);
            }}
            className="relative flex w-20 h-[100%] justify-center items-center justify-self-end rows-1 row-start-1 row-end-2 col-start-1 col-end-2 hover:bg-[#00751b] cursor-pointer"
          >
            <svg
              onClick={(e: React.MouseEvent | MouseEvent) => {
                if (e.target === svgRef.current) handleClick(e);
              }}
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="cursor-pointer"
            >
              <path
                fill="#DEFDDB"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
            <Hamburger
              isVisible={isVisible}
              handleClick={(e: React.MouseEvent | MouseEvent) => handleClick(e)}
            />
          </div>
        </div>
        <div className="h-[40px] bg-[#00851f] opacity-70 grid grid-rows-[minmax(40px, 40px)] grid-cols-1 content-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] p-2 md:px-16">
          <div className="h-[30px] text-sm self-start justify-self-start row-start-1 row-end-2 col-start-1 col-end-2">
            {isMobile ? (
              <div className="flex items-center h-full pl-2">
                <SocialMediaIcons />
              </div>
            ) : (
              <>
                <input
                  type="search"
                  className="text-white text-sm w-[80px] sm:w-[200px] rounded-3xl bg-[#004d12] h-[30px] pl-10 border-none outline-none focus:outline-2 focus:outline-offset-0 focus:outline-sky-400 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
                />
                <SearchIcon translate="translate-y-[-110%] translate-x-1/2"/>
              </>
            )}
          </div>
          <nav className="text-white flex justify-center gap-2 sm:gap-4 row-start-1 row-end-2 col-start-1 col-end-2 items-center pointer-events-none">
            <Link to="/">
              <h5 className="text-sm sm:text-base cursor-pointer hover:underline underline-offset-4 decoration-sky-400 pointer-events-auto">
                Home
              </h5>
            </Link>
            <Link to="/news/1">
              <h5 className="text-sm sm:text-base cursor-pointer hover:underline underline-offset-4 decoration-sky-400 pointer-events-auto">
                News
              </h5>
            </Link>
            <Link to="/wildfiretracker">
              <h5 className="text-sm sm:text-base cursor-pointer hover:underline underline-offset-4 decoration-sky-400 pointer-events-auto">
                Wildfire Tracker
              </h5>
            </Link>
          </nav>
          <div className="grid justify-end row-start-1 row-end-2 col-start-1 col-end-2 pointer-events-none">
            {isMobile ? <SearchIcon translate="translate-x-[-110%] translate-y-[25%]"/> : <SocialMediaIcons />}
          </div>
        </div>
      </div>
    </>
  );
};
