// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {
  SiVisualstudiocode,
  SiYoutubegaming,
} from "react-icons/si";

import{
  GiHumanPyramid
}from "react-icons/gi"

import{
  FaDatabase
}from "react-icons/fa"

import{
  IoGameController
}from "react-icons/io5"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <SiVisualstudiocode />,
    title: "Software Engineering",
    description: "Software Engineering is the systematic application of engineering principles and practices to develop and maintain high-quality software systems.",
  },
  {
    icon: <GiHumanPyramid />,
    title: "Human Computer Interaction",
    description: "Human Computer Interaction is the study and design of how users interact with computer systems and software interfaces.",
  },
  {
    icon: <SiYoutubegaming />,
    title: "Serious Gaming",
    description: "Serious Gaming refers to the use of video games or game-like interactive experiences for purposes beyond entertainment, such as education, training, simulation, or problem-solving.",
  },
  {
    icon: <IoGameController />,
    title: "Game Development & Development",
    description: "Creating interactive experiences through creative conceptualization, design, and technical implementation.",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    description: "Databases refer to structured collections of data that are organized, stored, and managed to facilitate efficient retrieval, manipulation, and analysis of information.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[300px] sm:h-[400px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} >
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 min-h-[360px]">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div>
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal "> {item.description} </p>
              </div>
              {/* arrow */}
              {/* <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 "></RxArrowTopRight>
              </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
