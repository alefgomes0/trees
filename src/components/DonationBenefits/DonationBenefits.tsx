import { BigPlant } from "../svg/BigPlant";
import { Checkmark } from "../svg/Checkmark";
import { MediumPlant } from "../svg/MediumPlant";
import { SmallPlant } from "../svg/SmallPlant";

export const DonationBenefits = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-3 font-IBMSansLight">
      <div className="rounded text-gwhite w-64 h-96 grid grid-cols-1 auto-rows-min gap-5 p-5 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] bg-gradient-to-b from-[rgba(61,104,115,1)] from-10%  to-[rgba(50,88,98,1)] to-90%">
        <div className="grid grid-rows-2">
          <div className="flex items-center gap-2">
            <h4 className="text-4xl font-IBMSerifLight">Pro</h4>
            <SmallPlant width="40" height="40" />
          </div>
          <h5 className="text-xs opacity-90">For the idk</h5>
        </div>
        <h4>
          $ <span className="text-4xl">50</span> or more
        </h4>
        <h5 className="font-IBMSansLightItalic">Pro includes:</h5>
        <div className="flex-col text-sm">
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Metus aliquam eleifend</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Posuere sollicitudin</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Mi eget mauris</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Nunc lobortis mattis</h4>
          </div>
        </div>
      </div>
      <div className="relative rounded text-gwhite w-64 h-96 grid grid-cols-1 auto-rows-min gap-5 p-5 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] bg-gradient-to-b from-[rgba(61,104,115,1)] from-10%  to-[rgba(50,88,98,1)] to-90%">
        <div className="grid  grid-rows-2">
          <div className="flex items-center">
            <h4 className="text-4xl font-IBMSerifLight">Master</h4>
            <MediumPlant width="40" height="40" />
          </div>

          <h4 className="absolute top-0 right-0 translate-y-[-50%] text-sm rounded font-bold self-end justify-self-end bg-[#00851f] px-2 py-1">
            POPULAR
          </h4>
          <h5 className="row-start-2 row-end-3 col-start-1 col-end-2 text-xs opacity-90">
            For the aa
          </h5>
        </div>
        <h4>
          $ <span className="text-4xl">100</span> or more
        </h4>
        <h5 className="font-IBMSansLightItalic">Everything in Pro and:</h5>
        <div className="flex-col text-sm">
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Sit amet porttitor</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Eget dolor morbi</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Non arcu risus</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Mi eget mauris</h4>
          </div>
        </div>
      </div>
      <div className="rounded text-gwhite w-64 h-96 grid grid-cols-1 auto-rows-min gap-5 p-5 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] bg-gradient-to-b from-[rgba(61,104,115,1)] from-10%  to-[rgba(50,88,98,1)] to-90%">
        <div className="grid grid-rows-2">
          <div className="flex items-center gap-2">
            <h4 className="text-4xl font-IBMSerifLight">Ultra</h4>
            <BigPlant width="40" height="40" />
          </div>
          <h5 className="text-xs opacity-90">For the fdsfds</h5>
        </div>
        <h4>
          $ <span className="text-4xl">200</span> or more
        </h4>
        <h5 className="font-IBMSansLightItalic">Everything in Master and:</h5>
        <div className="flex-col text-sm">
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Nunc non blandit</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Massa enim nec</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Morbi leo urna</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Est sit amet</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
