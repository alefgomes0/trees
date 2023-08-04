import { DonateCard } from "../../components/DonateCard/DonateCard"
import { DonationBenefits } from "../../components/DonationBenefits/DonationBenefits"

export const Donate = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 items-center gap-8 px-16 mb-32">
      <div className="flex flex-col">
        <h3 className="text-4xl mt-16 font-IBMSerifMedium opacity-75">Your donation turns our planet into a better place</h3>
        <h5 className="font-IBMSerifMedium opacity-60">(And you also gain benefits!)</h5>
      </div>
      <DonationBenefits />
      <DonateCard />
    </div>
  )
}