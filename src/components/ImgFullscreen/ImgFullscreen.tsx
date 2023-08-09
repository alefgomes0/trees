type ImgFullscreenProps = {
  path: string;
  alt: string;
  width: number;
  height: number;
  close: () => void;
};

export const ImgFullscreen = (props: ImgFullscreenProps) => {
  return (
    <div className="w-[100vw] h-[100vh] z-21 bg-[#C9D9CD] opacity-90 fixed top-0 left-0 flex items-center justify-center">
      <div className="relative">
        <img
          className={`w-[${props.width}px] h-[${props.height}px] z-25 opacity-100 bg-[#272b28] p-3 rounded`}
          key={props.path}
          src={props.path}
          alt={props.alt}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          className="absolute top-0 right-0 translate-y-[-100%] translate-x-full cursor-pointer"
          onClick={props.close}
        >
          <path
            fill="currentColor"
            d="m37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z"
          />
          <path
            fill="currentColor"
            d="m12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z"
          />
        </svg>
      </div>
    </div>
  );
};
