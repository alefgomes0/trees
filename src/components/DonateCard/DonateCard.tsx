export const DonateCard = () => {
  return (
    <div className="w-80 h-96 grid grid-cols-1 border-solid border-2 border-stone-400">
      <h4 className="text-center">Choose an amount to donate</h4>
      <div className="grid grid-cols-[100px_minmax(100px,_1fr)_100px] gap-2">
        <button className=" border-solid border-2 border-zinc-400">$ 10</button>
        <button className=" border-solid border-2 border-zinc-400">$ 25</button>
        <button className=" border-solid border-2 border-zinc-400">$ 50</button>
        <button className=" border-solid border-2 border-zinc-400">$ 100</button>
        <button className=" border-solid border-2 border-zinc-400 col-span-2">Other amount</button>
      </div>
      <button className="h-16 self-center border-solid border-2 border-sky-400">Donate</button>
    </div>
  )
}