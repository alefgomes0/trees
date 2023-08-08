type HamburgerProps = {
  isVisible: boolean;
};

export const Hamburger = (props: HamburgerProps) => {
  return (
    <div
      className={`grid grid-cols-1 absolute h-[100svh] w-[50vw] bg-sky-400 ${
        props.isVisible ? "translate-x-[-35%]" : "translate-x-[100%]"
      } translate-y-[44.5%] z-20`}
    >
      <h4>Awesome link 1</h4>
      <h4>Awesome link 1</h4>
      <h4>Awesome link 1</h4>
      <h4>Awesome link 4</h4>
    </div>
  );
};
