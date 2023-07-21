export const MonthlyCards = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-3">
      <div className="w-64 h-96 grid grid-cols-1 auto-rows-min gap-5 p-5 border-solid border-2 border-sky-400">
        <div className="grid grid-rows-2">
          <h4>Pro</h4>
          <h5>For the idk</h5>
        </div>
        <h4>$ 10/month</h4>
        <button className="bg-sky-400">Sponsor now</button>
        <h5>Pro includes:</h5>
        <div className="flex-col">
          <h6>1</h6>
          <h6>2</h6>
          <h6>3</h6>
        </div>
      </div>
      <div className="w-64 h-96 grid grid-cols-1 auto-rows-min gap-5 p-5 border-solid border-2 border-stone-400">
        <div className="grid grid-cols-2 grid-rows-2">
          <h4>Master</h4>
          <h4 className="justify-self-end">POPULAR</h4>
          <h5>For the aa</h5>
        </div>
        <h4>$ 50/month</h4>
        <button className="bg-sky-400">Sponsor now</button>
        <h5>Everything in Pro and:</h5>
        <div className="flex-col">
          <h6>1</h6>
          <h6>2</h6>
          <h6>3</h6>
        </div>
      </div>
      <div className="w-64 h-96 grid grid-cols-1 auto-rows-min gap-5 p-5 border-solid border-2 border-red-400">
        <div className="grid grid-rows-2">
          <h4>Ultra</h4>
          <h5>For the fdsfds</h5>
        </div>
        <h4>$ 100/month</h4>
        <button className="bg-sky-400">Sponsor now</button>
        <h5>Everything in Master and:</h5>
        <div className="flex-col">
          <h6>1</h6>
          <h6>2</h6>
          <h6>3</h6>
        </div>
      </div>
    </div>
  )
}