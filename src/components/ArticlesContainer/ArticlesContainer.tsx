import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

export const ArticlesContainer = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 px-2 sm:px-16 pt-8  pb-8 sm:pt-32 sm:pb-16 gap-6 sm:gap-16 text-[#031206] bg-[#e3ede6]">
      <h3 className="text-4xl sm:text-6xl font-IBMSerifMedium opacity-90">NEWS ABOUT US</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-1 grid-start-2 grid-end-3 gap-8">
        <div className="grid grid-rows-auto md:grid-rows-[min-content_150px_180px_auto] gap-4">
          <img
            src="../../../images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg"
            className="md:h-[300px] object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]"
          />
          <h4 className="text-xl sm:text-2xl font-IBMSerifMedium">
            Hac habitasse platea dictumst sagittis purus.
          </h4>
          <h6 className="text-sm sm:text-base opacity-[85%] sm:opacity-70 line-clamp-none sm:line-clamp-3 lg:line-clamp-none">
            Integer eget aliquet nibh praesent tristique. Donec pretium
            vulputate sapien nec sagittis aliquam malesuada bibendum. Laoreet
            non curabitur gravida arcu ac tortor dignissim convallis aenean.
            Egestas sed sed risus pretium quam vulputate dignissim suspendisse
            in.
          </h6>
          <Link to="news/1" onClick={scrollToTop}>
            <button className="w-[100%] border-2 border-[#00851f] py-1 rounded hover:bg-theme hover:text-gwhite hover:border-transparent transition-all">
              READ MORE
            </button>
          </Link>
        </div>
        <div className="grid grid-rows-auto md:grid-rows-[min-content_150px_180px_auto] gap-4">
          <img
            src="../../../images/nejc-soklic-XXp9RthTqCc-unsplash.jpg"
            className="md:h-[300px] object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]"
          />
          <h4 className="text-2xl text-start font-IBMSerifMedium">
            Nibh ipsum consequat nisl vel pretium nisi vitae suscipit
          </h4>
          <h6 className="text-sm sm:text-base opacity-[85%] sm:opacity-70 line-clamp-none sm:line-clamp-3 lg:line-clamp-none">
            Ullamcorper dignissim cras tincidunt lobortis. Nisl nisi scelerisque
            eu ultrices. Elit scelerisque mauris pellentesque pulvinar. Tortor
            aliquam nulla facilisi cras. Magna fermentum iaculis eu non diam.
            Nisi porta lorem mollis aliquam. Porttitor lacus luctus accumsan
            tortor posuere ac.
          </h6>
          <Link to="news/2" onClick={scrollToTop}>
            <button className="w-[100%] border-2 border-[#00851f] py-1 rounded hover:bg-theme hover:text-gwhite hover:border-transparent transition-all">
              READ MORE
            </button>
          </Link>
        </div>
        <div className="grid grid-rows-auto md:grid-rows-[min-content_150px_180px_auto] gap-4">
          <img
            src="../../../images/fabian-jones-r_hgv8qEkwU-unsplash.jpg"
            className="object-cover md:h-[300px] rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)"
          />
          <h4 className="text-2xl font-IBMSerifMedium">
            Tristique senectus et netus et malesuada fames
          </h4>
          <h6 className="text-sm sm:text-base opacity-[85%] sm:opacity-70 line-clamp-none sm:line-clamp-3 lg:line-clamp-4">
            Dignissim convallis aenean et tortor at risus viverra adipiscing.
            Est velit egestas dui id ornare arcu odio. Eget nullam non nisi est.
            Nibh cras pulvinar mattis nunc sed. Sed risus ultricies tristique
            nulla aliquet enim tortor at auctor. Porta lorem mollis aliquam ut
            porttitor leo a diam. Mauris augue neque gravida in fermentum et
            sollicitudin ac. Ultrices gravida dictum fusce ut placerat.
          </h6>

          <Link to="news/3" onClick={scrollToTop}>
            <button className="w-[100%] border-2 border-[#00851f] py-1 rounded hover:bg-theme hover:text-gwhite hover:border-transparent transition-all">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
