import { useState } from "react";
import { ImgFullscreen } from "../ImgFullscreen/ImgFullscreen";

export const OurMission = () => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [selectImage, setSelectImage] = useState<number | null>(null);
  const handleOnClick = () => {
    setShowFullscreen(!showFullscreen);
  };

  return (
    <>
      <div className="grid grid-rows-[auto_auto_1fr] grid-cols-[2fr_3fr] bg-[#bddbc6] gap-8 h-[calc(100vh-150px)] pl-16 mt-16 pr-16 font-gblack">
        <div className="grid col-start-1 cold-end-2 mt-16 gap-4">
          <h3 className="font-IBMSerifMedium text-5xl font-gblack opacity-80">
            WE HAVE A MISSION
          </h3>
          <div>
            <h4 className="text-2xl font-IBMSansLight leading-9">
              Climate emergency is aggravating the number and intensity of
              wildfires around the world. We are determined to help those who
              suffer the most from it
            </h4>
          </div>
          <div>
            <h4 className="text-2xl font-IBMSansLight leading-9">
              Burning vast areas of forests is laying waste to ecosystems,
              biodiversity and people.{" "}
              <span className="font-IBMSansSemibold opacity-[75%]">
                Wildfires are projected to rise by 50 per cent by the end of the
                century
              </span>{" "}
              due to the climate crisis and changes in land use
            </h4>
          </div>
        </div>
        <div className="grid col-start-2 col-end-3 gap-6 mt-[75px]">
          <div className="flex gap-4">
            <img
              src="../../../images/img2.png"
              alt="an upwards line chart"
              className="w-[150px] h-[150px] rounded bg-[#8cc09b] p-3 cursor-pointer"
              key={0}
              onClick={() => {
                setSelectImage(2);
                handleOnClick();
              }}
            />
            <h5 className="text-sm font-IBMSansLight w-[40%]">
              Diam sollicitudin tempor id eu nisl nunc mi. Nunc mattis enim ut
              tellus elementum sagittis. Faucibus in ornare quam viverra orci
              sagittis.
            </h5>
          </div>
          <div className="flex gap-4 translate-x-[10%]">
            <img
              src="../../../images/img3.png"
              alt="an upwards line chart"
              className="w-[150px] h-[150px] rounded bg-[#8cc09b] p-3 cursor-pointer"
              key={1}
              onClick={() => {
                setSelectImage(3);
                handleOnClick();
              }}
            />
            <h5 className="text-sm font-IBMSansLight w-[40%]">
              Eget nunc lobortis mattis aliquam faucibus purus in massa. Et
              ultrices neque ornare aenean euismod.
            </h5>
          </div>
          <div className="flex gap-4 translate-x-[20%]">
            <img
              src="../../../images/img4.png"
              alt="an upwards line chart"
              className="w-[150px] h-[150px] rounded bg-[#8cc09b] p-3 cursor-pointer"
              key={2}
              onClick={() => {
                setSelectImage(4);
                handleOnClick();
              }}
            />
            <h5 className="text-sm font-IBMSansLight w-[40%]">
              Duis tristique sollicitudin nibh sit amet commodo nulla facilisi.
            </h5>
          </div>
        </div>
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
