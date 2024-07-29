import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "OnlineShop-Backend",
          path: "/thumb1.jpg",
          link: "https://github.com/A-Ariannejad/OnlineShop-Backend",
        },
        {
          title: "OnlineShop-Frontend ",
          path: "/thumb2.jpg",
          link: "https://github.com/A-Ariannejad/OnlineShop-Fronted",
        },
        {
          title: "NewsCrawler-Backend",
          path: "/thumb3.jpg",
          link: "https://github.com/A-Ariannejad/NewsCrawler",
        },
        {
          title: "arshia-portfolio",
          path: "/thumb4.jpg",
          link: "https://github.com/A-Ariannejad/arshia-portfolio",
        },
      ],
    },
    {
      images: [
        {
          title: "ASPnet_mongodb",
          path: "/thumb4.jpg",
          link: "https://github.com/A-Ariannejad/ASPnet_mongodb",
        },
        {
          title: "P2P-Decentralized-Messenger",
          path: "/thumb1.jpg",
          link: "https://github.com/A-Ariannejad/Peer-To-Peer-Decentralized-Messenger-",
        },
        {
          title: "WPF-resturant",
          path: "/thumb2.jpg",
          link: "https://github.com/A-Ariannejad/WPF-restaurant",
        },
        {
          title: "Hexclan_Music_Website-Backend",
          path: "/thumb3.jpg",
          link: "https://github.com/nikinezakati/HexClan_web",
        },
      ],
    },
  ],
};

// icons

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group  "
                  >
                    <Link
                      href={image.link}
                      className="hover:text-accent transiotn-all duration-300"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* Image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={330}
                          alt=""
                        />
                        {/* overly gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] opacity-0 group-hover:opacity-80 transition-all "></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300  ">
                          <div
                            className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem] 
                         "
                          >
                            {/* title part 1 */}
                            <div className=" delay-100 text-white">
                              {image.title}
                            </div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all  duration-300 delay-150 bg-current "></div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 text-white ">
                              <BsArrowRight></BsArrowRight>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
