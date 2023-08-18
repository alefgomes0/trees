import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { SocialMediaIcons } from "../SocialMediaIcons/SocialMediaIcons";
import { Hamburger } from "../Hamburger/Hamburger";
import { useState, useRef, useEffect } from "react";
import { SearchIcon } from "../svg/SearchIcon";



export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null!);
  const svgRef = useRef<SVGSVGElement>(null!);
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isVisible && !divRef.current.contains(e.target as Node)) {
        setIsVisible(!isVisible);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isVisible]);

  return (
    <>
      <div className="flex flex-col w-auto md:w-screen">
        <div className="grid grid-rows-[minmax(60px,60px)] grid-cols-1 row-start-1 row-end-2 bg-[#00851f] items-center justify-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] px-2 md:px-16">
          <div className="flex items-center justify-center gap-10 justify-self-start row-start-1 row-end-2 col-start-1 col-end-2">
            <Link to="/donate" onClick={scrollToTop}>
              <button className="text-white opacity-[85%] rounded-3xl w-[100px] sm:w-[150px] py-1 bg-purple-800 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]">
                Donate
              </button>
            </Link>
          </div>
          <Link
            to="/"
            className="text-3xl text-white self-center justify-self-center row-start-1 row-end-2 col-start-1 col-end-2 font-IBMSerifMedium opacity-90"
          >
            <h1>TREES</h1>
          </Link>
          <div
            ref={divRef}
            onClick={(e: React.MouseEvent | MouseEvent) => {
              if (e.target === divRef.current) setIsVisible(!isVisible);
            }}
            className="relative flex w-20 h-[100%] justify-center items-center justify-self-end rows-1 row-start-1 row-end-2 col-start-1 col-end-2 hover:bg-[#00751b] cursor-pointer"
          >
            <svg
              onClick={(e: React.MouseEvent | MouseEvent) => {
                if (svgRef.current.contains(e.target as Node))
                  setIsVisible(!isVisible);
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
            <Hamburger isVisible={isVisible} hide={setIsVisible} isDesktop={isDesktop}/>
          </div>
        </div>
        <div className="h-[40px] bg-[#00851f] opacity-70 grid grid-rows-[minmax(40px, 40px)] grid-cols-1 content-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] p-2 md:px-16">
          <nav className="text-gwhite flex justify-center justify-items-center gap-4 md:gap-4 row-start-1 row-end-2 col-start-1 col-end-2 items-center pointer-events-none">
            <Link to="/">
              <h5 className="text-lg  lg:text-base cursor-pointer hover:underline underline-offset-4 decoration-sky-400 pointer-events-auto">
                Home
              </h5>
            </Link>
            <Link to="/news/1">
              <h5 className="text-lg  lg:text-base cursor-pointer hover:underline underline-offset-4 decoration-sky-400 pointer-events-auto">
                News
              </h5>
            </Link>
            <Link to="/wildfiretracker">
              <h5 className="text-lg lg:text-base cursor-pointer hover:underline underline-offset-4 decoration-sky-400 pointer-events-auto">
                {!isDesktop ? "Tracker" : "Wildfire Tracker"}
              </h5>
            </Link>
          </nav>
          {!isDesktop ? (
            <></>
          ) : (
            <>
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 w-full h-full flex items-center pointer-events-none">
                <input type="search" className="text-sm w-[150px] h-6 rounded-xl bg-[#aec2b2] border-0 border-transparent outline-0 focus:ring-2 focus:ring-sky-500 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset] pointer-events-auto pl-8 mr-4"/>
                <SearchIcon translate="translate-x-[-680%]"/>
              </div>
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 w-full h-full flex items-center justify-end pointer-events-none">
                <SocialMediaIcons width="16px" height="16px" gap={1}/>
              </div>
              <div></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
