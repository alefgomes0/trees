import { useRef, useEffect } from "react";

type HamburgerProps = {
  isVisible: boolean;
  handleClick: (e: React.MouseEvent | MouseEvent) => void;
};

export const Hamburger = (props: HamburgerProps) => {
  const divRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (props.isVisible && !divRef.current.contains(e.target as Node)) {
        props.handleClick(e);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [props.isVisible]);

  return (
    <div
      ref={divRef}
      className={`fixed z-20 opacity-[95%] top-0 right-0 grid grid-cols-1 grid-rows-1 h-[100svh] w-[50vw] bg-gradient-to-b from-gray-100 to-gray-500 ${
        props.isVisible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500`}
    >
      <div className="flex flex-col sm:mt-16 mt-16 sm:ml-16 ml-2 gap-4 text-xl opacity-90">
        <h3 className="mb-8 text-2xl sm:text-4xl text-gblack">External Links</h3>
        <h4 className="text-sm sm:text-base cursor-pointer underline underline-offset-4 underline-sky-400 mb-4">Awesome link 1</h4>
        <h4 className="text-sm sm:text-base cursor-pointer underline underline-offset-4 underline-sky-400 mb-4">Awesome link 2</h4>
        <h4 className="text-sm sm:text-base cursor-pointer underline underline-offset-4 underline-sky-400 mb-4">Awesome link 3</h4>
        <h4 className="text-sm sm:text-base cursor-pointer underline underline-offset-4 underline-sky-400 mb-4">Awesome link 4</h4>
      </div>
      <div className="absolute right-0 cursor-pointer opacity-50">
        <svg
          onClick={(e) => props.handleClick(e)}
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
