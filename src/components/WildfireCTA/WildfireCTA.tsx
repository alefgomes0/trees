import { UnderHeaderCTA } from "../UnderHeaderCTA/UnderHeaderCTA";

export const WildfireCTA = () => {
  return (
    <div className="relative grid h-[100svh] bg-[url('../../../images/matt-howard-eAKDzK4lo4o-unsplash.jpg')] bg-cover bg-center">
      <UnderHeaderCTA />
      <h6 className="absolute top-100 lg:bottom-0 left-0 text-xs text-gwhite">
        Photo by{" "}
        <a href="https://unsplash.com/pt-br/@thematthoward?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">
          Matt Howard
        </a>{" "}
        at{" "}
        <a href="https://unsplash.com/pt-br/fotografias/eAKDzK4lo4o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">
          Unplash
        </a>
      </h6>
    </div>
  );
};
