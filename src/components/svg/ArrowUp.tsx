import { useState, useEffect } from "react";

export const ArrowUp = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = window.document.documentElement.scrollHeight * 0.05;
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    setShowArrow(currentScroll > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showArrow ? (
    <div
      className="fixed bottom-0 right-0 flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-theme cursor-pointer mb-1 mr-1"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        className="opacity-90 hover:translate-y-[-25%] transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#cddad0"
          d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
        />
      </svg>
    </div>
  ) : (
    <></>
  );
};
