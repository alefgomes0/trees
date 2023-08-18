import { useState } from "react";
import { ImgFullscreen } from "../ImgFullscreen/ImgFullscreen";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

type OurMissionProps = {
  isDesktop: boolean
}

export const OurMission = (props: OurMissionProps) => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [selectImage, setSelectImage] = useState<number | null>(null);
  const handleOnClick = () => {
    setShowFullscreen(!showFullscreen);
  };

  return (
    <>
      <div className="grid grid-rows-[auto_auto_1fr] grid-cols-1 sm:grid-cols-[2fr_3fr] gap-10 md:gap-6 lg:gap-16 bg-[#bddbc6] h-min px-2 sm:px-16 pt-8 sm:mt-16 font-gblack">
        <div className="grid col-start-1 cold-end-2 sm:mt-16 gap-4">
          <h3 className="font-IBMSerifMedium text-3xl sm:text-5xl md:text-3xl lg:text-5xl font-gblack opacity-80">
            WE HAVE A MISSION
          </h3>
          <div>
            <h4 className="text-sm sm:text-xl font-IBMSansLight sm:leading-9">
              Climate emergency is aggravating the number and intensity of
              wildfires around the world. We are determined to help those who
              suffer the most from it
            </h4>
          </div>
          <div>
            <h4 className="text-sm sm:text-xl font-IBMSansLight sm:leading-9">
              Burning vast areas of forests is laying waste to ecosystems,
              biodiversity and people.{" "}
              <span className="font-IBMSansSemibold opacity-[75%]">
                Wildfires are projected to rise by 50 per cent by the end of the
                century
              </span>{" "}
              due to the climate crisis and changes in land use
            </h4>
          </div>
          {props.isDesktop && (
            <Link
              to="/wildfiretracker"
              className="text-xl sm:text-2xl font-IBMSansLight underline underline-offset-4 decoration-sky-500 "
              onClick={scrollToTop}
            >
              Check our Wildfire Tracker to see more details
            </Link>
          )}
        </div>
        <div className="grid sm:col-start-2 sm:col-end-3 gap-6 sm:mt-[75px]">
          <div className="flex gap-4">
            <img
              src="../../../images/img2.png"
              alt="an upwards line chart"
              className="w-20 sm:w-[150px] h-20 sm:h-[150px] rounded bg-[#8cc09b] p-1 sm:p-3 cursor-pointer shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]"
              key={0}
              onClick={() => {
                setSelectImage(2);
                handleOnClick();
              }}
            />
            <h5 className="text-xs sm:text-sm font-IBMSansLight sm:w-[40%] leading-4">
              Diam sollicitudin tempor id eu nisl nunc mi. Nunc mattis enim ut
              tellus elementum sagittis. Faucibus in ornare quam viverra orci
              sagittis.
            </h5>
          </div>
          <div className="flex gap-4 translate-x-[10%]">
            <img
              src="../../../images/img3.png"
              alt="an upwards line chart"
              className="w-20 sm:w-[150px] h-20 sm:h-[150px] rounded bg-[#8cc09b] p-1 sm:p-3 cursor-pointer shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]"
              key={1}
              onClick={() => {
                setSelectImage(3);
                handleOnClick();
              }}
            />
            <h5 className="text-xs sm:text-sm font-IBMSansLight w-[70%] sm:w-[40%] leading-4">
              Eget nunc lobortis mattis aliquam faucibus purus in massa. Et
              ultrices neque ornare aenean euismod.
            </h5>
          </div>
          <div className="flex gap-4 translate-x-[20%]">
            <img
              src="../../../images/img4.png"
              alt="an upwards line chart"
              className="w-20 sm:w-[150px] h-20 sm:h-[150px] rounded bg-[#8cc09b] p-1 sm:p-3 cursor-pointer shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]"
              key={2}
              onClick={() => {
                setSelectImage(4);
                handleOnClick();
              }}
            />
            <h5 className="text-xs sm:text-sm font-IBMSansLight w-[55%] sm:w-[40%] leading-4 mr-2">
              Duis tristique sollicitudin nibh sit amet commodo nulla facilisi.
            </h5>
          </div>
        </div>
        {!props.isDesktop && (
          <Link
            to="/wildfiretracker"
            className="text-xl sm:text-2xl mb-4 font-IBMSansLight underline underline-offset-4 decoration-sky-500 "
            onClick={scrollToTop}
          >
            Check our Wildfire Tracker to see more details
          </Link>
        )}
      </div>
      {showFullscreen && (
        <ImgFullscreen
          path={`../../../images/img${selectImage}.png`}
          alt="an upwards line chart"
          width={300}
          height={300}
          showFullScreen={showFullscreen}
          close={handleOnClick}
        />
      )}
    </>
  );
};
