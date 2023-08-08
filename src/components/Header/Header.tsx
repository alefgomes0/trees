import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { SocialMediaIcons } from "../SocialMediaIcons/SocialMediaIcons";
import { Hamburger } from "../Hamburger/Hamburger";
import { useState } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="w-[100%] h-[80px] grid grid-rows-[minmax(80px, 80px)] grid-cols-1 row-start-1 row-end-2 bg-[#00851f] justify-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]">
          <div className="h-20 flex items-center justify-center gap-10 self-start justify-self-start row-start-1 row-end-2 col-start-1 col-end-2 ml-16">
            <Link to="/donate" onClick={scrollToTop}>
              <button className="text-white rounded-3xl w-[200px] py-1 bg-purple-900 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]">
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
            onClick={handleClick}
            className="relative w-20 h-20 flex items-center justify-center self-end justify-self-end rows-1 row-start-1 row-end-2 col-start-1 col-end-2 mr-16 hover:bg-[#00751b] "
          >
            <svg
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
            <Hamburger isVisible={isVisible} />
          </div>
        </div>
        <div className="h-[40px] bg-[#00851f] opacity-70 grid grid-rows-[minmax(40px, 40px)] grid-cols-1 content-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]">
          <nav className="text-white flex justify-center gap-4 row-start-1 row-end-2 col-start-1 col-end-2 items-center">
            <h5 className="cursor-pointer">Home</h5>
            <Link to="/news/1">
              <h5 className="cursor-pointer">News</h5>
            </Link>
            <h5 className="cursor-pointer">About</h5>
          </nav>
          <div className="h-[30px] text-sm items-center justify-center gap-10 self-start justify-self-start row-start-1 row-end-2 col-start-1 col-end-2 ml-16">
            <input
              type="search"
              className="text-white text-sm w-[200px] rounded-3xl bg-[#004d12] h-[30px] pl-10 border-none outline-none focus:outline-2 focus:outline-offset-0 focus:outline-sky-400 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="translate-y-[-110%] translate-x-1/2"
            >
              <path
                fill="#adc2b2"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
              />
            </svg>
          </div>
          <div className="grid justify-end row-start-1 row-end-2 col-start-1 col-end-2 pr-16 pointer-events-none">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </>
  );
};
