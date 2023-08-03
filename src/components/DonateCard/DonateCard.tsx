import { useState } from "react";

export const DonateCard = () => {
  const [selectButton, setSelectButton] = useState(1);
  const [amount, setAmount] = useState(0);

  return (
    <div className="w-96 h-96 grid grid-cols-1 border-solid border-2 border-stone-400 px-2">
      <h4 className="text-center">Choose an amount to donate</h4>
      <div className="grid grid-cols-[100px_minmax(100px,_1fr)_100px] gap-2">
        <button
          className={`border-solid border-2 border-zinc-400 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.2)_inset] ${
            selectButton === 0
              ? "bg-[#3d91ff] text-white"
              : "bg-[#bfbfbf] opacity-50"
          }`}
          onClick={() => setSelectButton(0)}
        >
          $ 10
        </button>
        <button
          className={`border-solid border-2 border-zinc-400 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.2)_inset] ${
            selectButton === 1
              ? "bg-[#3d91ff] text-white"
              : "bg-[#bfbfbf] opacity-50"
          }`}
          onClick={() => setSelectButton(1)}
        >
          $ 25
        </button>
        <button
          className={`border-solid border-2 border-zinc-400 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.2)_inset] ${
            selectButton === 2
              ? "bg-[#3d91ff] text-white"
              : "bg-[#bfbfbf] opacity-50"
          }`}
          onClick={() => setSelectButton(2)}
        >
          $ 50
        </button>
        <button
          className={`border-solid border-2 border-zinc-400 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.2)_inset] ${
            selectButton === 3
              ? "bg-[#3d91ff] text-white"
              : "bg-[#bfbfbf] opacity-50"
          }`}
          onClick={() => setSelectButton(3)}
        >
          $ 100
        </button>
        {selectButton !== 4 ? (
          <button
            className=" border-solid border-2 border-zinc-400 col-span-2 rounded bg-[#bfbfbf] opacity-50 shadow-[0_3px_3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.2)_inset]"
            onClick={() => setSelectButton(4)}
          >
            Other amount
          </button>
        ) : (
          <div className="flex col-span-2 w-[100%] items-center bg-white">
            <span className="px-2">$ </span>
            <input
              type="number"
              className="border-none outline-none color-none bg-none"
              onChange={(e) =>
                Number(e.target.value) < 0
                  ? setAmount(0)
                  : setAmount(Number(e.target.value))
              }
              value={amount}
            />
            <span className="px-2">USD</span>
          </div>
        )}
      </div>
      <button className="h-16 self-center border-solid bg-[#00851f] text-2xl text-[#e3ede6] rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.2)_inset]">
        Donate
      </button>
    </div>
  );
};
