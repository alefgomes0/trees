import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <main className="h-[calc(100svh-150px)] flex justify-center">
      <div className="flex flex-col justify-items-center gap-4 justify-center">
        <h4 className="text-xl">Hey! It looks like you're lost...</h4>
        <img
          src="/images/undraw_navigator_a479.png"
          alt="car driving on the road"
          className="w-[300px] h-[210px] shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]"
        />
        <Link to="/"><button className="bg-[#00851f] text-gwhite text-lg w-full py-1 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]">Home</button></Link>
      </div>
    </main>
  );
};
