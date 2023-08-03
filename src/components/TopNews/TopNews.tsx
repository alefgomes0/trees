export const TopNews = () => {
  return (
    <div className="h-96 grid grid-cols-1 grid-rows-[auto_1fr_1fr_1fr_1fr]  col-start-10 col-end-12 mt-40">
      <h4 className="text-2xl font-IBMSerifMedium pb-6">TOP NEWS</h4>
      <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2 overflow-clip border-b-2 border-500 pb-4 cursor-pointer hover:opacity-40">
        <div className="w-[60px] h-[60px]">
          <img
            src="https://picsum.photos/60/60?random=1"
            className="rounded-[50%] col-start-1"
          ></img>
        </div>
        <h5 className="text-sm leading-4 font-semibold opacity-80">
          Lobortis scelerisque fermentum dui faucibus in ornare
        </h5>
      </div>
      <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2 overflow-clip border-b-2 border-500 pt-2 pb-2 cursor-pointer hover:opacity-40">
        <div className="w-[60px] h-[60px]">
          <img
            src="https://picsum.photos/60/60?random=2"
            className="rounded-[50%] col-start-1"
          ></img>
        </div>
        <h5 className="text-sm leading-4 font-semibold opacity-80">
          Mauris pharetra et ultrices neque ornare aenean euismod
        </h5>
      </div>
      <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2 overflow-clip border-b-2 border-500 pt-2 pb-2 cursor-pointer hover:opacity-40">
        <div className="w-[60px] h-[60px]">
          <img
            src="https://picsum.photos/60/60?random=3"
            className="rounded-[50%] col-start-1"
          ></img>
        </div>
        <h5 className="text-sm leading-4 font-semibold opacity-80">
          Vestibulum lorem sed risus ultricies tristique nulla
        </h5>
      </div>
      <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2 overflow-clip border-b-2 border-500 pt-2 pb-2 cursor-pointer hover:opacity-40">
        <div className="w-[60px] h-[60px]">
          <img
            src="https://picsum.photos/60/60?random=4"
            className="rounded-[50%] col-start-1"
          ></img>
        </div>
        <h5 className="text-sm leading-4 font-semibold opacity-80">
          Nisl suscipit adipiscing bibendum est ultricies integer
        </h5>
      </div>
      <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2 overflow-clip pt-2 pb-2 cursor-pointer hover:opacity-40">
        <div className="w-[60px] h-[60px]">
          <img
            src="https://picsum.photos/60/60?random=5"
            className="rounded-[50%] col-start-1"
          ></img>
        </div>
        <h5 className="text-sm leading-4 font-semibold opacity-80">
          Nisl tincidunt eget nullam non nisi est sit amet
        </h5>
      </div>
    </div>
  );
};
