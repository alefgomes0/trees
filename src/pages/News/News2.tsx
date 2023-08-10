import { NotifyMistake } from "../../components/NotifyMistake/NotifyMistake";
import { TopNews } from "../../components/TopNews/TopNews";
import { ColoredSocialMediaIcons } from "../../components/ColoredSocialMediaIcons/ColoredSocialMediaIcons";

export const News2 = () => {
  return (
    <>
      <main className="grid grid-cols-12 mt-32 mb-32">
        <article className="col-start-4 col-end-9 leading-7 ">
          <h3 className="text-5xl font-semibold pb-6 font-IBMSerifBoldItalic opacity-80">
            Viverra vitae congue eu consequat ac felis donec.
          </h3>
          <h4 className="text-xl mb-14">
            Eget egestas purus viverra accumsan in nisl nisi scelerisque eu.
            Porttitor massa id neque aliquam.
          </h4>
          <img className="shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]" src="https://picsum.photos/1200/600?random=1" alt="" />
          <figcaption className="text-sm opacity-75 pt-1 pb-4 font-IBMSansLight">
            Sollicitudin nibh sit amet commodo nulla facilisi nullam.
          </figcaption>
          <hr className="border-[#00851f] mb-10" />
          <div className="grid grid-cols-2 grid-rows-2 gap-1 items-center pb-6 mb-10">
            <h4 className="font-IBMMonoSemibold opacity-90">
              BY{" "}
              <span className="text-sm">
                MALESUDA BIBENDUM
              </span>
            </h4>
            <h5 className="row-start-2 text-xs opacity-80 font-IBMMonoRegular">
              09/05/2023. Updated 11h31min
            </h5>
            <div className="social-media-icons flex row-start-2 justify-self-end">
              <ColoredSocialMediaIcons />
            </div>
          </div>
          <p className="first-letter:text-5xl first-letter:mr-3 first-letter:float-left text-xl leading-7 mb-7">
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
          <img className="shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]" src="https://picsum.photos/1200/600?random=2" alt="" />
          <figcaption className="text-sm opacity-75 pt-1 pb-7 font-IBMSansLight">
            Eget mauris pharetra et ultrices neque ornare aenean euismod.
          </figcaption>
          <p className="text-xl leading-7 mb-7">
            Lacus viverra vitae congue eu consequat ac felis donec. Vulputate ut
            pharetra sit amet aliquam id diam. Iaculis eu non diam phasellus
            vestibulum lorem. Est ante in nibh mauris cursus. Bibendum arcu
            vitae elementum curabitur vitae nunc. Turpis massa sed elementum
            tempus. Sed adipiscing diam donec adipiscing tristique risus nec
            feugiat. Ultricies mi eget mauris pharetra et ultrices neque.
            Tristique senectus et netus et malesuada fames. Hac habitasse platea
            dictumst quisque sagittis purus sit amet. A cras semper auctor neque
            vitae tempus. Odio tempor orci dapibus ultrices in iaculis nunc.
            Diam sollicitudin tempor id eu nisl nunc mi. Pulvinar mattis nunc
            sed blandit libero volutpat sed cras ornare.
          </p>
          <img className="shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]" src="https://picsum.photos/1200/600?random=3" alt="" />
          <figcaption className="text-sm opacity-75 pt-1 pb-7 font-IBMSansLight">
            Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.
          </figcaption>
          <p className="text-xl leading-7 mb-7">
            Non sodales neque sodales ut. Gravida rutrum quisque non tellus orci
            ac auctor augue mauris. Velit euismod in pellentesque massa.
            Ultrices mi tempus imperdiet nulla malesuada. Morbi quis commodo
            odio aenean sed adipiscing diam. At auctor urna nunc id cursus metus
            aliquam. Consectetur purus ut faucibus pulvinar. Vitae semper quis
            lectus nulla at volutpat. Sit amet consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus. Pellentesque eu
            tincidunt tortor aliquam nulla facilisi cras fermentum odio. Nibh
            praesent tristique magna sit. Viverra mauris in aliquam sem
            fringilla ut morbi tincidunt augue. Ut porttitor leo a diam
            sollicitudin tempor.
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
