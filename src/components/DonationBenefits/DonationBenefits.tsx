import { BigPlant } from "../svg/BigPlant";
import { Checkmark } from "../svg/Checkmark";
import { MediumPlant } from "../svg/MediumPlant";
import { SmallPlant } from "../svg/SmallPlant";

export const DonationBenefits = () => {
  return (
    <div className="grid grid-rows-3 sm:grid-rows-1 grid-cols-1 sm:grid-cols-3 font-IBMSansLight gap-6 sm:gap-16 w-screen px-2 sm:px-16">
      <div className="rounded text-gwhite w-full grid grid-cols-1 auto-rows-min gap-5 p-5 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] bg-gradient-to-b from-[rgba(61,104,115,1)] from-10% to-[rgba(50,88,98,1)] to-90%">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h4 className="text-4xl font-IBMSerifLight">Pro</h4>
            <h5 className="text-xs opacity-90">For the idk</h5>
          </div>
          <div className="self-center">
            <SmallPlant width="30" height="30" />
          </div>
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
      <div className="rounded text-gwhite w-full grid grid-cols-1 auto-rows-min gap-5 p-5 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] bg-gradient-to-b from-[rgba(61,104,115,1)] from-10% to-[rgba(50,88,98,1)] to-90%">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h4 className="text-4xl font-IBMSerifLight">Ultra</h4>
            <h5 className="text-xs opacity-90">For the eqeqwe</h5>
          </div>
          <div className="self-center">
            <MediumPlant width="40" height="40" />
          </div>
        </div>
        <h4>
          $ <span className="text-4xl">100</span> or more
        </h4>
        <h5 className="font-IBMSansLightItalic">Ultra includes:</h5>
        <div className="flex-col text-sm">
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>In egestas erat</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Enim neque volutpat ac</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Rhoncus aenean vel elit</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Elementum eu facilisis sed</h4>
          </div>
        </div>
      </div>
      <div className="rounded text-gwhite w-full grid grid-cols-1 auto-rows-min gap-5 p-5 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] bg-gradient-to-b from-[rgba(61,104,115,1)] from-10% to-[rgba(50,88,98,1)] to-90%">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h4 className="text-4xl font-IBMSerifLight">Master</h4>
            <h5 className="text-xs opacity-90">For the ...</h5>
          </div>
          <div className="self-center">
            <BigPlant width="40" height="40" />
          </div>
        </div>
        <h4>
          $ <span className="text-4xl">200</span> or more
        </h4>
        <h5 className="font-IBMSansLightItalic">Master includes:</h5>
        <div className="flex-col text-sm">
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Consectetur libero id faucibus</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Ultrices in iaculis nunc sed.</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Pharetra diam sit amet nisl suscipit</h4>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <Checkmark />
            <h4>Congue mauris rhoncus aenean vel</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
