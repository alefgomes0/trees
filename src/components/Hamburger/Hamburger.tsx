import { useRef } from "react";

type HamburgerProps = {
  isVisible: boolean;
};

export const Hamburger = (props: HamburgerProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const divWidth = divRef.current?.offsetWidth ?? 0;
  const divLeft = (window.innerWidth - divWidth) / 2;

  return (
    <div
      className={`fixed z-20 top-0 right-0 grid grid-cols-1 grid-rows-1 h-[100svh] w-[50vw] opacity-90 bg-[#adc2b2] ${
        props.isVisible
          ? "animate-[slide-left_1s_ease-in-out] translate-x-[0%]"
          : "animate-[slide-right_1s_ease-in-out] translate-x-full"
      }`}
      ref={divRef}
    >
      <div className="flex flex-col mt-16 ml-16 gap-4 text-xl underline decoration-sky-400">
        <h4 className="cursor-pointer">Awesome link 1</h4>
        <h4 className="cursor-pointer">Awesome link 1</h4>
        <h4 className="cursor-pointer">Awesome link 1</h4>
        <h4 className="cursor-pointer">Awesome link 4</h4>
      </div>
      <div className="absolute right-0 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 20 20"
        >
          <path fill="currentColor" d="m4.3 2.9l12.8 12.8l-1.4 1.4L2.9 4.3z" />
          <path fill="currentColor" d="M17.1 4.3L4.3 17.1l-1.4-1.4L15.7 2.9z" />
        </svg>
      </div>
    </div>
  );
};
