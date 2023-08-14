import { useRef } from "react";

export const Newsletter = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  return (
    <div className="relative h-[50svh] bg-[url('../../../images/azzedine-rouichi-ijdx54zvv28-unsplash.jpg')] bg-cover bg-center mb-16 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)]">
      <form className="grid items-center w-[100%] h-[100%] bg-black opacity-80 px-2 sm:pl-16">
        <div className="grid grid-rows-[auto_auto_auto] grid-cols-1 gap-6">
          <h4 className="text-4xl text-white font-IBMSerifMedium">
            Sign our newsletter
          </h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white pb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-64 h-6 rounded text-xs border-none outline-none focus:outline-[3px] focus:outline-offset-0 focus:outline-sky-400 placeholder:text-black placeholder:text-xs pl-1"
                required={true}
                min={5}
                max={40}
                ref={nameInputRef}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white pb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                className="focus:invalid:outline-red-500 w-64 h-6 rounded text-xs border-none outline-none focus:outline-[3px] focus:outline-offset-0 focus:outline-sky-400 placeholder:text-black placeholder:text-xs pl-1"
                required={true}
                min={5}
                max={40}
                ref={emailInputRef}
              />
            </div>
          </div>
          <button
            className="w-32 h-8 bg-[#00851f] text-white rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </div>
      </form>
      <h5 className="text-white text-xs absolute bottom-0 right-0 opacity-70">
        Photo by{" "}
        <a
          className="underline"
          href="https://unsplash.com/pt-br/@rouichi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Azzedine Rouichi
        </a>{" "}
        at{" "}
        <a
          className="underline"
          href="https://unsplash.com/pt-br/fotografias/ijdx54zvv28?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </h5>
    </div>
  );
};
