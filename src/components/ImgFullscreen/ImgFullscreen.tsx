import { useEffect, useRef } from "react";

type ImgFullscreenProps = {
  path: string;
  alt: string;
  width: number;
  height: number;
  showFullScreen: boolean;
  close: () => void;
};

export const ImgFullscreen = (props: ImgFullscreenProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const divRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeWhenClickOutside = (e: MouseEvent) => {
      if (divRef.current?.contains(e.target as Node) && props.showFullScreen) {
        if (!divRef2.current?.contains(e.target as Node)) props.close();
      }
    };

    window.addEventListener("click", closeWhenClickOutside);
    return () => window.removeEventListener("click", closeWhenClickOutside);
  }, []);

  return (
    <div
      ref={divRef}
      className="w-[100vw] h-[100vh] z-21 bg-[#C9D9CD] opacity-90 fixed top-0 left-0 flex items-center justify-center"
    >
      <div className="relative" ref={divRef2}>
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
            fill="#272b28"
            d="m37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z"
          />
          <path
            fill="#272b28"
            d="m12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z"
          />
        </svg>
      </div>
    </div>
  );
};
