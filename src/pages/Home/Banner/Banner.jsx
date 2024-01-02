import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel
        // autoPlay={true}
        // interval={6000}
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
      >
        <div className="relative w-full md:h-[88vh]">
          <img
            src="https://thumbs.dreamstime.com/b/baby-kids-toys-frame-white-background-top-view-flat-lay-copy-space-text-baby-kids-toys-frame-white-background-top-view-169492215.jpg"
            alt="slider img"
            className="w-full md:h-[88vh] bg-blend-overlay"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 w-1/2 pl-12 ">
              <h2 className="text-6xl font-bold">
                Affordable Price For All Toys
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas maxime perspiciatis saepe dolores vitae earum nihil,
                commodi Neagh ahgahglah.
              </p>
              <button className="btn btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error font-bold ">
                Latest Toys
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-lego-pixel-toy-promotion-background-image_233870.jpg"
            alt="slider img"
            className="md:h-[88vh]"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 w-1/2 pl-12 ">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas maxime perspiciatis saepe dolores vitae earum nihil,
                commodi.
              </p>
              <button className="btn btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/03/23/24/81/360_F_323248165_jEy8YPCTLfyJl6ApqDrnniTLdmM9aQP9.webp"
            alt="slider img"
            className="md:h-[88vh]"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 w-1/2 pl-12 ">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas maxime perspiciatis saepe dolores vitae earum nihil,
                commodi.
              </p>
              <button className="btn btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
