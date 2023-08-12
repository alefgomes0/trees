import { ColoredSocialMediaIcons } from "../../components/ColoredSocialMediaIcons/ColoredSocialMediaIcons";
import { NotifyMistake } from "../../components/NotifyMistake/NotifyMistake";
import { TopNews } from "../../components/TopNews/TopNews";

export const News3 = () => {
  return (
    <>
      <main className="grid grid-cols-12 mt-32 mb-32">
        <article className="col-start-4 col-end-9 leading-7">
          <h3 className="text-5xl font-semibold pb-6 font-IBMSerifBoldItalic opacity-80">
            Commodo nulla facilisi nullam vehicula accumsan lacus vel diam vel
            quam.
          </h3>
          <h4 className="text-xl mb-14">
            Malesuada fames ac turpis egestas sed tempus urna. Scelerisque eu
            ultrices vitae auctor. In hendrerit gravida rutrum quisque non
            tellus orci ac auctor.
          </h4>
          <img
            className="shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] rounded"
            src="/images/ross-stone-KWYTn9_QKRE-unsplash.jpg"
            alt="a wildfire at california"
          />
          <figcaption className="text-sm opacity-75 pt-1 pb-4 font-IBMSansLight">
            Photo by{" "}
            <a href="https://unsplash.com/pt-br/@rs2photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Ross Stone
            </a>{" "}
            at{" "}
            <a href="https://unsplash.com/pt-br/fotografias/KWYTn9_QKRE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </figcaption>
          <hr className="border-[#00851f] mb-10" />
          <div className="grid grid-cols-2 grid-rows-2 gap-1 items-center pb-6 mb-10">
            <h4 className="font-IBMMonoSemibold opacity-90">
              BY{" "}
              <span className="text-sm font-IBMMonoSemibold">FELIS DONEC</span>
            </h4>
            <h5 className="row-start-2 text-xs opacity-80 font-IBMMonoRegular">
              15/06/2023. Updated 14h07min
            </h5>
            <div className="social-media-icons flex row-start-2 justify-self-end">
              <ColoredSocialMediaIcons />
            </div>
          </div>
          <p className="text-xl leading-7 mb-7">
            In hendrerit gravida rutrum quisque non. Sit amet luctus venenatis
            lectus. Sagittis nisl rhoncus mattis rhoncus urna. Velit dignissim
            sodales ut eu sem integer. Sollicitudin nibh sit amet commodo nulla
            facilisi nullam. Id neque aliquam vestibulum morbi. Tempor nec
            feugiat nisl pretium. Ut pharetra sit amet aliquam id diam maecenas
            ultricies mi. Enim sed faucibus turpis in eu mi bibendum. Curabitur
            gravida arcu ac tortor dignissim convallis aenean et. Quis blandit
            turpis cursus in hac habitasse.
          </p>
          <p className="text-xl leading-7 mb-7">
            Phasellus egestas tellus rutrum tellus pellentesque eu. Egestas
            tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. In
            ornare quam viverra orci sagittis. Neque volutpat ac tincidunt vitae
            semper. Non arcu risus quis varius quam quisque id diam. Nulla
            pellentesque dignissim enim sit amet. Sed velit dignissim sodales ut
            eu. Lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra. Accumsan sit amet nulla facilisi. Sed cras ornare arcu dui
            vivamus arcu.
          </p>
          <h4 className="text-3xl mt-7 mb-7">
            A erat nam at lectus urna duis convallis.
          </h4>
          <p className="text-xl leading-7 mb-7">
            Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nibh cras
            pulvinar mattis nunc sed blandit. A diam maecenas sed enim. Ut enim
            blandit volutpat maecenas volutpat blandit aliquam etiam. Platea
            dictumst vestibulum rhoncus est pellentesque. Venenatis a
            condimentum vitae sapien pellentesque habitant morbi tristique
            senectus. Sem et tortor consequat id porta nibh.{" "}
            <span className="font-semibold">
              Urna id volutpat lacus laoreet non curabitur. Vel quam elementum
              pulvinar etiam non quam lacus:
            </span>
          </p>
          <ul className="text-xl flex flex-col gap-4 list-disc pl-5 mb-7">
            <li>Justo donec enim diam vulputate ut pharetra.</li>
            <li>Ullamcorper a lacus vestibulum sed arcu non odio.</li>
            <li>
              At erat pellentesque adipiscing commodo elit at imperdiet dui
              accumsan.
            </li>
            <li>
              Ligula ullamcorper malesuada proin libero nunc consequat interdum.
            </li>
          </ul>
          <p className="text-xl leading-7 mb-7">
            Lectus arcu bibendum at varius vel pharetra vel turpis nunc.
            Ultrices neque ornare aenean euismod elementum. Dui id ornare arcu
            odio ut sem nulla pharetra. Non sodales neque sodales ut etiam sit
            amet. Pretium lectus quam id leo in. Ac felis donec et odio
            pellentesque diam volutpat commodo. Sed vulputate mi sit amet
            mauris. A erat nam at lectus urna duis convallis. Feugiat sed lectus
            vestibulum mattis ullamcorper velit. Cum sociis natoque penatibus et
            magnis.
          </p>
          <h4 className="text-3xl mt-7 mb-7 font-IBMSerifBoldItalic">
            Magna fringilla urna porttitor rhoncus.
          </h4>
          <p className="text-xl leading-7 mb-7">
            Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.
            Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis
            a. Enim facilisis gravida neque convallis a cras semper. Eget arcu
            dictum varius duis at. Et ligula ullamcorper malesuada proin. Orci
            porta non pulvinar neque laoreet suspendisse interdum consectetur.
            Volutpat est velit egestas dui id ornare arcu odio. Sed sed risus
            pretium quam.
          </p>
          <p className="text-xl leading-7 mb-7">
            Donec ac odio tempor orci dapibus ultrices. Integer quis auctor elit
            sed vulputate mi sit amet. Sollicitudin ac orci phasellus egestas
            tellus. Potenti nullam ac tortor vitae purus. Risus feugiat in ante
            metus dictum at tempor. Nibh cras pulvinar mattis nunc. Nulla at
            volutpat diam ut. Vivamus arcu felis bibendum ut tristique et
            egestas quis ipsum. Volutpat sed cras ornare arcu dui vivamus. Massa
            eget egestas purus viverra. Pellentesque elit eget gravida cum
            sociis natoque. Tortor dignissim convallis aenean et tortor at risus
            viverra adipiscing.
          </p>
          <div className="flex item-center justify-between">
            <NotifyMistake />
            <ColoredSocialMediaIcons />
          </div>
        </article>
        <TopNews />
      </main>
    </>
  );
};
