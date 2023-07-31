import { SocialMediaIcons } from "../SocialMediaIcons/SocialMediaIcons";

export const Header = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[100%] h-[80px] grid grid-rows-[minmax(80px, 80px)] grid-cols-1 row-start-1 row-end-2 bg-[#00851f] justify-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]">
          <div className="h-20 flex items-center justify-center gap-10 self-start justify-self-start row-start-1 row-end-2 col-start-1 col-end-2 ml-16">
            <button className="text-white rounded-3xl w-[200px] py-1 bg-purple-900 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]">
              Donate
            </button>
          </div>
          <h1 className="text-3xl text-white self-center justify-self-center row-start-1 row-end-2 col-start-1 col-end-2">
            TREES
          </h1>
          <div className="w-20 h-20 flex items-center justify-center self-end justify-self-end rows-1 row-start-1 row-end-2 col-start-1 col-end-2 mr-16 hover:bg-[#00751b] ">
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
          </div>
        </div>
        <div className="h-[40px] bg-[#00851f] opacity-70 grid grid-rows-[minmax(40px, 40px)] grid-cols-1 content-center shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]">
          <nav className="text-white flex justify-center gap-4 row-start-1 row-end-2 col-start-1 col-end-2 items-center">
            <h5 className="cursor-pointer">Home</h5>
            <h5 className="cursor-pointer">About</h5>
            <h5 className="cursor-pointer">Contact</h5>
          </nav>
          <div className="h-[30px] flex items-center justify-center gap-10 self-start justify-self-start row-start-1 row-end-2 col-start-1 col-end-2 ml-16">
            <input
              type="search"
              className="text-white w-[200px] rounded-3xl bg-[#004d12] h-[30px] pl-4 border-none outline-none focus:outline-2 focus:outline-offset-0 focus:outline-sky-400 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
            />
          </div>
          <div className="row-start-1 row-end-2 col-start-1 col-end-2 self-end justify-self-end mr-16">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </>
  );
};
