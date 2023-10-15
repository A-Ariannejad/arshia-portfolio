import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">Interests</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="max-w-sm xl:max-w-4xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:max-h-fit max-h-20 overflow-auto scrollbar scrollbar-thumb-[#1b1738] scrollbar-thumb-rou   scrollbar-thin "
            >
              My focus lies in these fields, driven by the desire for self-improvement and the ultimate goal of creating meaningful experiences that people can use, play, enjoy, and cherish as they make lasting memories. By continuously honing my skills, I aim to bring innovation and excellence to my work, making a positive impact on the lives of others through the products and experiences I create.
          </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="w-full xl:max-w-[65%] "
          >
            <ServiceSlider></ServiceSlider>
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;
