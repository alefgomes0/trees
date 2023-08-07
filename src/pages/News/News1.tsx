import { ColoredSocialMediaIcons } from "../../components/ColoredSocialMediaIcons/ColoredSocialMediaIcons";
import { NotifyMistake } from "../../components/NotifyMistake/NotifyMistake";
import { TopNews } from "../../components/TopNews/TopNews";

export const News1 = () => {
  return (
    <>
      <main className="grid grid-cols-12 mt-32 mb-32">
        <article className="col-start-4 col-end-9 leading-7">
          <h3 className="text-5xl font-semibold pb-6 font-IBMSerifBoldItalic">
            Lorem ipsum dolor sit amet
          </h3>
          <h4 className="text-xl mb-14">
            Etiam erat velit scelerisque in. Lorem ipsum dolor sit amet. Orci
            porta non pulvinar neque laoreet suspendisse.
          </h4>
          <img className="shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]" src="https://source.unsplash.com/random/1200x600" alt="" />
          <figcaption className="text-sm opacity-75 pt-1 pb-4 font-IBMSansLight">
            Turpis massa sed elementum tempus egestas.
          </figcaption>
          <hr className="border-[#00851f] mb-10" />
          <div className="grid grid-cols-2 grid-rows-2 gap-1 items-center pb-6 mb-10">
            <h4 className="font-IBMMonoSemibold">
              BY{" "}
              <span className="text-sm font-IBMMonoSemibold opacity-90">
                ALIQUAM ETIAM
              </span>
            </h4>
            <h5 className="row-start-2 text-xs opacity-80 font-IBMMonoRegular">
              22/07/2023. Updated 22h42min
            </h5>
            <div className="social-media-icons flex row-start-2 justify-self-end">
              <ColoredSocialMediaIcons />
            </div>
          </div>
          <p className="first-line:uppercase first-line:tracking-wide first-line:font-IBMSerifSemibold text-xl leading-7 mb-7 font-IBMSansMedium">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam
            sit amet nisl. Adipiscing at in tellus integer feugiat scelerisque
            varius morbi enim. Eu augue ut lectus arcu bibendum at varius vel
            pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci
            porta non. Turpis cursus in hac habitasse platea dictumst.
          </p>
          <p className="text-xl leading-7 mb-7">
            Donec et odio pellentesque diam. Nibh venenatis cras sed felis eget
            velit. Leo duis ut diam quam nulla. Mattis ullamcorper velit sed
            ullamcorper morbi tincidunt ornare massa. Dictum fusce ut placerat
            orci nulla pellentesque dignissim enim. Integer vitae justo eget
            magna fermentum iaculis. In hac habitasse platea dictumst quisque.
            Neque vitae tempus quam pellentesque. At augue eget arcu dictum.
            Diam in arcu cursus euismod quis viverra nibh. Aliquam malesuada
            bibendum arcu vitae elementum curabitur vitae. Sed viverra tellus in
            hac habitasse. Tellus mauris a diam maecenas sed enim ut sem
            viverra.
          </p>
          <blockquote className="text-4xl border-t-4 border-t-[#00851f] border-b-4 border-[#00851f] leading-[50px] mb-7 pt-2 pb-2 font-IBMSansLight">
            "Leo vel orci porta non pulvinar. Tortor vitae purus faucibus
            ornare. Sollicitudin ac orci phasellus egestas tellus rutrum. Amet
            tellus cras adipiscing enim eu. Et malesuada fames ac turpis
            egestas. Pharetra diam sit amet nisl suscipit adipiscing bibendum."
          </blockquote>
          <p className="text-xl leading-7 mb-7">
            Tellus in hac habitasse platea dictumst vestibulum rhoncus est
            pellentesque. Porttitor rhoncus dolor purus non enim praesent
            elementum facilisis. Sed nisi lacus sed viverra. Turpis massa sed
            elementum tempus egestas. Dapibus ultrices in iaculis nunc sed.
            Blandit volutpat maecenas volutpat blandit aliquam etiam erat.
            Molestie a iaculis at erat. Sit amet aliquam id diam maecenas
            ultricies mi. Varius quam quisque id diam vel quam elementum
            pulvinar. Tincidunt eget nullam non nisi est sit amet. Quam id leo
            in vitae turpis massa sed elementum. Orci eu lobortis elementum nibh
            tellus molestie. Vulputate ut pharetra sit amet aliquam.
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
