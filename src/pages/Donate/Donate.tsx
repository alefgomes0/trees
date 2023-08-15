import { DonateCard } from "../../components/DonateCard/DonateCard";
import { DonationBenefits } from "../../components/DonationBenefits/DonationBenefits";

export const Donate = () => {
  return (
    <main>
      <div className="grid grid-rows-[auto_1fr] grid-cols-1 justify-items-center items-center gap-8 px-2 md:px-16 mb-8 md:mb-16">
        <div className="grid grid-cols-1 justify-items-center sm:justify-items-start lg:justify-items-center">
          <h3 className="text-2xl sm:text-4xl mt-8 sm:mt-16 font-IBMSerifMedium opacity-75">
            Your donation turns our planet into a better place
          </h3>
          <h5 className="font-IBMSerifMedium opacity-[55%]">
            (And you also gain benefits!)
          </h5>
        </div>
        <DonationBenefits />
        <DonateCard />
      </div>
    </main>
  );
};
