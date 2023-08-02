import { UnderHeaderCTA } from "../UnderHeaderCTA/UnderHeaderCTA";

export const WildfireCTA = () => {
  return (
    <div className="relative grid h-[100svh] bg-[url('../../../images/matt-howard-eAKDzK4lo4o-unsplash.jpg')] bg-cover bg-center">
      <UnderHeaderCTA />
      <h6 className="absolute bottom-0 left-0 text-xs text-white">
        Photo by 
        <a
          className="underline"
          href="https://unsplash.com/pt-br/@thematthoward?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Matt Howard
        </a>{" "}
        at{" "}
        <a
          className="underline"
          href="https://unsplash.com/pt-br/fotografias/eAKDzK4lo4o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </h6>
    </div>
  );
};
